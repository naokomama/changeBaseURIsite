(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(t,n){},255:function(t,n){},273:function(t,n){},275:function(t,n){},294:function(t,n){},295:function(t,n){},358:function(t,n){},360:function(t,n){},393:function(t,n){},395:function(t,n){},396:function(t,n){},401:function(t,n){},403:function(t,n){},409:function(t,n){},411:function(t,n){},424:function(t,n){},436:function(t,n){},439:function(t,n){},444:function(t,n){},452:function(t,n){},461:function(t,n){},463:function(t,n){},533:function(t,n,e){},534:function(t,n,e){"use strict";e.r(n);var c,a,r,o,i,s,l,u,d,x,p,b,j,h,f,g,O=e(1),m=e(85),C=e.n(m),y=e(16),v=e.n(y),w=e(43),A=e(44),E=e(14),S=e(59),T=e(69),k=e.n(T),N=e(220),_=e.n(N),I=e(70),R=e(221),D=e(19),M={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},M),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},M),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},t),{},{account:n.payload.account});default:return t}},K={loading:!1,totalSupply:0,tokenURI:"",cost:0,error:!1,errorMsg:""},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,tokenURI:n.payload.tokenURI,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},P=Object(I.b)({blockchain:U,data:L}),z=[R.a],F=Object(I.c)(I.a.apply(void 0,z)),W=Object(I.d)(P,F),B=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},H=function(){return function(){var t=Object(w.a)(v.a.mark((function t(n){var e,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return e=t.sent,t.next=7,W.getState().blockchain.smartContract.methods.tokenURI(1).call();case 7:c=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e,tokenURI:c}}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),n(B("Could not load data from contract."));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}()},G=function(t){return{type:"CONNECTION_FAILED",payload:t}},Q=function(t){return function(){var n=Object(w.a)(v.a.mark((function n(e){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(H());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Y=e(15),q=Y.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),J=(Y.a.div(a||(a=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Y.a.div(r||(r=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"])))),X=Y.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=Y.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=Y.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),$=Y.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),tt=(Y.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Y.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),nt=(Y.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(4)),et=Y.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ct=(Y.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Y.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),at=Y.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),rt=Y.a.img(f||(f=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ot=Y.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var it=function(){var t,n,e=Object(O.useState)(""),c=Object(A.a)(e,2),a=c[0],r=c[1],o=Object(O.useState)(""),i=Object(A.a)(o,2),s=(i[0],i[1]),l=Object(S.b)(),u=Object(S.c)((function(t){return t.blockchain})),d=Object(S.c)((function(t){return t.data})),x=Object(O.useState)(!1),p=Object(A.a)(x,2),b=(p[0],p[1],Object(O.useState)("")),j=Object(A.a)(b,2),h=j[0],f=j[1],g=Object(O.useState)(0),m=Object(A.a)(g,2),C=(m[0],m[1],Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1})),y=Object(A.a)(C,2),E=y[0],T=y[1],N=function(){""!==u.account&&null!==u.smartContract&&l(H(u.account))},I=function(){var t=Object(w.a)(v.a.mark((function t(){var n,e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,T(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.useEffect)((function(){I()}),[]),Object(O.useEffect)((function(){N()}),[u.account]),Object(nt.jsx)(q,{children:Object(nt.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:E.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(nt.jsx)(at,{alt:"logo",src:"/config/images/logo.png"}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(ct,{flex:1,style:{padding:24},test:!0,children:[Object(nt.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)(rt,{alt:"example",src:"/config/images/example.gif"})}),Object(nt.jsx)(V,{}),Object(nt.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"}}),Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(nt.jsx)(ot,{target:"_blank",href:E.SCAN_LINK,children:(t=E.CONTRACT_ADDRESS,n=15,t.length>n?"".concat(t.substring(0,n),"..."):t)})}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),""===u.account||null===u.smartContract?Object(nt.jsxs)(Z,{ai:"center",jc:"center",children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",E.NETWORK.NAME," network"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{onClick:function(t){t.preventDefault(),l(function(){var t=Object(w.a)(v.a.mark((function t(n){var e,c,a,r,o,i,s,l,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:if(r=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return k.a.setProvider(i),s=new _.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==r.NETWORK.ID?(u=new k.a(c,r.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){n(Q(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(G("Change network to ".concat(r.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(G("Something went wrong."));case 31:t.next=34;break;case 33:n(G("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),N()},children:"CONNECT"}),""!==u.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:u.errorMsg})]}):null]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:"BaseURI\u5909\u66f4"}),Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"BaseURI\u3092\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6700\u5f8c\u306f\u30b9\u30e9\u30c3\u30b7\u30e5\u3067\u7d42\u308f\u308a\u307e\u3059\u3002"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(ot,{target:"_blank",href:E.MARKETPLACE_LINK,children:E.MARKETPLACE}),Object(nt.jsx)(X,{}),Object(nt.jsx)("div",{className:"uriText",children:Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:d.tokenURI})}),Object(nt.jsxs)("div",{className:"ctr",children:[Object(nt.jsx)("input",{class:"nice-textbox",value:a,onChange:function(t){r(t.target.value),""!==a&&s(a)},type:"text",size:"50",placeholder:"BaseURI\u3092\u5165\u529b\u3057\u3066\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:Object(nt.jsx)(et,{onClick:function(t){t.preventDefault(),""!==u.account&&null!==u.smartContract&&u.smartContract.methods.setBaseURI(String(a)).send({gasLimit:String(85e3),to:E.CONTRACT_ADDRESS,from:u.account,value:E.WEI_COST}).once("error",(function(t){console.log(t),f("\u3082\u3046\u5c11\u3057\u5f8c\u3067\u8a66\u3057\u3066\u307f\u3066\u306d")})).then((function(t){console.log(t),f("\u6210\u529f\u3057\u307e\u3057\u305f\u3002receipt\u2192".concat(t," ")),l(H(u.account))}))},children:"\u5909\u66f4\u3059\u308b"})})]}),Object(nt.jsx)(X,{}),Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:h})]})]}),Object(nt.jsx)(X,{})]}),Object(nt.jsx)(V,{}),Object(nt.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)(rt,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(nt.jsx)(X,{}),Object(nt.jsxs)(Z,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",E.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",E.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},st=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),a(t),r(t),o(t)}))};e(533);C.a.render(Object(nt.jsx)(S.a,{store:W,children:Object(nt.jsx)(it,{})}),document.getElementById("root")),st()}},[[534,1,2]]]);
//# sourceMappingURL=main.b2c63e14.chunk.js.map