"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[277],{8381:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(4562),o=a(5039),s=a(4324),i=a(3424),l=a(7808),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("CreateDialog",{attrs:{payload:e.createPayload}}),t("DeleteDialog",{attrs:{payload:e.deletePayload}}),t("UpdateDialog",{attrs:{payload:e.updatePayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),void 0!==e.categoryOption?t(i.Z,{staticStyle:{width:"200px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":e=>e,"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),!1!==e.masterNewItem?t(n.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem("master",e.masterName,e.masterTableKey,e.masterApi,e.masterTableList,e.masterHeaders)}}},[e._v(" New Item ")]):e._e(),t("div",{staticClass:"spacer"}),t(l.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}}),e.formDownloadApi?t(n.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.download(e.formDownloadApi)}}},[e._v(" form Download ")]):e._e(),e.csvDownloadApi?t(n.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.download(e.csvDownloadApi)}}},[e._v(" csv Download ")]):e._e()],1),t("div",{staticClass:"box"},[t(o.Z,{staticClass:"selectTable",attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterTableKey},on:{"click:row":e.selectTableItem},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(s.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem("master",e.masterName,e.masterTableKey,e.masterApi,e.masterTableList,e.masterHeaders,a)}}},[e._v(" mdi-pencil ")]),t(s.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.masterApi,e.masterTableList,a)}}},[e._v(" mdi-delete ")])]}},{key:"item.icon",fn:function({}){return[t(s.Z,{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),null!==e.refItem?t("div",{staticClass:"col",staticStyle:{"min-width":"55%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.secoundName))]),!1!==e.secoundNewItem?t(n.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem("secound",e.secoundName,e.secoundTableKey,e.secoundApi,e.secoundTableList,e.secoundHeaders)}}},[e._v(" New Item ")]):e._e(),t("div",{staticClass:"spacer"}),t(l.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.secoundTableSearch,callback:function(t){e.secoundTableSearch=t},expression:"secoundTableSearch"}}),e.secoundFormDownloadApi?t(n.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.secoundDownload(e.secoundFormDownloadApi)}}},[e._v(" form Download ")]):e._e(),e.secoundCsvDownloadApi?t(n.Z,{attrs:{color:"black",dark:""},on:{click:function(t){return e.secoundDownload(e.secoundCsvDownloadApi)}}},[e._v(" csv Download ")]):e._e()],1),t("div",{staticClass:"box"},[t(o.Z,{attrs:{"fixed-header":"",search:e.secoundTableSearch,headers:e.secoundHeaders,items:e.secoundTableList,"items-per-page":-1,"item-key":e.secoundTableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(s.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem("secound",e.secoundName,e.secoundTableKey,e.secoundApi,e.secoundTableList,e.secoundHeaders,a)}}},[e._v(" mdi-pencil ")]),t(s.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.secoundApi,e.secoundTableList,a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)]):e._e()],1)])},r=[],m=a(144),d=a(5266),u=a(9245),p=a(8135),_=a(209),v={name:"SelectComponent",components:{CreateDialog:p.Z,DeleteDialog:u.Z,UpdateDialog:_.Z},props:{obj:Object},setup(e){const{formDownloadApi:t,csvDownloadApi:a,secoundFormDownloadApi:n,secoundCsvDownloadApi:o,categoryOption:s,masterNewItem:i,masterName:l,masterApi:c,masterHeaders:r,secoundNewItem:u,secoundName:p,secoundApi:_,secoundHeaders:v}=e.obj,x=(0,m.iH)(null),y=(0,m.iH)(null),g=(0,m.iH)(null),b=e=>{(0,d.fileDownloadRequest)(e,{parent_key:y.value?.[s?.valueKey]||""},((e,t)=>{const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=e,document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(a)}))},w=e=>{(0,d.fileDownloadRequest)(e,{parent_key:x.value.ship_idx},((e,t)=>{const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=e,document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(a)}))};r.splice(1,0,{text:"No",value:"no",align:"center"}),v.splice(1,0,{text:"No",value:"no",align:"center"});const f=(0,m.iH)([]),h=(0,m.iH)([]),k=(0,m.iH)(""),C=(0,m.iH)(""),I={},D=(0,m.iH)(r[0].value),S=(0,m.iH)(r[0].value),A=(0,m.iH)(v[0].value);r.map((e=>{!0===e.useUpdateItem&&(I[e.value]=e),!0===e.useParentKey&&(D.value=e.value)}));const N=e=>{const[t,a]=_;(0,d.getRequest)([t,a+"s"],{parent_key:e},(e=>{h.value=e||[]}))},H=e=>{y.value=e,T()},T=()=>{const[e,t]=c;if(s)y.value?(0,d.getRequest)([e,t+"s"],{filterKey:y.value?.[s?.valueKey]||""},(e=>{f.value=e||[]})):f.value=[];else{const[e,t]=c;(0,d.getRequest)([e,t+"s"],null,(e=>{f.value=e||[]}))}};if(s){const[e,t]=s.api;(0,d.getRequest)([e,t],null,(e=>{y.value=e[0],g.value=e,T()}))}else T();const K=(e,t)=>{x.value=e,N(e[D.value]),t.select(!0)},Z=(0,m.iH)(null),L=(0,m.iH)(null),O=(0,m.iH)(null),R=(e,t,a,n,o,s)=>{const i={};if("secound"===e)for(const l in I)I[l].asKey?i[I[l].asKey]=x.value[l]:i[l]=x.value[l];i[a]=null,i.saveType="new",Z.value={title:t,api:n,list:o,fields:s,parentItem:i}},j=(e,t,a,n,o,s,i)=>{const l={};if("secound"===e)for(const c in I)I[c].asKey?l[I[c].asKey]=x.value[c]:l[c]=x.value[c];l[a]=i[a],l.saveType="update",L.value={title:t,api:n,list:o,fields:s,item:i,parentItem:l}},U=(e,t,a)=>{O.value={list:t,item:a,api:e}};return{download:b,secoundDownload:w,formDownloadApi:t,csvDownloadApi:a,secoundFormDownloadApi:n,secoundCsvDownloadApi:o,refItem:x,masterTableKey:S,secoundTableKey:A,categoryChange:H,categoryOption:s,category:y,categories:g,masterNewItem:i,masterName:l,masterApi:c,masterHeaders:r,masterTableList:f,secoundNewItem:u,secoundName:p,secoundApi:_,secoundHeaders:v,secoundTableList:h,masterTableSearch:k,secoundTableSearch:C,selectTableItem:K,createItem:R,updateItem:j,deleteItem:U,createPayload:Z,updatePayload:L,deletePayload:O}}},x=v,y=a(1001),g=(0,y.Z)(x,c,r,!1,null,null,null),b=g.exports},752:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(626),o=a(762),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(o.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(a){return t(n.Z,{key:a},[e._v(" "+e._s(a)+" ")])})),1)],1),t("div",{staticClass:"fix"},["SW Log"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"SW Log",attrs:{obj:{categoryOption:{api:["ship","sw_log_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,masterApi:["sw","sw_log_log"],masterName:"SW Log",masterHeaders:[{text:"sw_log_idx",value:"sw_log_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"computer_name",value:"computer_name",align:"center",type:"text"},{text:"program_name",value:"program_name",align:"center",type:"text"},{text:"program_version",value:"program_version",align:"center",type:"text"},{text:"severity_code",value:"severity_code",align:"center",type:"text"},{text:"log_content",value:"log_content",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"}]}}}):e._e(),"Communication"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Communication",attrs:{obj:{csvDownloadApi:["communication","csv_download"],categoryOption:{api:["ship","communication_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,masterApi:["communication","communication_communication"],masterName:"Communication",masterHeaders:[{text:"sniffing_idx",value:"sniffing_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"host",value:"host",align:"center",type:"text"},{text:"sequence",value:"sequence",align:"center",type:"text"},{text:"port",value:"port",align:"center",type:"text"},{text:"redundancy",value:"redundancy",align:"center",type:"text"},{text:"direction",value:"direction",align:"center",type:"text"},{text:"packet",value:"packet",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"}]}}}):e._e(),"Command History"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Command History",attrs:{obj:{csvDownloadApi:["command","csv_download"],categoryOption:{api:["ship","command_history_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,masterApi:["command","command_history_command"],masterName:"Command History",masterHeaders:[{text:"ship_control_command_idx",value:"ship_control_command_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"command",value:"command",align:"center",type:"text"},{text:"command_param_1",value:"command_param_1",align:"center",type:"text"},{text:"command_param_2",value:"command_param_2",align:"center",type:"text"},{text:"command_param_3",value:"command_param_3",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"}]}}}):e._e(),"Interface Status"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Interface Status",attrs:{obj:{csvDownloadApi:["interface","csv_download"],categoryOption:{api:["ship","interface_status_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,masterApi:["interface","interface_status_status"],masterName:"Interface Status",masterHeaders:[{text:"tag_status_idx",value:"tag_status_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"internal_tag_name",value:"internal_tag_name",align:"center",type:"text"},{text:"internal_tag_description",value:"internal_tag_description",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"},{text:"lastest_value",value:"lastest_value",align:"center",type:"text"},{text:"status",value:"status",align:"center",type:"text"}]}}}):e._e(),"Network Status"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Network Status",attrs:{obj:{csvDownloadApi:["network","status_csv_download"],categoryOption:{api:["ship","network_status_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,masterApi:["network","network_status_network"],masterName:"Network Status",masterHeaders:[{text:"computer_network_info_collect_idx",value:"computer_network_info_collect_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"computer_name",value:"computer_name",align:"center",type:"text"},{text:"nic_name",value:"nic_name",align:"center",type:"text"},{text:"ip_address",value:"ip_address",align:"center",type:"text"},{text:"subnet_mask",value:"subnet_mask",align:"center",type:"text"},{text:"gateway",value:"gateway",align:"center",type:"text"},{text:"create_time",value:"create_time",align:"center",type:"text"},{text:"status",value:"status",align:"center",type:"text"}]}}}):e._e(),"Command"===e.tabs[e.tabIdx]?t("SelectComponent",{key:"Command",attrs:{obj:{masterNewItem:!1,masterApi:["command","command_ship"],masterName:"Command",masterHeaders:[{text:"idx",value:"idx",align:"center"},{text:"code",value:"code",align:"center",type:"text",necessary:!0,asKey:"div_code",useParentKey:!0,useUpdateItem:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"",value:"icon",sortable:!1}],secoundNewItem:!1,secoundApi:["command","command_sniffing"],secoundName:"Sniffing",secoundHeaders:[{text:"code_master_idx",value:"code_master_idx",align:"center"},{text:"code",value:"code",align:"center",type:"text",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e()],1)])},i=[],l=(a(7658),a(144)),c=a(2550),r=a(8381),m=a(1159),d={name:"AlamView",components:{DetailComponent:c.Z,SelectComponent:r.Z},setup(){const e=(0,m.Ls)(),t=(0,l.iH)(0),a={command:"Command",command_history:"Command History",communication:"Communication",interface_status:"Interface Status",network_status:"Network Status",sw_log:"SW Log"},n=[];e.tabs.get(location.pathname.replace(/\//,"")).map((e=>{a[e.name]?n.push(a[e.name]):console.warn(`누락 ${e.name}`)}));const o=(0,l.iH)(n);return{tabs:o,tabIdx:t}}},u=d,p=a(1001),_=(0,p.Z)(u,s,i,!1,null,null,null),v=_.exports}}]);
//# sourceMappingURL=diagnostics.8790b21d.js.map