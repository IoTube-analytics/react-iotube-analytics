(this["webpackJsonpiotube-analytics-dashboard"]=this["webpackJsonpiotube-analytics-dashboard"]||[]).push([[0],{139:function(e,t,r){},313:function(e,t,r){},315:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(26),i=r.n(s),n=(r(139),r(140),r(8)),l=r(9),o=r(13),d=r(12),b=r(324),j=r(326),u=r(2),h=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"gray-background",children:Object(u.jsxs)(b.a,{className:"container",expand:"lg",children:[Object(u.jsx)(b.a.Brand,{href:"#home",children:"IoTube Analytics Dashboard"}),Object(u.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(b.a.Collapse,{children:Object(u.jsxs)(j.a,{className:"mr-auto",children:[Object(u.jsx)(j.a.Link,{href:"#home",children:"Home"}),Object(u.jsx)(j.a.Link,{href:"#link",children:"Link"})]})})]})})}}]),r}(c.Component),m=r(14),f=r(17),x=r(28),O=r.n(x),v=r(39),g=r(59),p=r(92),y=r(126),k=r(127),_=r(0),N=r(125),w=r.n(N);function T(e){return new Promise((function(t){w.a.post("https://onebeaconme.live/api/v1/query",e,{headers:{}}).then((function(e){t(e.data.data.result)})).catch((function(e){console.log(e),t(e)}))}))}var D=function(e,t){switch(t.type){case"USE_ETHEREUM":return Object(m.a)(Object(m.a)({},e),{},{network:"ethereum"});case"USE_BSC":return Object(m.a)(Object(m.a)({},e),{},{network:"bsc"});case"USE_POLYGON":return Object(m.a)(Object(m.a)({},e),{},{network:"polygon"});default:return e}},C={network:"ethereum",error:null},S=Object(c.createContext)(C),F=function(e){var t=e.children,r=Object(c.useReducer)(D,C),a=Object(f.a)(r,2),s=a[0],i=a[1];return Object(u.jsx)(S.Provider,{value:[s,i],children:t})},q=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(e){var c;switch(Object(n.a)(this,r),(c=t.call(this,e)).title=e.title,c.iconCode=e.iconCode,c.staticIcon="",c.iconCode){case"FaBattleNet":c.staticIcon=Object(u.jsx)(g.a,{});break;case"BsPeopleFill":c.staticIcon=Object(u.jsx)(p.b,{});break;case"FaCommentDollar":c.staticIcon=Object(u.jsx)(g.b,{});break;case"BiDollar":c.staticIcon=Object(u.jsx)(y.a,{});break;default:c.staticIcon=Object(u.jsx)(p.a,{})}return c.state={isFetching:!1,data:[],network:"ethereum",query:e.query},c}return Object(l.a)(r,[{key:"fetchData",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.query.replace(/%\w+%/g,this.state.network),e.next=3,T(t);case 3:r=e.sent,this.setState({data:r[0],isFetching:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(this.context,1)[0];e.network!==this.state.network&&(this.setState(Object(m.a)(Object(m.a)({},this.state),{},{network:e.network})),this.fetchData())}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("div",{className:"card-icon-container",children:Object(u.jsx)(_.b.Provider,{value:{color:"#82CA9D",size:"20px"},children:Object(u.jsx)("div",{children:Object(u.jsx)(k.a,{})})})})}),Object(u.jsx)("div",{className:"col-10",children:Object(u.jsx)("p",{children:this.title})})]}),Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"card-body-icon-container",children:[Object(u.jsx)(_.b.Provider,{value:{color:"#82CA9D",size:"35px"},children:this.staticIcon}),Object(u.jsx)("p",{className:"value",children:"undefined"!=typeof this.state.data&&this.state.data._value})]})})})]})}}]),r}(c.Component);q.contextType=S;var B=q,E=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container top-cards-container",children:[Object(u.jsx)("div",{className:"row no-gutters",children:Object(u.jsx)("div",{className:"col-lg-12 d-flex align-self-stretch col-sm-12 col-xs-12 card p-1",children:Object(u.jsxs)("div",{className:"row d-flex align-self-stretch justify-content-center no-gutters",children:[Object(u.jsx)("div",{className:"col-lg-3 col-sm-12 col-xs-12 top-card m-1",children:Object(u.jsx)(B,{title:"Total TXS",query:'from(bucket: "my-bucket") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["_field"] == "amount" and r["bridge"] == "%bridge%") |> group(columns: [ "_field"]) |> count()',iconCode:"BsFillPieChartFill"})}),Object(u.jsx)("div",{className:"col-lg-3 col-sm-12 col-xs-12 top-card m-1",children:Object(u.jsx)(B,{title:"Total bridge user",query:'from(bucket: "my-bucket") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["bridge"] == "%bridge%") |> group(columns: ["from"], mode: "by") |> count() |> group(columns: ["_field"], mode: "by") |> count()',iconCode:"BsPeopleFill"})}),Object(u.jsx)("div",{className:"col-lg-5 col-sm-12 col-xs-12 top-card m-1",children:Object(u.jsx)(B,{title:"Total bridge user",query:'from(bucket: "my-bucket") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["bridge"] == "%bridge%") |> group(columns: ["from"], mode: "by") |> count() |> group(columns: ["_field"], mode: "by") |> count()',iconCode:"BsPeopleFill"})})]})})}),Object(u.jsx)("div",{className:"row no-gutters",children:Object(u.jsx)("div",{className:"col-lg-12 d-flex align-self-stretch col-sm-12 col-xs-12 card p-1",children:Object(u.jsxs)("div",{className:"row d-flex align-self-stretch justify-content-center no-gutters",children:[Object(u.jsx)("div",{className:"col-lg-5 col-sm-12 col-xs-12 top-card m-1",children:Object(u.jsx)(B,{title:"$Total value locked (all bridges)",query:'tvl = from(bucket: "my-bucket") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "tvl") |> filter(fn: (r) => r["_field"] == "tvl") |> last() price = from(bucket: "my-bucket") |> range(start: -10d) |> filter(fn: (r) => r["_measurement"] == "price") |> last() usd_tvl = join(tables: {tvl: tvl, price: price}, on: ["symbol"])|> map(fn: (r) => ({_time: r._time,_value: r._value_tvl * r._value_price})) |> sum(column: "_value") |> yield(name: "symbol")',iconCode:"FaCommentDollar"})}),Object(u.jsx)("div",{className:"col-lg-5 col-sm-12 col-xs-12 top-card m-1",children:Object(u.jsx)(B,{title:"$Total value locked (in usd)",query:'tvl = from(bucket: "my-bucket") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "tvl") |> filter(fn: (r) => r["_field"] == "tvl") |> filter(fn: (r) => r["network"] == "%bridge%") |> last() price = from(bucket: "my-bucket") |> range(start: -5d) |> filter(fn: (r) => r["_measurement"] == "price") |> last() usd_tvl = join(tables: {tvl: tvl, price: price}, on: ["symbol"])|> map(fn: (r) => ({_time: r._time,_value: r._value_tvl * r._value_price}))|> sum(column: "_value") |> yield(name: "symbol")',iconCode:"BiDollar"})})]})})})]})}}]),r}(c.Component),I=r(132),P=r(130),U=r.n(P),A=r(269),L=["#a88add","#0cc2aa","#FFA500","#ff2500","#005aff","#a500ff"],M=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(e){var c;return Object(n.a)(this,r),(c=t.call(this,e)).chartTitle=e.chartTitle,c.toggleVariable=e.toggleVariable,c.state={isFetching:!1,data:{},startDate:new Date,query:e.query},c}return Object(l.a)(r,[{key:"groupday",value:function(e,t,r){var c=new Date(e.time);return c=Math.floor(c.getTime()/864e5),e=Object(m.a)(Object(m.a)({},e),{},{day:c})}},{key:"fetchData",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t,r,c,a,s,i,n,l,o,d,b,j,u,h,x,v,g;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)(this.context,1),r=t[0],c=this.state.query.replace(/%\w+%/g,r.network),e.next=4,T(c);case 4:for(o in a=e.sent,s=a.map(this.groupday),i=A.groupBy(s,"day"),n=[],l={},i){for(b in d={},n.push(i[o][0].time.toString()),i[o])(j=i[o][b][this.toggleVariable])in d?d[j]+=1:d[j]=1,d[i[o][b][this.toggleVariable]]+=1;for(u in d)u in l||(l[u]=[]),l[u].push(d[u])}for(v in this.startDate=Date.parse(n[0]),h=[],x=0,l)h.push({label:v,backgroundColor:L[x],stack:"2",data:l[v]}),(x+=1)>L.length&&(x=0);g={labels:n,datasets:h},this.setState(Object(m.a)(Object(m.a)({},this.state),{},{data:g,isFetching:!1}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"onDateChanged",value:function(e){this.setState(Object(m.a)(Object(m.a)({},this.state),{},{startDate:new Date(e),query:this.state.query.replace(/ *\(start:[^)]*\) */g,"(start: ".concat(e.getTime()/1e3,") "))})),this.fetchData()}},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(this.context,1)[0];e.network!==this.state.network&&(this.setState(Object(m.a)(Object(m.a)({},this.state),{},{network:e.network})),this.fetchData())}},{key:"render",value:function(){var e=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"chart-box",style:{marginTop:"10px"},children:[Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h4",{children:this.chartTitle})}),Object(u.jsxs)("div",{className:"col-6",style:{textAlign:"right"},children:[Object(u.jsx)("label",{children:"Start time: "})," \xa0 \xa0",Object(u.jsx)(U.a,{selected:this.state.startDate,onChange:function(t){return e.onDateChanged(t)}})]})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(I.a,{data:this.state.data,height:400,options:{offsetGridLines:!0,drawTicks:!0,layout:{padding:{top:30,right:40,bottom:40}},legend:{display:!0,position:"right",align:"start",labels:{usePointStyle:!0}},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0,ticks:{padding:5},gridLines:{display:!1}}],yAxes:[{stacked:!0,gridLines:{drawBorder:!1},ticks:{beginAtZero:!0,maxTicksLimit:6,padding:20,callback:function(e){return e<1e3?e:e>=1e3?+(e/1e3).toFixed(1)+"K":void 0}}}]}}})})]})})}}]),r}(c.Component);M.contextType=S;var V=r(325),G=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"onChangeBridge",value:function(e){(0,Object(f.a)(this.context,2)[1])({type:e.target.value,payload:[]}),console.log(e.target.value)}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"row search-box-container",children:[Object(u.jsx)("h2",{style:{color:"white"},children:"Iotube Dashboard"}),Object(u.jsx)(V.a,{className:"search-form",inline:!0,children:Object(u.jsxs)(V.a.Control,{style:{width:"40%",textAlign:"center"},as:"select",custom:!0,onChange:this.onChangeBridge.bind(this),children:[Object(u.jsx)("option",{value:"USE_ETHEREUM",children:"Select the bridge (default is ethereum)..."}),Object(u.jsx)("option",{value:"USE_ETHEREUM",children:"Ethereum"}),Object(u.jsx)("option",{value:"USE_POLYGON",children:"Polygon"}),Object(u.jsx)("option",{value:"USE_BSC",children:"BSC"})]})}),Object(u.jsx)("div",{className:"wave"}),Object(u.jsx)("div",{className:"wave"})]})})}}]),r}(c.Component);G.contextType=S;var H=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container-fluid footer-container",children:Object(u.jsxs)("div",{className:"footer-card mt-5 mx-5",children:[Object(u.jsxs)("div",{className:"row mb-4 ",children:[Object(u.jsx)("div",{className:"col-md-6 col-xs-12",children:Object(u.jsxs)("div",{className:"footer-text pull-left",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("h1",{className:"footer-brand font-weight-bold mr-2 px-3",children:"IO"}),Object(u.jsx)("h1",{className:"footer-logo",children:"Devs"})]}),Object(u.jsx)("p",{className:"card-text",children:"This is a Analytics dashboard for IoTube developed for the community"}),Object(u.jsx)("div",{className:"social mt-2 mb-3"})]})}),Object(u.jsxs)("div",{className:"col-md-6 col-xs-12",children:[Object(u.jsx)("h5",{className:"heading",children:"IoTube"}),Object(u.jsxs)("ul",{className:"card-text",children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{href:"https://github.com/IoTube-analytics/react-iotube-analytics",children:"Front end on GitHub"})," "]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{href:"https://github.com/IoTube-analytics/go-iotube-analytics",children:"Beckend on Github"})," "]})]})]})]}),Object(u.jsx)("div",{className:"divider mb-4",children:" "}),Object(u.jsxs)("div",{className:"row",style:{fontSize:"10px"},children:[Object(u.jsx)("div",{className:"col-md-6 col-sm-6 col-xs-6",children:Object(u.jsx)("div",{className:"pull-left",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("i",{className:"fa fa-copyright"})," 2021 IoTube Dashboard"]})})}),Object(u.jsx)("div",{className:"col-md-6 col-sm-6 col-xs-6",children:Object(u.jsx)("div",{className:"pull-right mr-4 d-flex policy"})})]})]})})})}}]),r}(c.Component),R=r(323),z=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(e){var c;Object(n.a)(this,r);return(c=t.call(this,e)).state={isFetching:!1,data:[],query:'tvl = from(bucket: "my-bucket") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "tvl") |> filter(fn: (r) => r["_field"] == "tvl") |> last() price = from(bucket: "my-bucket") |> range(start: 1593786824) |> filter(fn: (r) => r["_measurement"] == "price")|> last() usd_tvl = join(tables: {tvl: tvl, price: price}, on: ["symbol"]) |> map(fn: (r) => ({time: r._time_tvl, tvl: r._value_tvl, tvl_usd: r._value_tvl * r._value_price, price: r._value_price, symbol: r.symbol})) |> yield(name: "1")',network:"ethereum"},c}return Object(l.a)(r,[{key:"fetchData",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.query.replace(/%\w+%/g,this.state.network),e.next=3,T(t);case 3:r=e.sent,this.setState({data:r,isFetching:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(this.context,1)[0];this.setState(Object(m.a)(Object(m.a)({},this.state),{},{isFetching:!0,network:e.network})),this.fetchData()}},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(this.context,1)[0];e.network!==this.state.network&&(this.setState(Object(m.a)(Object(m.a)({},this.state),{},{network:e.network})),this.fetchData())}},{key:"render",value:function(){for(var e=[],t=0;t<=this.state.data.length;t++){var r=this.state.data[t];"undefined"!=typeof r&&e.push(Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:r.symbol}),Object(u.jsx)("td",{children:r.price}),Object(u.jsx)("td",{children:r.tvl}),Object(u.jsx)("td",{children:r.tvl_usd}),Object(u.jsx)("td",{children:r.time})]},t))}return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",style:{marginTop:"20px"},children:Object(u.jsxs)(R.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Symbol"}),Object(u.jsx)("th",{children:"Price"}),Object(u.jsx)("th",{children:"Tvl"}),Object(u.jsx)("th",{children:"Tvl_usd"}),Object(u.jsx)("th",{children:"Time"})]})}),Object(u.jsx)("tbody",{children:e})]})})})}}]),r}(c.Component);z.contextType=S;r(312),r(313);var Z=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(F,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(G,{}),Object(u.jsx)(E,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(u.jsx)(M,{chartTitle:"#Tx in vs #Tx out",toggleVariable:"bridge_side",query:'from(bucket: "my-bucket") |> range(start: 2021-06-06T07:08:22.669468983Z) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["_field"] == "amount") |> filter(fn: (r) => r["bridge"] == "%bridge%") |> group(columns: ["bridge_side"]) |> sort(columns: ["_time"]) |> map(fn: (r) => ({ time: r._time, symbol: r.symbol, bridge_side: r.bridge_side }))'})}),Object(u.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(u.jsx)(M,{chartTitle:"New users history",toggleVariable:"bridge_side",query:'from(bucket: "my-bucket") |> range(start: 1593786824) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["bridge"] == "%bridge%") |> group(columns: ["from", "_time", "_field", "bridge_side"], mode: "by") |> count() |> group(columns: ["_field", "bridge_side"], mode: "by") |> sort(columns: ["_time"]) |> map(fn: (r) => ({time: r._time, bridge_side: r.bridge_side }))'})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(u.jsx)(M,{chartTitle:"#Tx by symbol",toggleVariable:"symbol",query:'from(bucket: "my-bucket") |> range(start: 1593786824) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["_field"] == "amount") |> filter(fn: (r) => r["bridge"] == "%bridge%") |> group(columns: ["symbol"]) |> sort(columns: ["_time"]) |> map(fn: (r) => ({time: r._time, symbol: r.symbol }))'})}),Object(u.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(u.jsx)(M,{chartTitle:"Stablecoins #Tx",toggleVariable:"bridge_side",query:'from(bucket: "my-bucket") |> range(start: 2021-06-06T07:08:22.669468983Z) |> filter(fn: (r) => r["_measurement"] == "tx") |> filter(fn: (r) => r["_field"] == "amount") |> filter(fn: (r) => r["bridge"] == "%bridge%") |> filter(fn: (r) => r["symbol"] =~ /.*USD.*/) |> group(columns: ["symbol", "bridge_side"]) |> sort(columns: ["_time"]) |> map(fn: (r) => ({time: r._time, symbol: r.symbol, bridge_side: r.bridge_side }))'})})]})]}),Object(u.jsx)(z,{})]}),Object(u.jsx)(H,{})]})},J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,327)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),J()}},[[315,1,2]]]);
//# sourceMappingURL=main.f3ebfce7.chunk.js.map