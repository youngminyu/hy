"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[314],{9386:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(4562),s=a(9582),i=a(4886),r=a(2118),p=a(5039),o=a(4061),l=a(4324),c=a(3424),u=a(3687),_=a(7808),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t(o.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(s.Z,[t(i.EB,{staticClass:"text-h5"},[e._v("Delete")]),t("p",{staticClass:"dialogContent"},[e._v("해당 아이탬을 삭제 하시겠습니까?")]),t(i.h7,[t(u.Z),t(n.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(n.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(u.Z)],1)],1)],1),t(o.Z,{attrs:{"max-width":"1200px"},model:{value:e.insertDialog,callback:function(t){e.insertDialog=t},expression:"insertDialog"}},[t(s.Z,{staticClass:"full"},[t(i.EB,[t("span",{staticClass:"text-h6"},[e._v("Insert Item")])]),t("div",{staticClass:"rowBox"},[t(u.Z),t(_.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.insertTableSearch,callback:function(t){e.insertTableSearch=t},expression:"insertTableSearch"}})],1),t(r.Z,[t(p.Z,{attrs:{"fixed-header":"",search:e.insertTableSearch,headers:e.insertHeaders,items:e.insertTableList,"items-per-page":-1,"item-key":e.insertHeaders[1].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"actionsBox"},[t(l.Z,{attrs:{small:""},on:{click:function(t){return e.pushItem(a)}}},[e._v(" mdi-playlist-plus ")])],1)]}}],null,!0)})],1),t(i.h7,[t(u.Z),t(n.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")])],1)],1)],1),t("div",{staticClass:"hyTitle"},[e._v("내부태그")]),void 0!==e.categoryOption?t(c.Z,{staticStyle:{width:"250px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":"","return-object":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),t("div",{staticClass:"spacer"}),t(_.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(p.Z,{staticClass:"spliceTable",attrs:{"fixed-header":"",search:e.masterTableSearch,headers:e.joinHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterHeaders[0].value},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"actionsBox"},[t(l.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.getInsertItems(a)}}},[e._v(" mdi-playlist-check ")]),t(l.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])],1)]}}],null,!0)})],1)])])])},m=[],g=a(144),x=a(5266),v={name:"InsertComponent",components:{},props:{obj:Object},setup(e){const{mappingKey:t,insertKeys:a,categoryOption:n,saveKey:s,saveApi:i,masterApi:r,masterHeaders:p,insertHeaders:o,insertApi:l}=e.obj;p.splice(1,0,{text:"No",value:"no",align:"center"});let c=null;const u=(0,g.iH)(null),_=(0,g.iH)(null),d=(0,g.iH)([]),m=(0,g.iH)(""),v=(0,g.iH)([...p,...o]),y=(0,g.iH)(null),h=(0,g.iH)(null),b=(0,g.iH)(!1),k=(0,g.iH)([]),C=(0,g.iH)(""),f=(0,g.iH)(!1),I=async()=>{const[e,t]=r;(0,x.getRequest)([e,t+"s"],{filterKey:u.value},(e=>{d.value=e||[]}))};if(n){const[e,t]=n.api;(0,x.getRequest)([e,t],null,(e=>{c=e[0],u.value=e[0][n.valueKey],_.value=e,I()}))}else I();const H=e=>{u.value=e[n.valueKey],c=e,I()},S=e=>{o.map((t=>{const a=t.value;"actions"!==a&&(y.value[a]=e[a])}));const n={};s.map((e=>{n[e]=c[e]}));const r={SaveType:null===y.value[t]?"new":"update"};a.map((e=>{r[e]=y.value[e]})),n.list=[r],(0,x.postRequest)(i,n,(e=>{K()}))},w=e=>{b.value=!0;const t={};n&&(t.filterKey=u.value),y.value=e,(0,x.getRequest)(l,t,(e=>{k.value=e}))},A=e=>{h.value=e,f.value=!0},Z=()=>{if(null===h.value[t])return void T();const e={};s.map((t=>{e[t]=c[t]}));const n={SaveType:"delete"};a.map((e=>{n[e]=h.value[e]})),e.list=[n],(0,x.postRequest)(i,e,(e=>{for(const t in e[0])h.value[t]=e[0][t];T()}))},K=()=>{b.value=!1},T=()=>{f.value=!1};return{masterHeaders:p,categoryChange:H,categoryOption:n,category:u,categories:_,masterTableSearch:m,joinHeaders:v,masterTableList:d,insertDialog:b,getInsertItems:w,insertHeaders:o,insertTableSearch:C,insertTableList:k,dialogDelete:f,pushItem:S,deleteItem:A,deleteItemConfirm:Z,close:K,closeDelete:T}}},y=v,h=a(1001),b=(0,h.Z)(y,d,m,!1,null,null,null),k=b.exports},429:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(626),s=a(762),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(s.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(a){return t(n.Z,{key:a},[e._v(" "+e._s(a)+" ")])})),1)],1),t("div",{staticClass:"fix"},["Ship Tag"===e.tabs[e.tabIdx]?t("SelectComponent",{key:"Ship Tag",attrs:{obj:{secoundFormDownloadApi:["ship","tag_form_download"],secoundCsvDownloadApi:["ship","tag_csv_download"],masterNewItem:!1,masterApi:["ship","ship_tag_ship"],masterName:"Ship",masterHeaders:[{text:"ship_idx",value:"ship_idx",align:"center",useUpdateItem:!0},{text:"imo_id",value:"imo_id",align:"center",type:"text",useUpdateItem:!0},{text:"name",value:"name",align:"center",type:"text"},{text:"",value:"icon",sortable:!1}],secoundApi:["ship","ship_tag_tag"],secoundName:"Ship Tag",secoundHeaders:[{text:"ship_tag_idx",value:"ship_tag_idx",align:"center"},{text:"equipment_type_name",value:"equipment_type_name",align:"center",type:"select",api:["ship","ship_tag_detail_GetEquipmentType_Combo"],textKey:"name",valueKey:"idx",modelKey:"equipment_type_idx",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"tag_description",value:"tag_description",align:"center",type:"text",necessary:!0},{text:"tx_type",value:"tx_type",align:"center",type:"text",necessary:!0},{text:"tx_period",value:"tx_period",align:"center",type:"number",necessary:!0},{text:"scaling_constant",value:"scaling_constant",align:"center",type:"number",necessary:!0},{text:"external_tag_yn",value:"external_tag_yn",align:"center",type:"checkbox"},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e(),"Tag"===e.tabs[e.tabIdx]?t("InsertComponent",{attrs:{obj:{mappingKey:"ship_tag_mapping_idx",categoryOption:{api:["ship","ship_tag_mapping_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},insertKeys:["ship_tag_idx","internal_tag_name","external_tag_name","ship_tag_mapping_idx","tx_type","tx_period","scaling_constant"],saveKey:["ship_idx","imo_id"],saveApi:["ship","ship_tag_mapping_Save_TagMapping"],masterApi:["ship","ship_tag_mapping_tag"],masterName:"Group",masterHeaders:[{text:"ship_tag_idx",value:"ship_tag_idx",align:"center"},{text:"internal_tag_name",value:"internal_tag_name",align:"center",type:"text"},{text:"internal_tag_description",value:"internal_tag_description",align:"center",type:"text"},{text:"internal_tag_name",value:"internal_tag_name",align:"center",type:"text"}],insertApi:["ship","ship_tag_mapping_extags"],insertHeaders:[{text:"Actions",value:"actions",sortable:!1},{text:"external_tag_name",value:"external_tag_name",align:"center"},{text:"external_tag_description",value:"external_tag_description",align:"center"},{text:"external_equipment_type_name",value:"external_equipment_type_name",align:"center",type:"text"}]}}}):e._e(),"Group User Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Group User Map",attrs:{obj:{mappingApi:["group","groupUsers"],updateApi:["group","updateGroupUsers"],masterApi:["group","group_user_group"],masterName:"Group",masterHeaders:[{text:"group_idx",value:"group_idx",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center"},{text:"group_description",value:"group_description",align:"center"},{text:"",value:"icon",sortable:!1}],secoundApi:["group","group_user_user"],secoundName:"User",secoundHeaders:[{text:"user_idx",value:"user_idx",align:"center",type:"text",useUpdateItem:!0},{text:"group_member_idx",value:"group_member_idx",align:"center",useUpdateItem:!0},{text:"id",value:"id",align:"center",type:"text"},{text:"name",value:"name",align:"center",type:"text"}]}}}):e._e(),"Group Ship Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Group Ship Map",attrs:{obj:{mappingApi:["group","group_access_ship_GetShip_List"],updateApi:["group","group_access_ship_Save_GroupPrivilige"],masterApi:["group","group_access_ship"],masterName:"Group",masterHeaders:[{text:"group_idx",value:"group_idx",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center"},{text:"group_description",value:"group_description",align:"center"},{text:"",value:"icon",sortable:!1}],secoundApi:["group","group_access_ship_ship"],secoundName:"Ship",secoundHeaders:[{text:"ship_idx",value:"ship_idx",align:"center",type:"text",useUpdateItem:!0},{text:"group_ship_idx",value:"group_ship_idx",align:"center",useUpdateItem:!0},{text:"ship_name",value:"ship_name",align:"center",type:"text"},{text:"imo_id",value:"imo_id",align:"center",type:"text",useUpdateItem:!0},{text:"ship_type_name",value:"ship_type_name",align:"center",type:"text"},{text:"manufacturer_name",value:"manufacturer_name",align:"center",type:"text"}]}}}):"Host"===e.tabs[e.tabIdx]?t("RegComponent",{key:"Host",attrs:{obj:{csvDownloadApi:["host","csv_download"],mappingKey:"ship_tag_mapping_idx",categoryOption:{api:["ship","host_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},masterApi:["host","host_host"],masterName:"Host",masterHeaders:[{text:"computer_idx",value:"computer_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"note",value:"note",align:"center",type:"text",necessary:!0},{text:"x",value:"x",align:"center",type:"text",necessary:!0},{text:"y",value:"y",align:"center",type:"text",necessary:!0},{text:"z",value:"z",align:"center",type:"text",necessary:!0},{text:"create_time",value:"create_time",align:"center"},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e(),"Group Port Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Group Port Map",attrs:{obj:{mappingApi:["group","groupport_group_port_list"],updateApi:["group","groupport_Save_GroupPort"],masterApi:["group","groupport_group"],secoundApi:["group","groupport_group_port"],masterName:"Group",masterHeaders:[{text:"idx",value:"idx",align:"center",useUpdateItem:!0,asKey:"group_idx"},{text:"name",value:"name",align:"center"},{text:"",value:"icon",sortable:!1}],secoundName:"Port",secoundHeaders:[{text:"port_idx",value:"port_idx",align:"center",type:"text"},{text:"group_usage_port_idx",value:"group_usage_port_idx",align:"center",useUpdateItem:!0},{text:"port_code",value:"port_code",align:"center",type:"text",useUpdateItem:!0},{text:"nation_code",value:"nation_code",align:"center",type:"text"},{text:"port_name",value:"port_name",align:"center",type:"text"}]}}}):e._e(),"Network"===e.tabs[e.tabIdx]?t("SelectComponent",{key:"Network",attrs:{obj:{csvDownloadApi:["network","csv_download"],categoryOption:{api:["ship","network_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},masterNewItem:!1,masterApi:["network","network_computer"],masterName:"Computer",masterHeaders:[{text:"computer_idx",value:"computer_idx",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center",type:"text"},{text:"",value:"icon",sortable:!1}],secoundApi:["network","network_network"],secoundName:"Network",secoundHeaders:[{text:"computer_network_idx",value:"computer_network_idx",align:"center"},{text:"nic_name",value:"nic_name",align:"center",type:"text",necessary:!0},{text:"mac_address",value:"mac_address",align:"center",type:"text",necessary:!0},{text:"gateway",value:"gateway",align:"center",type:"text",necessary:!0},{text:"ip_address",value:"ip_address",align:"center",type:"text",necessary:!0},{text:"subnet_mask",value:"subnet_mask",align:"center",type:"text",necessary:!0},{text:"dns_address",value:"dns_address",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e()],1)])},r=[],p=(a(7658),a(144)),o=a(8868),l=a(9386),c=a(5824),u=a(6834),_=a(1159),d={name:"HomeView",components:{RegComponent:o.Z,InsertComponent:l.Z,SelectComponent:c.Z,MappingComponent:u.Z},setup(){const e=(0,_.Ls)(),t=(0,p.iH)(0),a={ship_tag:"Tag",host:"Host",network:"Network",ship_access_group:"Group Ship Map",ship_access_user:"Group User Map",groupport:"Group Port Map",ship_tag_mapping:"Ship Tag"},n=[];e.tabs.get(location.pathname.replace(/\//,"")).map((e=>{a[e.name]?n.push(a[e.name]):console.warn(`누락 ${e.name}`)}));const s=(0,p.iH)(n);return{tabs:s,tabIdx:t}}},m=d,g=a(1001),x=(0,g.Z)(m,i,r,!1,null,null,null),v=x.exports}}]);
//# sourceMappingURL=setting.33eeb6a6.js.map