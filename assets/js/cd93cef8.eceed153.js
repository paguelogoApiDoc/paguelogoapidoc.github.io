"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[547],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return p}});var o=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=o.createContext({}),u=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=t,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return a?o.createElement(g,i(i({ref:n},c),{},{components:a})):o.createElement(g,i({ref:n},c))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5896:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var o=a(7462),t=a(3366),r=(a(7294),a(3905)),i=["components"],l={sidebar_position:4},s="Boletos de Cobran\xe7a",u={unversionedId:"tituloFinanceiro",id:"tituloFinanceiro",isDocsHomePage:!1,title:"Boletos de Cobran\xe7a",description:'A funcionalidade de "Boletos" permite criar e gerenciar a situa\xe7\xe3o de um determinado boleto/t\xedtulo dentro do sistema.',source:"@site/docs/tituloFinanceiro.md",sourceDirName:".",slug:"/tituloFinanceiro",permalink:"/docs/tituloFinanceiro",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Resumo Financeiro",permalink:"/docs/resumoFinanceiro"},next:{title:"Pagamento via Cart\xe3o de Cr\xe9dito",permalink:"/docs/cartaoPagamento"}},c=[{value:"Pesquisar",id:"pesquisar",children:[{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o",children:[{value:"Cabe\xe7alhos (HTTP)",id:"cabe\xe7alhos-http",children:[],level:4}],level:3},{value:"Resposta",id:"resposta",children:[],level:3}],level:2},{value:"Gerar novo Boleto",id:"gerar-novo-boleto",children:[{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o-1",children:[{value:"Cabe\xe7alhos (HTTP)",id:"cabe\xe7alhos-http-1",children:[],level:4}],level:3},{value:"Resposta",id:"resposta-1",children:[],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,a=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"boletos-de-cobran\xe7a"},"Boletos de Cobran\xe7a"),(0,r.kt)("p",null,'A funcionalidade de "Boletos" permite criar e gerenciar a situa\xe7\xe3o de um determinado boleto/t\xedtulo dentro do sistema.'),(0,r.kt)("h2",{id:"pesquisar"},"Pesquisar"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requisi\xe7\xe3o"},"Requisi\xe7\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Caminho"',title:'"Caminho"'},"/boleto/pesquisar\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"O caminho acima \xe9 relativo. Consulte o caminho absoluto em ",(0,r.kt)("a",{parentName:"p",href:"./introducao"},"Introdu\xe7\xe3o"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tipo:")," POST",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Body (JSON):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "codigoBoleto":"",\n    "codigoTitulo":"",\n    "valor":"",\n    "valorLiquido":"",\n    "valorPago":"",\n    "dataCadastro":"",\n    "dataRegistro":"",\n    "codigoDeBarras":"",\n    "nossoNumero":"",\n    "digitoNossoNumero":"",\n    "numeroDocumento":"",\n    "situacao":"",\n    "inicio":"",\n    "fim":"",\n    "pagador":{\n        "id":"",\n        "nome":"",\n        "tipo":"",\n        "cpfCnpj":"",\n        "email":""\n    }\n}\n')),(0,r.kt)("h4",{id:"cabe\xe7alhos-http"},"Cabe\xe7alhos (HTTP)"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Content-Type")),(0,r.kt)("td",null,"application/json"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,r.kt)("em",{parentName:"h5"},"Cabe\xe7alhos Padr\xf5es"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Aten\xe7\xe3o para os cabe\xe7alhos padr\xf5es que devem existir na maioria das requisi\xe7\xf5es webservice. Para maiores detalhes sobre esses cabe\xe7alhos, acesso o menu ",(0,r.kt)("a",{parentName:"p",href:"./introducao"},"Introdu\xe7\xe3o"),"."))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"resposta"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "data": [\n        {\n            "codigoTitulo": "9397",\n            "codigoBoleto": "8324",\n            "valor": "1,11",\n            "valorLiquido": null,\n            "valorPago": null,\n            "numeroDocumento": "9397",\n            "dataDocumento": "22/09/2022",\n            "nossoNumero": null,\n            "digitoNossoNumero": null,\n            "dataVencimento": "30/09/2022",\n            "dataCadastro": "22/09/2022",\n            "dataCancelamento": null,\n            "dataPagamento": null,\n            "situacao": "pendente",\n            "linhaDigitavel": "23790288029126500000932001901704187590000000111",\n            "codigoDeBarras": null,\n            "valorMultaPorcentagem": "12,50",\n            "diasParaCobrancaDeMulta": null,\n            "dataRegistro": "22/09/2021",\n            "numeroParcelaCarne": null,\n            "instrucaoLocalPagamento": "",\n            "instrucaoAoPagante": "",\n            "instrucoesGerais": "Para pagamentos realizados ap\xf3s a data de vencimento, deve-se cobrar 12,50% de multa,\\na ser cobrada a partir do 21\xba dia ap\xf3s o vencimento do t\xedtulo.",\n            "linkVisualizacao": "https://www.paguelogo.com.br/api/boleto/XXXXXXX/YY/ZZZZ/U",\n            "pdfBoletoBytesBase64": null,\n            "pagador": {\n                "id": "1490",\n                "nome": "CLIENTE_1",\n                "nomeSocial": null,\n                "cpfCnpj": "198XXXXXX5000107",\n                "tipo": "juridica",\n                "dataNascimento": null,\n                "email": "dabpp@gmail.com",\n                "endereco": null\n            }\n        },\n        {\n            "codigoTitulo": "9396",\n            "codigoBoleto": "8323",\n            "valor": "12,33",\n            "valorLiquido": null,\n            "valorPago": null,\n            "numeroDocumento": "9396",\n            "dataDocumento": "22/09/2022",\n            "nossoNumero": null,\n            "digitoNossoNumero": null,\n            "dataVencimento": "30/09/2022",\n            "dataCadastro": "22/09/2022",\n            "dataCancelamento": null,\n            "dataPagamento": null,\n            "situacao": "pendente",\n            "linhaDigitavel": "23790288029126500000931001901706987590000001233",\n            "codigoDeBarras": null,\n            "valorMultaPorcentagem": "12,50",\n            "diasParaCobrancaDeMulta": null,\n            "dataRegistro": "22/09/2021",\n            "numeroParcelaCarne": null,\n            "instrucaoLocalPagamento": "",\n            "instrucaoAoPagante": "",\n            "instrucoesGerais": "Para pagamentos realizados ap\xf3s a data de vencimento, deve-se cobrar 12,50% de multa,\\na ser cobrada a partir do 21\xba dia ap\xf3s o vencimento do t\xedtulo.",\n            "linkVisualizacao": "https://www.paguelogo.com.br/api/boleto/XXXXXXX/YY/ZZZZ/U",\n            "pdfBoletoBytesBase64": null,\n            "pagador": {\n                "id": "1490",\n                "nome": "CLIENTE_1",\n                "nomeSocial": null,\n                "cpfCnpj": "19XXXXXXXX010700107",\n                "tipo": "juridica",\n                "dataNascimento": null,\n                "email": "dabp@gmail.com",\n                "endereco": null\n            }\n        },\n    ],\n    "responseStatus": [\n        {\n            "status": "ok",\n            "codigo": null,\n            "mensagem": "Sucesso!"\n        }\n    ]\n}\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"gerar-novo-boleto"},"Gerar novo Boleto"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requisi\xe7\xe3o-1"},"Requisi\xe7\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Caminho"',title:'"Caminho"'},"/boleto/gerar\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"O caminho acima \xe9 relativo. Consulte o caminho absoluto em ",(0,r.kt)("a",{parentName:"p",href:"./introducao"},"Introdu\xe7\xe3o"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tipo:")," POST",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Body (JSON):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "valor":"10,05",\n    "nossoNumero":"",\n    "digitoNossoNumero":"",\n    "dataVencimento":"30/12/2022",\n    "instrucaoLocalPagamento":"",\n    "instrucaoAoPagante":"",\n    "instrucoesGerais":"",\n    "enviarBoletoPorEmailParaPagador":"",\n    "gerarPdf":"false",\n    "pagador":{\n        "id":"",\n        "nome":"diego2",\n        "tipo":"fisica",\n        "cpfCnpj":"35801444130",\n        "email":"dabp@gmail.com",\n        "endereco":{\n            "id":"",\n            "logradouro":"rua martins de oliveira",\n            "numero":"",\n            "bairro":"",\n            "cep":"",\n            "cidade":"fortaleza",\n            "complemento":"",\n            "siglaEstado":"ce"\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"cabe\xe7alhos-http-1"},"Cabe\xe7alhos (HTTP)"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Content-Type")),(0,r.kt)("td",null,"application/json"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,r.kt)("em",{parentName:"h5"},"Cabe\xe7alhos Padr\xf5es"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Aten\xe7\xe3o para os cabe\xe7alhos padr\xf5es que devem existir na maioria das requisi\xe7\xf5es webservice. Para maiores detalhes sobre esses cabe\xe7alhos, acesso o menu ",(0,r.kt)("a",{parentName:"p",href:"./introducao"},"Introdu\xe7\xe3o"),"."))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"resposta-1"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "data": {\n        "codigoTitulo": "9398",\n        "codigoBoleto": "8325",\n        "valor": "10,05",\n        "valorLiquido": null,\n        "valorPago": null,\n        "numeroDocumento": "9398",\n        "dataDocumento": "02/12/2021",\n        "nossoNumero": null,\n        "digitoNossoNumero": null,\n        "dataVencimento": "30/12/2022",\n        "dataCadastro": "02/12/2021",\n        "dataCancelamento": null,\n        "dataPagamento": null,\n        "situacao": "pendente",\n        "linhaDigitavel": null,\n        "codigoDeBarras": null,\n        "valorMultaPorcentagem": null,\n        "diasParaCobrancaDeMulta": null,\n        "dataRegistro": null,\n        "numeroParcelaCarne": null,\n        "instrucaoLocalPagamento": "",\n        "instrucaoAoPagante": "",\n        "instrucoesGerais": "",\n        "linkVisualizacao": "https://www.paguelogo.com.br/api/boleto/XXX/YYYY/ZZZZ/U",\n        "pdfBoletoBytesBase64": null,\n        "pagador": {\n            "id": "18852",\n            "nome": "CALEB DE ALMEIDA FELIX",\n            "nomeSocial": null,\n            "cpfCnpj": "35801444130",\n            "tipo": "fisica",\n            "dataNascimento": null,\n            "email": "CALEB@EMAIL.COM.BR",\n            "endereco": {\n                "id": "5701",\n                "logradouro": "RUA DAS FLORES",\n                "numero": "200",\n                "bairro": "COLINAS",\n                "cep": "63660000",\n                "cidade": "TAUA",\n                "complemento": "CASA",\n                "siglaEstado": "CE"\n            }\n        }\n    },\n    "responseStatus": [\n        {\n            "status": "ok",\n            "codigo": null,\n            "mensagem": "Boleto gerado com sucesso!"\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);