"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[664],{7717:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var n=e(7462),r=e(3366),i=(e(7294),e(3905)),l=["components"],o={sidebar_position:4},d="Solicita\xe7\xe3o de Transfer\xeancia",m={unversionedId:"solicitacaoTransferencia",id:"solicitacaoTransferencia",isDocsHomePage:!1,title:"Solicita\xe7\xe3o de Transfer\xeancia",description:"A solicita\xe7\xe3o de transfer\xeancia permite retirar uma quantia de dinheiro da sua conta digital para a sua conta banc\xe1ria ou para conta banc\xe1ria de terceiros.",source:"@site/docs/solicitacaoTransferencia.md",sourceDirName:".",slug:"/solicitacaoTransferencia",permalink:"/docs/solicitacaoTransferencia",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Resumo Financeiro",permalink:"/docs/resumoFinanceiro"},next:{title:"Recupera\xe7\xe3o de Senha",permalink:"/docs/requisicoesBasicas/recuperarSenha"}},p=[{value:"Solicita\xe7\xe3o",id:"solicita\xe7\xe3o",children:[{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o",children:[{value:"Cabe\xe7alhos (HTTP)",id:"cabe\xe7alhos-http",children:[],level:4},{value:"Atributos",id:"atributos",children:[],level:4}],level:3},{value:"Resposta",id:"resposta",children:[{value:"Atributos",id:"atributos-1",children:[],level:4}],level:3}],level:2},{value:"Consulta",id:"consulta",children:[{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o-1",children:[{value:"Cabe\xe7alhos (HTTP)",id:"cabe\xe7alhos-http-1",children:[],level:4},{value:"Par\xe2metros (URL)",id:"par\xe2metros-url",children:[],level:4}],level:3},{value:"Resposta",id:"resposta-1",children:[],level:3}],level:2}],c={toc:p};function s(t){var a=t.components,e=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solicita\xe7\xe3o-de-transfer\xeancia"},"Solicita\xe7\xe3o de Transfer\xeancia"),(0,i.kt)("p",null,"A solicita\xe7\xe3o de transfer\xeancia permite retirar uma quantia de dinheiro da sua conta digital para a sua conta banc\xe1ria ou para conta banc\xe1ria de terceiros."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Os formatos monet\xe1rios ser\xe3o sempres strings contendo como separadores de milhar o "." (ponto), e como separador de casas decimais a "," (v\xedrgula). E tamb\xe9m ter\xe3o geralmente 2 casas decimais.')),(0,i.kt)("h2",{id:"solicita\xe7\xe3o"},"Solicita\xe7\xe3o"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requisi\xe7\xe3o"},"Requisi\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Caminho"',title:'"Caminho"'},"/transferencia/solicitar\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"O caminho acima \xe9 relativo. Consulte o caminho absoluto em ",(0,i.kt)("a",{parentName:"p",href:"./introducao"},"Introdu\xe7\xe3o"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tipo:")," POST",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Body (JSON):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "valorSolicitado":"10.000,00",\n    "tipo":"cartao"\n}\n')),(0,i.kt)("h4",{id:"cabe\xe7alhos-http"},"Cabe\xe7alhos (HTTP)"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Content-Type")),(0,i.kt)("td",null,"application/json")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Authorization")),(0,i.kt)("td",null,"Bearer [token]")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Whois")),(0,i.kt)("td",null,"[c\xf3digo \xfanico do usu\xe1rio]"))),(0,i.kt)("h4",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nome"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Formato"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Valores Poss\xedveis"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"valorSolicitado"),(0,i.kt)("td",{parentName:"tr",align:"left"},"99.999,99"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tipo"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"cartao, boleto")))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"resposta"},"Resposta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "data": {\n        "id": "4519",\n        "valorSolicitado": "10.000,00",\n        "dataSolicitacao": "18/07/2020",\n        "dataTransferencia": null,\n        "dataCancelamento": null,\n        "motivoCancelamento": null,\n        "situacao": "pendente",\n        "tipo": "cartao",\n        "nomeSolicitante": "D\xedgito Global",\n        "cpfCnpjSolicitante": "42107780000113",\n        "contaTransferencia": {\n            "id": "265",\n            "numeroAgencia": "1234",\n            "digitoAgencia": "4",\n            "numeroConta": "4321",\n            "digitoConta": "1",\n            "banco": {\n                "id": "5",\n                "codigo": "237",\n                "nome": "BRADESCO"\n            },\n            "titular": {\n                "id": "5023",\n                "nome": "D\xedgito Global",\n                "nomeSocial": null,\n                "cpfCnpj": "42107780000113",\n                "tipo": "juridica",\n                "dataNascimento": null,\n                "email": "dg@dg.com"\n            }\n        }\n    },\n    "responseStatus": [\n        {\n            "status": "ok",\n            "mensagem": "Sucesso!"\n        }\n    ]\n}\n')),(0,i.kt)("h4",{id:"atributos-1"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nome"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Formato"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Valores Poss\xedveis"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Observa\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"id"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"C\xf3digo interno do sistema de identifica\xe7\xe3o \xfanica")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"valorSolicitado"),(0,i.kt)("td",{parentName:"tr",align:"left"},"99.999,99"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dataSolicitacao"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dd/MM/yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dataTransferencia"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dd/MM/yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dataCancelamento"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dd/MM/yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"motivoCancelamento"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Texto Livre"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"situacao"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"pendente, cancelado, transferido"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tipo"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"cartao, boleto"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"nomeSolicitante"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"cpfCnpjSolicitante"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.id"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"C\xf3digo interno do sistema de identifica\xe7\xe3o \xfanica")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.numeroAgencia"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.digitoAgencia"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.numeroConta"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.digitoConta"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.banco.id"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"C\xf3digo interno do sistema de identifica\xe7\xe3o \xfanica")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.banco.codigo"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.banco.nome"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.id"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"C\xf3digo interno do sistema de identifica\xe7\xe3o \xfanica")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.nome"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.nomeSocial"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.cpfCnpj"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.tipo"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.dataNascimento"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"contaTransferencia.titular.email"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"consulta"},"Consulta"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requisi\xe7\xe3o-1"},"Requisi\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Caminho"',title:'"Caminho"'},"/transferencia/pesquisar?inicio=10/07/2020&fim=01/09/2020\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"O caminho acima \xe9 relativo. Consulte o caminho absoluto em ",(0,i.kt)("a",{parentName:"p",href:"./introducao"},"Introdu\xe7\xe3o"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tipo:")," POST",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Body (JSON):")," Vazio  "),(0,i.kt)("h4",{id:"cabe\xe7alhos-http-1"},"Cabe\xe7alhos (HTTP)"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Content-Type")),(0,i.kt)("td",null,"application/json")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Authorization")),(0,i.kt)("td",null,"Bearer [token]")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Whois")),(0,i.kt)("td",null,"[c\xf3digo \xfanico do usu\xe1rio]"))),(0,i.kt)("h4",{id:"par\xe2metros-url"},"Par\xe2metros (URL)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nome"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Formato"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Observa\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"inicio"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dd/MM/yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data inicial do per\xedodo de pesquisa")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fim"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dd/MM/yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data final do per\xedodo de pesquisa")))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"resposta-1"},"Resposta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    {\n    "data": [\n        {\n            "id": "4517",\n            "valorSolicitado": "10.000,00",\n            "dataSolicitacao": "18/07/2020",\n            "dataTransferencia": null,\n            "dataCancelamento": null,\n            "motivoCancelamento": null,\n            "situacao": "pendente",\n            "tipo": "cartao",\n            "nomeSolicitante": "D\xedgito Global",\n            "cpfCnpjSolicitante": "42107780000113",\n            "contaTransferencia": {\n                "id": "265",\n                "numeroAgencia": "1234",\n                "digitoAgencia": "4",\n                "numeroConta": "4321",\n                "digitoConta": "1",\n                "banco": {\n                    "id": "5",\n                    "codigo": "237",\n                    "nome": "BRADESCO"\n                },\n                "titular": {\n                    "id": "5023",\n                    "nome": "D\xedgito Global",\n                    "nomeSocial": null,\n                    "cpfCnpj": "42107780000113",\n                    "tipo": "juridica",\n                    "dataNascimento": null,\n                    "email": "dg@dg.com",\n                    "endereco": null\n                }\n            }\n        },\n        {\n            "id": "4518",\n            "valorSolicitado": "6,00",\n            "dataSolicitacao": "18/07/2020",\n            "dataTransferencia": null,\n            "dataCancelamento": null,\n            "motivoCancelamento": null,\n            "situacao": "pendente",\n            "tipo": "cartao",\n            "nomeSolicitante": "D\xedgito Global",\n            "cpfCnpjSolicitante": "42107780000113",\n            "contaTransferencia": {\n                "id": "265",\n                "numeroAgencia": "1234",\n                "digitoAgencia": "4",\n                "numeroConta": "4321",\n                "digitoConta": "1",\n                "banco": {\n                    "id": "5",\n                    "codigo": "237",\n                    "nome": "BRADESCO"\n                },\n                "titular": {\n                    "id": "5023",\n                    "nome": "D\xedgito Global",\n                    "nomeSocial": null,\n                    "cpfCnpj": "42107780000113",\n                    "tipo": "juridica",\n                    "dataNascimento": null,\n                    "email": "dg@dg.com",\n                    "endereco": null\n                }\n            }\n        },\n        {\n            "id": "4519",\n            "valorSolicitado": "7,00",\n            "dataSolicitacao": "18/07/2020",\n            "dataTransferencia": null,\n            "dataCancelamento": null,\n            "motivoCancelamento": null,\n            "situacao": "pendente",\n            "tipo": "cartao",\n            "nomeSolicitante": "D\xedgito Global",\n            "cpfCnpjSolicitante": "42107780000113",\n            "contaTransferencia": {\n                "id": "265",\n                "numeroAgencia": "1234",\n                "digitoAgencia": "4",\n                "numeroConta": "4321",\n                "digitoConta": "1",\n                "banco": {\n                    "id": "5",\n                    "codigo": "237",\n                    "nome": "BRADESCO"\n                },\n                "titular": {\n                    "id": "5023",\n                    "nome": "D\xedgito Global",\n                    "nomeSocial": null,\n                    "cpfCnpj": "42107780000113",\n                    "tipo": "juridica",\n                    "dataNascimento": null,\n                    "email": "dg@dg.com",\n                    "endereco": null\n                }\n            }\n        }\n    ],\n    "responseStatus": []\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("em",{parentName:"h5"},"Sobre os atributos de resposta da consulta"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A resposta \xe9 um array de objetos JSON contendo os dados da solicita\xe7\xe3o de transfer\xeancia. Estes dados est\xe3o no mesmo padr\xe3o que o exemplificado e explicado em ",(0,i.kt)("a",{parentName:"p",href:"#atributos-1"},"Atributos de Resposta")))))}s.isMDXComponent=!0}}]);