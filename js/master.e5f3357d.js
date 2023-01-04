"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[528],{1910:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(626),s=a(762),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(s.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(a,s){return t(n.Z,{key:s},[e._v(" "+e._s(a.name)+" ")])})),1)],1),t("div",{staticClass:"fix"},[e._l(e.tabs,(function(a,n){return[e.tabIdx===n?t("div",{key:n,staticClass:"component"},[t("div",{staticClass:"box"},[t("div",{staticClass:"col"},[t("iframe",{staticClass:"customFrame",attrs:{src:a.url}})])])]):e._e()]}))],2)])},o=[],r=a(144),l=a(5266),p={name:"HomeView",setup(){const e=(0,r.iH)(0),t=(0,r.iH)([]);return(0,l.getRequest)(["menu","menus"],"",(e=>{t.value=e.filter((e=>"y"===e.usage_yn))})),{tabs:t,tabIdx:e}}},c=p,u=a(1001),m=(0,u.Z)(c,i,o,!1,null,null,null),x=m.exports},7240:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(626),s=a(762),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(s.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(a){return t(n.Z,{key:a},[e._v(" "+e._s(a)+" ")])})),1)],1),t("div",{staticClass:"fix"},["Code"===e.tabs[e.tabIdx]?t("SelectComponent",{key:"Code",attrs:{obj:{masterApi:["code","code_codeGroup"],masterName:"Code Group",masterHeaders:[{text:"code_master_idx",value:"code_master_idx",align:"center"},{text:"code",value:"code",align:"center",type:"text",necessary:!0,asKey:"div_code",useParentKey:!0,useUpdateItem:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1},{text:"",value:"icon",sortable:!1}],secoundApi:["code","code_code"],secoundName:"Code",secoundHeaders:[{text:"code_master_idx",value:"code_master_idx",align:"center"},{text:"code",value:"code",align:"center",type:"text",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e(),"Ship"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Ship",attrs:{obj:{csvDownloadApi:["ship","csv_download"],formDownloadApi:["ship","form_download"],detailProp:"Ship Detail",masterApi:["ship","ship"],masterName:"Ship",masterHeaders:[{text:"ship_idx",value:"ship_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"ship_type_name",value:"ship_type_name",align:"center",type:"select",api:["ship","ship_detail_GetShipKind_Combo"],textKey:"name",valueKey:"code",modelKey:"ship_type_code",necessary:!0},{text:"manufacturer_name",value:"manufacturer_name",align:"center",type:"select",api:["ship","ship_detail_GetManufactureDiv_Combo"],textKey:"name",valueKey:"code",modelKey:"manufacturer_code",necessary:!0},{text:"info1",value:"info1",align:" d-none",type:"text",necessary:!0},{text:"info2",value:"info2",align:" d-none",type:"text",necessary:!0},{text:"info3",value:"info3",align:" d-none",type:"text",necessary:!0},{text:"info4",value:"info4",align:" d-none",type:"text",necessary:!0},{text:"info5",value:"info5",align:" d-none",type:"text",necessary:!0},{text:"info6",value:"info6",align:" d-none",type:"text",necessary:!0},{text:"info7",value:"info7",align:" d-none",type:"text",necessary:!0},{text:"info8",value:"info8",align:" d-none",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1},{text:"",value:"icon",sortable:!1}]}}}):e._e(),"Ship User Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Ship User Map",attrs:{obj:{mappingApi:["ship","shipAccessUsers"],updateApi:["ship","updateShipAccessUsers"],masterApi:["ship","ship_access_user_ship"],masterName:"Ship",masterHeaders:[{text:"ship_idx",value:"ship_idx",align:"center",useUpdateItem:!0},{text:"imo_id",value:"imo_id",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center"},{text:"ship_type_name",value:"ship_type_name",align:"center"},{text:"manufacturer_name",value:"manufacturer_name",align:"center"},{text:"",value:"icon",sortable:!1}],secoundApi:["ship","ship_access_user_user"],secoundName:"User",secoundHeaders:[{text:"user_idx",value:"user_idx",align:"center",type:"text",useUpdateItem:!0},{text:"ship_access_privilige_idx",value:"ship_access_privilige_idx",align:"center",useUpdateItem:!0},{text:"id",value:"id",align:"center",type:"text"},{text:"name",value:"name",align:"center",type:"text"},{text:"role_master_name",value:"role_master_name",align:"center",type:"select",api:["ship","ship_access_user_GetRole_Combo"],textKey:"name",valueKey:"role_master_idx",modelKey:"role_master_idx",useUpdateItem:!0}]}}}):e._e(),"Ship Equipment"===e.tabs[e.tabIdx]?t("SelectComponent",{key:"Ship Equipment",attrs:{obj:{masterNewItem:!1,masterApi:["ship","ship_tag_ship"],masterName:"Ship",masterHeaders:[{text:"ship_idx",value:"ship_idx",align:"center",useUpdateItem:!0},{text:"imo_id",value:"imo_id",align:"center",type:"text",useUpdateItem:!0},{text:"name",value:"name",align:"center",type:"text"},{text:"",value:"icon",sortable:!1}],secoundApi:["ship","ship_tag_tag"],secoundName:"Ship Equipment",secoundHeaders:[{text:"ship_tag_idx",value:"ship_tag_idx",align:"center"},{text:"equipment_type_name",value:"equipment_type_name",align:"center",type:"select",api:["ship","ship_tag_detail_GetEquipmentType_Combo"],textKey:"name",valueKey:"idx",modelKey:"equipment_type_idx",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"tag_description",value:"tag_description",align:"center",type:"text",necessary:!0},{text:"tx_type",value:"tx_type",align:"center",type:"text",necessary:!0},{text:"tx_period",value:"tx_period",align:"center",type:"number",necessary:!0},{text:"scaling_constant",value:"scaling_constant",align:"center",type:"number",necessary:!0},{text:"external_tag_yn",value:"external_tag_yn",align:"center",type:"checkbox"},{text:"Actions",value:"actions",sortable:!1}]}}}):"Menu Control"===e.tabs[e.tabIdx]?t("MenuComponent",{attrs:{obj:{contentHeaders:[{text:"No",value:"idx",align:"center",sortable:!1},{text:"menu",value:"name",align:"center",type:"text",sortable:!1},{text:"ship_type_code",value:"ship_type_code",align:"center",type:"shipSelect",api:["menu","shipTypes"],sortable:!1},{text:"usage_yn",value:"usage_yn",align:"center",type:"usageSelect",sortable:!1},{text:"url",value:"url",align:"center",type:"text",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],contentApi:["menu","menus"]}}}):"Equipment"===e.tabs[e.tabIdx]?t("RegComponent",{key:"Equipment",attrs:{obj:{csvDownloadApi:["equipment","csv_download"],formDownloadApi:["equipment","form_download"],csvUploadloadApi:["equipment","csv_upload"],masterApi:["equipment","equipmenttype_equipment"],masterName:"Equipment",masterHeaders:[{text:"equipment_type_idx",value:"equipment_type_idx",align:"center"},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"memo",value:"memo",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):"Group"===e.tabs[e.tabIdx]?t("RegComponent",{key:"Group",attrs:{obj:{masterApi:["group","group_group"],masterName:"Group",masterHeaders:[{text:"group_idx",value:"group_idx",align:"center"},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"group_description",value:"group_description",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):"User"===e.tabs[e.tabIdx]?t("RegComponent",{key:"User",attrs:{obj:{masterApi:["user","user_user"],masterName:"User",masterHeaders:[{text:"user_idx",value:"user_idx",align:"center"},{text:"id",value:"id",align:"center",type:"text",necessary:!0},{text:"password",value:"password",align:"center",type:"password",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"email",value:"email",align:"center",type:"text",necessary:!0},{text:"mobile",value:"mobile",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e(),"Port"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Port",attrs:{obj:{csvDownloadApi:["port","csv_download"],formDownloadApi:["port","form_download"],categoryOption:{api:["ship","port_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},detailProp:"Port Detail",masterApi:["port","port_port"],masterName:"Port",masterHeaders:[{text:"port_idx",value:"port_idx",align:"center"},{text:"code",value:"code",align:"center",type:"text",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"nation_name",value:"nation_name",align:"center",type:"select",api:["port","port_detail_GetNation_Combo"],textKey:"name",valueKey:"code",modelKey:"nation_code",necessary:!0},{text:"info1",value:"info1",align:" d-none",type:"text",necessary:!0},{text:"info2",value:"info2",align:" d-none",type:"text",necessary:!0},{text:"info3",value:"info3",align:" d-none",type:"text",necessary:!0},{text:"info4",value:"info4",align:" d-none",type:"text",necessary:!0},{text:"info5",value:"info5",align:" d-none",type:"text",necessary:!0},{text:"info6",value:"info6",align:" d-none",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1},{text:"",value:"icon",sortable:!1}]}}}):"SW"===e.tabs[e.tabIdx]?t("RegComponent",{key:"SW",attrs:{obj:{csvDownloadApi:["sw","csv_download"],masterApi:["sw","sw_sw"],masterName:"SW",masterHeaders:[{text:"sw_idx",value:"sw_idx",align:"center"},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"last_version",value:"last_version",align:"center",type:"text",necessary:!0},{text:"note",value:"note",align:"center",type:"text",necessary:!0},{text:"create_time",value:"create_time",align:"center"},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e()],1)])},o=[],r=(a(7658),a(144)),l=a(2423),p=(a(5699),a(9386),a(5130)),c=a(5987),u=a(1679),m=a(6834),x=a(1159),d={name:"HomeView",components:{RegComponent:l.Z,MenuComponent:p.Z,SelectComponent:c.Z,DetailComponent:u.Z,MappingComponent:m.Z},setup(){const e=(0,x.Ls)(),t=(0,r.iH)(0),a={equipmenttype:"Equipment",user:"User",ship:"Ship",sw:"SW",menu:"Menu Control",port:"Port",code:"Code",group:"Group"},n=[];e.tabs.get(location.pathname.replace(/\//,"")).map((e=>{a[e.name]?n.push(a[e.name]):console.warn(`누락 ${e.name}`)}));const s=(0,r.iH)(n);return{tabs:s,tabIdx:t}}},_=d,y=a(1001),v=(0,y.Z)(_,i,o,!1,null,null,null),g=v.exports}}]);
//# sourceMappingURL=master.e5f3357d.js.map