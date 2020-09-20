(this["webpackJsonpbipartite-graph"]=this["webpackJsonpbipartite-graph"]||[]).push([[0],{107:function(e,t,a){e.exports=a(248)},112:function(e,t,a){},113:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(105),o=a.n(r),i=(a(112),a(14)),c=(a(113),a(106)),s=a.n(c),u=a(250);var m=function(){var e=[{id:1,label:"1",title:"1",color:"lightgrey"},{id:2,label:"2",title:"2",color:"lightgrey"},{id:3,label:"3",title:"3",color:"lightgrey"},{id:4,label:"4",title:"4",color:"lightgrey"},{id:5,label:"5",title:"5",color:"lightgrey"}],t={edges:[{from:1,to:2},{from:1,to:3},{from:4,to:5}],nodes:e},a=Object(n.useState)(e.length),r=Object(i.a)(a,2),o=r[0],c=r[1],m=Object(n.useState)(t),h=Object(i.a)(m,2),d=h[0],f=h[1],b=Object(n.useState)(u.a),g=Object(i.a)(b,2),p=g[0],E=g[1],v=Object(n.useState)("5 3\n1 2\n1 3\n4 5"),w=Object(i.a)(v,2),y=w[0],k=w[1];return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("a",{href:"https://fazalkhan.net/"}," back to Fazi's Homepage")),l.a.createElement("div",{className:"title"},"Bipartite Graph Coloring"),l.a.createElement("div",{className:"App"},l.a.createElement("textarea",{value:y,id:"user-input",className:"inputs",onChange:function(e){k(e.target.value)}}),l.a.createElement("div",{className:"graph-container"},l.a.createElement(s.a,{key:p,graph:d,options:{layout:{hierarchical:!1},edges:{color:"#000000"},height:"500px"},events:{select:function(e){e.nodes,e.edges}},getNetwork:function(e){}})),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"This app uses Depth-First Search to color a graph, such that no two connected nodes have the same color. The source code can be found"," ",l.a.createElement("a",{href:"https://github.com/acse-fk4517/bipartite-coloring"},"here"),"."),l.a.createElement("p",null,"1. On the first line, enter ",l.a.createElement("b",null,"N")," and ",l.a.createElement("b",null,"M"),". ",l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"N")," is the number of nodes that will be drawn. Nodes are drawn numbered 1,...,",l.a.createElement("b",null,"N"),". ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("b",null,"M")," is the number of lines that follow, which specify the edges. ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("li",null,"Edges are specifed as ",l.a.createElement("b",null,"start")," ",l.a.createElement("b",null,"end"),".",l.a.createElement("br",null))),l.a.createElement("br",null),"2. Click ",l.a.createElement("b",null,"Draw Graph")," to create your graph. ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null),"3. Click ",l.a.createElement("b",null,"Color Graph")," to see the bipartite coloring of the graph. ",l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"If a solution exists, the graph will be colored in a bipartite configuration."),l.a.createElement("br",null),l.a.createElement("li",null,"If a solution does not exist, all nodes will turn red."))),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:function(e){if(""!==y){var t=y.split("\n"),a=parseInt(t[0]);if(!(a>101)){for(var n={nodes:[],edges:[]},l=1;l<=a;l++){var r={id:l,label:"".concat(l),color:"lightgrey"};n.nodes.push(r)}for(var o=1;o<t.length;o++){var i=t[o].split(" "),s=void 0;2==i.length?s={from:i[0],to:i[1]}:1==i.length&&(s={from:i[0]}),n.edges.push(s)}E(u.a),c(a),f(n)}}}},"Draw Graph"),l.a.createElement("button",{onClick:function(e){for(var t=new Array(o+1),a=0;a<=o;a++)t[a]=new Array;var n=new Array(o+1).fill(!1),l=new Array(o+1).fill(!1),r=new Array(o+1).fill(!1),i=!0;for(var c in d.edges){var s=d.edges[c].from,m=d.edges[c].to;"undefined"!==typeof m&&t[s].push(m)}function h(e,a){for(var o in r[e]=!0,1===a?n[e]=!0:l[e]=!0,t[e]){var c=t[e][o];if(!i)return;if(r[c]){if(1===a&&n[c])return void(i=!1);if(2===a&&l[c])return void(i=!1)}else{h(c,1===a?2:1)}}}!function(e){for(var t in d.nodes){var a=d.nodes[t];e?n[a.id]?a.color="green":a.color="orange":a.color="red"}E(u.a),f(d)}(function(){for(var e=1;e<=o;e++)if(!r[e]&&(h(e,1),!i))return!1;return!0}())}},"Color Graph")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.a3bda718.chunk.js.map