"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[277],{9026:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(626),i=a(762),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(i.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(a){return t(n.Z,{key:a},[e._v(" "+e._s(a)+" ")])})),1)],1),t("div",{staticClass:"fix"},["Log"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Log",attrs:{obj:{categoryOption:{api:["ship","sw_log_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,detailProp:"ship_name",masterApi:["sw","sw_log_log"],masterName:"Log",masterHeders:[{text:"sw_log_idx",value:"sw_log_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"computer_name",value:"computer_name",align:"center",type:"text"},{text:"program_name",value:"program_name",align:"center",type:"text"},{text:"program_version",value:"program_version",align:"center",type:"text"},{text:"severity_code",value:"severity_code",align:"center",type:"text"},{text:"log_content",value:"log_content",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"}]}}}):e._e(),"Communication"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Communication",attrs:{obj:{categoryOption:{api:["ship","communication_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,detailProp:"ship_name",masterApi:["communication","communication_communication"],masterName:"Communication",masterHeders:[{text:"sniffing_idx",value:"sniffing_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"host",value:"host",align:"center",type:"text"},{text:"sequence",value:"sequence",align:"center",type:"text"},{text:"port",value:"port",align:"center",type:"text"},{text:"redundancy",value:"redundancy",align:"center",type:"text"},{text:"direction",value:"direction",align:"center",type:"text"},{text:"packet",value:"packet",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"}]}}}):e._e(),"Command History"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Command History",attrs:{obj:{categoryOption:{api:["ship","command_history_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,detailProp:"ship_name",masterApi:["command","command_history_command"],masterName:"Command History",masterHeders:[{text:"ship_control_command_idx",value:"ship_control_command_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"command",value:"command",align:"center",type:"text"},{text:"command_param_1",value:"command_param_1",align:"center",type:"text"},{text:"command_param_2",value:"command_param_2",align:"center",type:"text"},{text:"command_param_3",value:"command_param_3",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"}]}}}):e._e(),"Interface Status"===e.tabs[e.tabIdx]?t("DetailComponent",{key:"Interface Status",attrs:{obj:{categoryOption:{api:["ship","interface_status_GetSelectedShip_Combo"],textKey:"ship_name",valueKey:"ship_idx",modelKey:"ship_idx"},disbleNewItem:!0,detailProp:"ship_name",masterApi:["interface","interface_status_status"],masterName:"Interface Status",masterHeders:[{text:"tag_status_idx",value:"tag_status_idx",align:"center"},{text:"imo_id",value:"imo_id",align:"center",type:"text"},{text:"internal_tag_name",value:"internal_tag_name",align:"center",type:"text"},{text:"internal_tag_description",value:"internal_tag_description",align:"center",type:"text"},{text:"source_time",value:"source_time",align:"center",type:"text"},{text:"lastest_value",value:"lastest_value",align:"center",type:"text"},{text:"status",value:"status",align:"center",type:"text"}]}}}):e._e()],1)])},m=[],r=a(144),s=(a(4901),a(5699),a(5709),a(510),a(6220),a(9127)),l=(a(9021),{name:"AlamView",components:{DetailComponent:s.Z},setup(){const e=(0,r.iH)(0),t=(0,r.iH)(["Communication","Interface Status","Command History","Log"]);return{tabs:t,tabIdx:e}}}),c=l,_=a(1001),p=(0,_.Z)(c,o,m,!1,null,null,null),x=p.exports}}]);
//# sourceMappingURL=diagnostics.4bc4fc42.js.map