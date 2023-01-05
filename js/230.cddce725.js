"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[230],{6834:function(e,t,a){a.d(t,{Z:function(){return C}});var s=a(4562),l=a(5039),i=a(4324),o=a(7808),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("SelectDialog",{attrs:{payload:e.selectPayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),t("div",{staticClass:"spacer"}),t(o.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{staticClass:"selectTable",attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterTableKey},on:{"click:row":e.selectTableItem},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.icon",fn:function({}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),null!==e.refItem?t("div",{staticClass:"col",staticStyle:{"min-width":"50%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.secoundName))]),t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.selectItem(e.secoundName,e.secoundHeaders,e.secoundTableList)}}},[e._v(" Select Item ")]),t("div",{staticClass:"spacer"}),t(o.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.secoundTableSearch,callback:function(t){e.secoundTableSearch=t},expression:"secoundTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{attrs:{"fixed-header":"",search:e.secoundTableSearch,headers:e.secoundHeaders,items:e.secoundTableList,"items-per-page":-1,"item-key":e.secoundTableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}}],null,!0)})],1)]):e._e()],1)])},r=[],c=a(144),d=a(5266),u=a(9582),m=a(4886),p=a(4061),v=a(3424),y=a(3687),b=function(){var e=this,t=e._self._c;return t(p.Z,{attrs:{"max-width":"1000px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(u.Z,{staticClass:"full"},[t(m.EB,[t("span",{staticClass:"text-h6"},[e._v(e._s(e.title)+" 선택")])]),t("div",{staticClass:"container"},[t(l.Z,{attrs:{"fixed-header":"",headers:e.headers,items:e.list,"items-per-page":-1,"item-key":e.tableKey,"show-select":""},scopedSlots:e._u([{key:"item.role_master_name",fn:function({item:a,header:s}){return[t(v.Z,{staticClass:"caption",staticStyle:{width:"200px",margin:"0 auto"},attrs:{items:e.selectItems[s.api[1]],placeholder:"shiptype",dense:"",outlined:"","hide-details":"auto","item-text":s.textKey,"item-value":s.valueKey},model:{value:a[e.selectKeys[s.api[1]].modelKey],callback:function(t){e.$set(a,e.selectKeys[s.api[1]].modelKey,t)},expression:"item[selectKeys[header.api[1]].modelKey]"}})]}}],null,!0),model:{value:e.selectedList,callback:function(t){e.selectedList=t},expression:"selectedList"}})],1),t(m.h7,[t(y.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},f=[],g=(a(7658),{name:"DialogCreateItem",props:["payload"],setup(e){let t=null,a=null;const s=(0,c.iH)(""),l=(0,c.qj)({}),i=(0,c.qj)({}),o=(0,c.iH)([]),n=(0,c.iH)(""),r=(0,c.iH)([]),u=(0,c.iH)([]),m=(0,c.iH)(!1),p=()=>{m.value=!1,(0,c.Y3)((()=>{o.value=[]}))},v=()=>{const{secoundHeaders:e,parentItem:l}=t,i=o.value.reduce(((t,l)=>{const i={};if(a.has(l[s.value])){i.saveType="update";const t=a.get(l[s.value]);e.map((e=>{!0===e.useUpdateItem&&(i[e.modelKey||e.value]=l[e.modelKey||e.value]||t[e.modelKey||e.value]||null)}))}else i.saveType="new",e.map((e=>{!0===e.useUpdateItem&&(i[e.modelKey||e.value]=l[e.modelKey||e.value]||null)}));return t.push(i),t}),[]),n={...l,list:i},[r,c]=t.api;(0,d.postRequest)([r,c],n,(e=>{t.setList(e)})),p()};return(0,c.YP)((()=>e.payload),(e=>{t=e,s.value=e.secoundHeaders[0].value;const c=[];e.list.map((t=>{e.targetListMap.has(t[s.value])&&c.push(t)})),o.value=c;const p=[],v=e.headers.filter((t=>{if(Object.prototype.hasOwnProperty.call(t,"type")){if("select"===t.type){const[a,o]=t.api;p.push(new Promise((a=>{(0,d.getRequest)(t.api,null,(n=>{const r=n[0][t.modelKey];e.list.map((a=>{e.targetListMap.has(a[s.value])?a[t.modelKey]=e.targetListMap.get(a[s.value])[t.modelKey]:-1===a[t.modelKey]&&(a[t.modelKey]=r)})),l[o]={textKey:t.textKey,valueKey:t.valueKey,modelKey:t.modelKey},i[o]=n,a(!0)}))})))}return!0}return!1}));Promise.all(p).then((()=>{n.value=e.title,r.value=v,u.value=e.list,a=new Map(t.targetList.map((e=>[e[s.value],e]))),m.value=!0}))})),{selectKeys:l,selectItems:i,tableKey:s,selectedList:o,title:n,headers:r,list:u,dialog:m,close:p,save:v}}}),h=g,T=a(1001),k=(0,T.Z)(h,b,f,!1,null,null,null),_=k.exports,w={name:"SelectComponent",components:{SelectDialog:_},props:{obj:Object},setup(e){const{masterName:t,masterApi:a,masterHeaders:s,mappingApi:l,updateApi:i,secoundName:o,secoundApi:n,secoundHeaders:r}=e.obj;s.splice(1,0,{text:"No",value:"no",align:"center"}),r.splice(1,0,{text:"No",value:"no",align:"center"});const u=(0,c.iH)(null),m=(0,c.iH)([]),p=(0,c.iH)([]),v=(0,c.iH)(""),y=(0,c.iH)(""),b={},f=(0,c.iH)(s[0].value),g=(0,c.iH)(s[0].value),h=(0,c.iH)(r[0].value);s.map((e=>{!0===e.useUpdateItem&&(b[e.value]=e),!0===e.useParentKey&&(f.value=e.value)}));let T=new Map;const k=e=>{const[t,a]=n;(0,d.getRequest)([t,a+"s"],{parent_key:e},(e=>{p.value=e||[],T=new Map(p.value.map((e=>[e[r[0].value],e])))}))},[_,w]=a;(0,d.getRequest)([_,w+"s"],null,(e=>{m.value=e||[]}));const x=(e,t)=>{u.value=e,k(e[f.value]),t.select(!0)},H=(0,c.iH)(null),C=(e,t)=>{const a={};for(const l in b)b[l].asKey?a[b[l].asKey]=u.value[l]:a[l]=u.value[l];const[s,o]=l;(0,d.getRequest)([s,o],null,(s=>{H.value={title:e,headers:t,list:s,targetList:p,targetListMap:T,api:i,parentItem:a,secoundHeaders:r,setList:e=>{p.value=e,T=new Map(p.value.map((e=>[e[r[0].value],e])))}}}))};return{refItem:u,masterTableKey:g,secoundTableKey:h,masterName:t,masterApi:a,masterHeaders:s,masterTableList:m,secoundName:o,secoundApi:n,secoundHeaders:r,secoundTableList:p,masterTableSearch:v,secoundTableSearch:y,selectTableItem:x,selectItem:C,selectPayload:H}}},x=w,H=(0,T.Z)(x,n,r,!1,null,null,null),C=H.exports},2423:function(e,t,a){a.d(t,{Z:function(){return h}});var s=a(4562),l=a(5039),i=a(4324),o=a(3424),n=a(7808),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("CreateDialog",{attrs:{payload:e.createPayload}}),t("DeleteDialog",{attrs:{payload:e.deletePayload}}),t("UpdateDialog",{attrs:{payload:e.updatePayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),void 0!==e.categoryOption?t(o.Z,{staticStyle:{width:"250px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem(e.masterName,e.masterApi,e.masterTableList,e.masterHeaders)}}},[e._v(" New Item ")]),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}}),e.formDownloadApi?t(s.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.download(e.formDownloadApi)}}},[e._v(" form Download ")]):e._e(),e.csvDownloadApi?t(s.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.download(e.csvDownloadApi)}}},[e._v(" csv Download ")]):e._e()],1),t("div",{staticClass:"box"},[t(l.Z,{attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.tableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem(e.masterName,e.masterApi,e.masterTableList,e.masterHeaders,a)}}},[e._v(" mdi-pencil ")]),t(i.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.masterApi,e.masterTableList,a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)])],1)])},c=[],d=a(144),u=a(5266),m=a(9245),p=a(9659),v=a(209),y={name:"SelectComponent",components:{CreateDialog:p.Z,DeleteDialog:m.Z,UpdateDialog:v.Z},props:{obj:Object},setup(e){const{csvDownloadApi:t,formDownloadApi:a,categoryOption:s,masterName:l,masterApi:i,masterHeaders:o}=e.obj,n=(0,d.iH)(""),r=(0,d.iH)(null),c=e=>{(0,u.fileDownloadRequest)(e,{parent_key:n.value},((e,t)=>{const a=URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download=e,document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(a)}))},m=(0,d.iH)(o[0].value);o.splice(1,0,{text:"No",value:"no",align:"center"});const p=(0,d.iH)([]),v=(0,d.iH)(""),y=()=>{const[e,t]=i;""===n.value?(0,u.getRequest)([e,t+"s"],null,(e=>{p.value=e||[]})):(0,u.getRequest)([e,t+"s"],{filterKey:n.value},(e=>{p.value=e||[]}))};if(s){const[e,t]=s.api;(0,u.getRequest)([e,t],null,(e=>{n.value=e[0][s.valueKey],r.value=e,y()}))}else y();const b=e=>{n.value=e,y()},f=(0,d.iH)(null),g=(0,d.iH)(null),h=(0,d.iH)(null),T=(e,t,a,l)=>{const i={};s&&(i[s.modelKey]=n.value);const o={saveType:"new"};o[m.value]=null,f.value={title:e,api:t,list:a,fields:l,parentItem:o,filter:i}},k=(e,t,a,l,i)=>{const o={};s&&(o[s.modelKey]=n.value);const r={saveType:"update"};r[m.value]=i[m.value],g.value={title:e,api:t,list:a,fields:l,item:i,parentItem:r,filter:o}},_=(e,t,a)=>{h.value={list:t,item:a,api:e}};return{download:c,csvDownloadApi:t,formDownloadApi:a,tableKey:m,categoryChange:b,categoryOption:s,category:n,categories:r,masterName:l,masterApi:i,masterHeaders:o,masterTableList:p,masterTableSearch:v,createItem:T,updateItem:k,deleteItem:_,createPayload:f,updatePayload:g,deletePayload:h}}},b=y,f=a(1001),g=(0,f.Z)(b,r,c,!1,null,null,null),h=g.exports},5238:function(e,t,a){a.d(t,{Z:function(){return h}});var s=a(4562),l=a(5039),i=a(4324),o=a(3424),n=a(7808),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("CreateDialog",{attrs:{payload:e.createPayload}}),t("DeleteDialog",{attrs:{payload:e.deletePayload}}),t("UpdateDialog",{attrs:{payload:e.updatePayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),void 0!==e.categoryOption?t(o.Z,{staticStyle:{width:"200px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),!1!==e.masterNewItem?t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem("master",e.masterName,e.masterTableKey,e.masterApi,e.masterTableList,e.masterHeaders)}}},[e._v(" New Item ")]):e._e(),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}}),e.formDownloadApi?t(s.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.download(e.formDownloadApi)}}},[e._v(" form Download ")]):e._e(),e.csvDownloadApi?t(s.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.download(e.csvDownloadApi)}}},[e._v(" csv Download ")]):e._e()],1),t("div",{staticClass:"box"},[t(l.Z,{staticClass:"selectTable",attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterTableKey},on:{"click:row":e.selectTableItem},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem("master",e.masterName,e.masterTableKey,e.masterApi,e.masterTableList,e.masterHeaders,a)}}},[e._v(" mdi-pencil ")]),t(i.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.masterApi,e.masterTableList,a)}}},[e._v(" mdi-delete ")])]}},{key:"item.icon",fn:function({}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),null!==e.refItem?t("div",{staticClass:"col",staticStyle:{"min-width":"55%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.secoundName))]),t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem("secound",e.secoundName,e.secoundTableKey,e.secoundApi,e.secoundTableList,e.secoundHeaders)}}},[e._v(" New Item ")]),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.secoundTableSearch,callback:function(t){e.secoundTableSearch=t},expression:"secoundTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{attrs:{"fixed-header":"",search:e.secoundTableSearch,headers:e.secoundHeaders,items:e.secoundTableList,"items-per-page":-1,"item-key":e.secoundTableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem("secound",e.secoundName,e.secoundTableKey,e.secoundApi,e.secoundTableList,e.secoundHeaders,a)}}},[e._v(" mdi-pencil ")]),t(i.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.secoundApi,e.secoundTableList,a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)]):e._e()],1)])},c=[],d=a(144),u=a(5266),m=a(9245),p=a(9659),v=a(209),y={name:"SelectComponent",components:{CreateDialog:p.Z,DeleteDialog:m.Z,UpdateDialog:v.Z},props:{obj:Object},setup(e){const{formDownloadApi:t,csvDownloadApi:a,categoryOption:s,masterNewItem:l,masterName:i,masterApi:o,masterHeaders:n,secoundName:r,secoundApi:c,secoundHeaders:m}=e.obj,p=(0,d.iH)(""),v=(0,d.iH)(null),y=e=>{(0,u.fileDownloadRequest)(e,{parent_key:p.value},((e,t)=>{const a=URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download=e,document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(a)}))};n.splice(1,0,{text:"No",value:"no",align:"center"}),m.splice(1,0,{text:"No",value:"no",align:"center"});const b=(0,d.iH)(null),f=(0,d.iH)([]),g=(0,d.iH)([]),h=(0,d.iH)(""),T=(0,d.iH)(""),k={},_=(0,d.iH)(n[0].value),w=(0,d.iH)(n[0].value),x=(0,d.iH)(m[0].value);n.map((e=>{!0===e.useUpdateItem&&(k[e.value]=e),!0===e.useParentKey&&(_.value=e.value)}));const H=e=>{const[t,a]=c;(0,u.getRequest)([t,a+"s"],{parent_key:e},(e=>{g.value=e||[]}))},C=e=>{p.value=e,K()},K=()=>{const[e,t]=o;""===p.value?(0,u.getRequest)([e,t+"s"],null,(e=>{f.value=e||[]})):(0,u.getRequest)([e,t+"s"],{filterKey:p.value},(e=>{f.value=e||[]}))};if(s){const[e,t]=s.api;(0,u.getRequest)([e,t],null,(e=>{p.value=e[0][s.valueKey],v.value=e,K()}))}else K();const Z=(e,t)=>{b.value=e,H(e[_.value]),t.select(!0)},I=(0,d.iH)(null),S=(0,d.iH)(null),D=(0,d.iH)(null),L=(e,t,a,s,l,i)=>{const o={};if("secound"===e)for(const n in k)k[n].asKey?o[k[n].asKey]=b.value[n]:o[n]=b.value[n];o[a]=null,o.saveType="new",I.value={title:t,api:s,list:l,fields:i,parentItem:o}},A=(e,t,a,s,l,i,o)=>{const n={};if("secound"===e)for(const r in k)k[r].asKey?n[k[r].asKey]=b.value[r]:n[r]=b.value[r];n[a]=o[a],n.saveType="update",S.value={title:t,api:s,list:l,fields:i,item:o,parentItem:n}},N=(e,t,a)=>{D.value={list:t,item:a,api:e}};return{download:y,formDownloadApi:t,csvDownloadApi:a,refItem:b,masterTableKey:w,secoundTableKey:x,categoryChange:C,categoryOption:s,category:p,categories:v,masterNewItem:l,masterName:i,masterApi:o,masterHeaders:n,masterTableList:f,secoundName:r,secoundApi:c,secoundHeaders:m,secoundTableList:g,masterTableSearch:h,secoundTableSearch:T,selectTableItem:Z,createItem:L,updateItem:A,deleteItem:N,createPayload:I,updatePayload:S,deletePayload:D}}},b=y,f=a(1001),g=(0,f.Z)(b,r,c,!1,null,null,null),h=g.exports}}]);
//# sourceMappingURL=230.cddce725.js.map