"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[314],{1566:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(626),p=a(762),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(p.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(a){return t(n.Z,{key:a},[e._v(" "+e._s(a)+" ")])})),1)],1),t("div",{staticClass:"fix"},["Menu Control"===e.tabs[e.tabIdx]?t("MenuComponent",{attrs:{obj:{contentHeaders:[{text:"No",value:"idx",align:"center",sortable:!1},{text:"menu",value:"name",align:"center",type:"text",sortable:!1},{text:"ship_type_code",value:"ship_type_code",align:"center",type:"shipSelect",api:["menu","shipTypes"],sortable:!1},{text:"usage_yn",value:"usage_yn",align:"center",type:"usageSelect",sortable:!1},{text:"url",value:"url",align:"center",type:"text",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],contentApi:["menu","menus"]}}}):e._e(),"Tag"===e.tabs[e.tabIdx]?t("InsertComponent",{attrs:{obj:{mappingKey:"ship_tag_mapping_idx",categoryOption:{api:["ship","ship_tag_mapping_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},insertKeys:["ship_tag_idx","internal_tag_name","external_tag_name","ship_tag_mapping_idx","tx_type","tx_period","scaling_constant"],saveKey:["ship_idx","imo_id"],saveApi:["ship","ship_tag_mapping_Save_TagMapping"],masterApi:["ship","ship_tag_mapping_tag"],masterName:"Group",masterHeaders:[{text:"ship_tag_idx",value:"ship_tag_idx",align:"center"},{text:"internal_tag_name",value:"internal_tag_name",align:"center",type:"text"},{text:"internal_tag_description",value:"internal_tag_description",align:"center",type:"text"},{text:"internal_tag_name",value:"internal_tag_name",align:"center",type:"text"}],insertApi:["ship","ship_tag_mapping_extags"],insertHeaders:[{text:"Actions",value:"actions",sortable:!1},{text:"external_tag_name",value:"external_tag_name",align:"center"},{text:"external_tag_description",value:"external_tag_description",align:"center"},{text:"external_equipment_type_name",value:"external_equipment_type_name",align:"center",type:"text"}]}}}):e._e(),"Group User Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Group User Map",attrs:{obj:{mappingApi:["group","groupUsers"],updateApi:["group","updateGroupUsers"],masterApi:["group","group_user_group"],masterName:"Group",masterHeaders:[{text:"group_idx",value:"group_idx",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center"},{text:"group_description",value:"group_description",align:"center"},{text:"",value:"icon",sortable:!1}],secoundApi:["group","group_user_user"],secoundName:"User",secoundHeaders:[{text:"user_idx",value:"user_idx",align:"center",type:"text",useUpdateItem:!0},{text:"group_member_idx",value:"group_member_idx",align:"center",useUpdateItem:!0},{text:"id",value:"id",align:"center",type:"text"},{text:"name",value:"name",align:"center",type:"text"}]}}}):e._e(),"Group Ship Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Group Ship Map",attrs:{obj:{mappingApi:["group","group_access_ship_GetShip_List"],updateApi:["group","group_access_ship_Save_GroupPrivilige"],masterApi:["group","group_access_ship"],masterName:"Group",masterHeaders:[{text:"group_idx",value:"group_idx",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center"},{text:"group_description",value:"group_description",align:"center"},{text:"",value:"icon",sortable:!1}],secoundApi:["group","group_access_ship_ship"],secoundName:"Ship",secoundHeaders:[{text:"ship_idx",value:"ship_idx",align:"center",type:"text",useUpdateItem:!0},{text:"group_ship_idx",value:"group_ship_idx",align:"center",useUpdateItem:!0},{text:"ship_name",value:"ship_name",align:"center",type:"text"},{text:"imo_id",value:"imo_id",align:"center",type:"text",useUpdateItem:!0},{text:"ship_type_name",value:"ship_type_name",align:"center",type:"text"},{text:"manufacturer_name",value:"manufacturer_name",align:"center",type:"text"}]}}}):"Host"===e.tabs[e.tabIdx]?t("RegComponent",{key:"Host",attrs:{obj:{mappingKey:"ship_tag_mapping_idx",categoryOption:{api:["ship","host_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},masterApi:["host","host_host"],masterName:"Host",masterHeaders:[{text:"computer_idx",value:"computer_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text",necessary:!0},{text:"name",value:"name",align:"center",type:"text",necessary:!0},{text:"note",value:"note",align:"center",type:"text",necessary:!0},{text:"x",value:"x",align:"center",type:"text",necessary:!0},{text:"y",value:"y",align:"center",type:"text",necessary:!0},{text:"z",value:"z",align:"center",type:"text",necessary:!0},{text:"create_time",value:"create_time",align:"center"},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e(),"Group Port Map"===e.tabs[e.tabIdx]?t("MappingComponent",{key:"Group Port Map",attrs:{obj:{mappingApi:["group","groupport_group_port_list"],updateApi:["group","groupport_Save_GroupPort"],masterApi:["group","groupport_group"],secoundApi:["group","groupport_group_port"],masterName:"Group",masterHeaders:[{text:"idx",value:"idx",align:"center",useUpdateItem:!0,asKey:"group_idx"},{text:"name",value:"name",align:"center"},{text:"",value:"icon",sortable:!1}],secoundName:"Port",secoundHeaders:[{text:"port_idx",value:"port_idx",align:"center",type:"text"},{text:"group_usage_port_idx",value:"group_usage_port_idx",align:"center",useUpdateItem:!0},{text:"port_code",value:"port_code",align:"center",type:"text",useUpdateItem:!0},{text:"nation_code",value:"nation_code",align:"center",type:"text"},{text:"port_name",value:"port_name",align:"center",type:"text"}]}}}):e._e(),"Network"===e.tabs[e.tabIdx]?t("SelectComponent",{key:"Network",attrs:{obj:{categoryOption:{api:["ship","network_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},masterNewItem:!1,masterApi:["network","network_computer"],masterName:"Computer",masterHeaders:[{text:"computer_idx",value:"computer_idx",align:"center",useUpdateItem:!0},{text:"name",value:"name",align:"center",type:"text"},{text:"",value:"icon",sortable:!1}],secoundApi:["network","network_network"],secoundName:"Network",secoundHeaders:[{text:"computer_network_idx",value:"computer_network_idx",align:"center"},{text:"nic_name",value:"nic_name",align:"center",type:"text",necessary:!0},{text:"mac_address",value:"mac_address",align:"center",type:"text",necessary:!0},{text:"gateway",value:"gateway",align:"center",type:"text",necessary:!0},{text:"ip_address",value:"ip_address",align:"center",type:"text",necessary:!0},{text:"subnet_mask",value:"subnet_mask",align:"center",type:"text",necessary:!0},{text:"dns_address",value:"dns_address",align:"center",type:"text",necessary:!0},{text:"Actions",value:"actions",sortable:!1}]}}}):e._e()],1)])},i=[],s=a(144),o=a(7790),u=(a(5699),a(9386)),_=a(5130),l=a(5987),x=(a(8084),a(6834)),c={name:"HomeView",components:{RegComponent:o.Z,InsertComponent:u.Z,MenuComponent:_.Z,SelectComponent:l.Z,MappingComponent:x.Z},setup(){const e=(0,s.iH)(0),t=(0,s.iH)(["Network","Tag","Host","Group Port Map","Group Ship Map","Group User Map"]);return{tabs:t,tabIdx:e}}},g=c,m=a(1001),d=(0,m.Z)(g,r,i,!1,null,null,null),y=d.exports}}]);
//# sourceMappingURL=setting.aa148371.js.map