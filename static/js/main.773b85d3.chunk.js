(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},205:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),r=c.n(s),o=(c(98),c(23)),i=c.n(o),l=c(38),u=c(11),d=(c(100),c(241)),j=c(242),f=c(243),h=c(232),b=c(236),p=c(14),v=c(237),O=(c(101),c(3));var x=function(e){var t=e.title,c=e.cases,n=e.total,a=e.active,s=e.isRed,r=Object(p.a)(e,["title","cases","total","active","isRed"]);return Object(O.jsx)(h.a,{onClick:r.onClick,className:"infoBox \n          ".concat(a&&"infoBox--selected"," \n          ").concat(s&&"infoBox--red"),children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(v.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(O.jsx)("h2",{className:"infoBox__cases ".concat(!s&&"infoBox__cases--green"),children:c}),Object(O.jsxs)(v.a,{className:"infoBox__total",color:"textSecondary",children:[n," Total"]})]})})},m=c(86),g=c(12),y=c.n(g),_={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}},C=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e.cases[a]-c};n.push(s)}c=e[t][a]}return n};var N=function(e){var t=e.casesType,c=Object(p.a)(e,["casesType"]),a=Object(n.useState)({}),s=Object(u.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=C(e,t);o(c)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(O.jsx)("div",{className:c.className,children:(null===r||void 0===r?void 0:r.length)>0&&Object(O.jsx)(m.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5",borderColor:"#CC1034",data:r}]},options:_})})};c(202);var w=function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.country}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:y()(e.cases).format("0,0")})})]},e.country)}))})})})},k=c(87),S=c(244),T=c(238),B={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:200},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:300},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:500}},I=function(e){var t=Object(k.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},R=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},z=function(e,t){return e.map((function(e){return Object(O.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:B[t].hex,fillColor:B[t].hex},radius:Math.sqrt(e[t])*B[t].multiplier,children:Object(O.jsx)(T.a,{children:Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(O.jsx)("div",{className:"info-name",children:e.country}),Object(O.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(O.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(O.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))},D=(c(203),c(239)),F=c(240),L=c(245);var M=function(e){var t=e.casesType,c=e.countries,n=e.center,a=e.zoom;function s(e){var t=e.center,c=e.zoom;return Object(D.a)().setView(t,c),null}return Object(O.jsxs)(F.a,{className:"map",center:n,zoom:a,children:[Object(O.jsx)(s,{center:n,zoom:a}),Object(O.jsx)(L.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),z(c,t)]})};c(204);var E=function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),r=Object(u.a)(s,2),o=r[0],p=r[1],v=Object(n.useState)([]),m=Object(u.a)(v,2),g=m[0],_=m[1],C=Object(n.useState)([]),k=Object(u.a)(C,2),S=k[0],T=k[1],B=Object(n.useState)([]),z=Object(u.a)(B,2),D=z[0],F=z[1],L=Object(n.useState)("cases"),E=Object(u.a)(L,2),A=E[0],J=E[1],P=Object(n.useState)({lat:34.80746,lng:-40.4796}),W=Object(u.a)(P,2),Y=W[0],q=W[1],V=Object(n.useState)(3),G=Object(u.a)(V,2),H=G[0],K=G[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){p(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=I(e);_(t),F(c),T(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Q=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){a(c),p(e),q([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app__left",children:[Object(O.jsxs)("div",{className:"app__header",children:[Object(O.jsx)("h1",{children:"Covid-19 Tracker"}),Object(O.jsx)(d.a,{className:"app__dropdown",children:Object(O.jsxs)(j.a,{variant:"outlined",value:c,onChange:Q,children:[Object(O.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),g.map((function(e){return Object(O.jsx)(f.a,{value:e.value,children:e.name},e.name)}))]})})]}),Object(O.jsxs)("div",{className:"app__stats",children:[Object(O.jsx)(x,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===A,cases:R(o.todayCases),total:y()(o.cases).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===A,cases:R(o.todayRecovered),total:y()(o.recovered).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return J("deaths")},isRed:!0,active:"deaths"===A,title:"Deaths",cases:R(o.todayDeaths),total:y()(o.deaths).format("0.0a")})]}),Object(O.jsx)(M,{countries:S,casesType:A,center:Y,zoom:H})]}),Object(O.jsx)(h.a,{className:"app__right",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h3",{children:"Live Cases by Country"}),Object(O.jsx)(w,{countries:D}),Object(O.jsxs)("h3",{className:"app__graphTitle",children:["Worldwide new ",A]}),Object(O.jsx)(N,{className:"app__graph",casesType:A})]})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,247)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),A()},98:function(e,t,c){}},[[205,1,2]]]);
//# sourceMappingURL=main.773b85d3.chunk.js.map