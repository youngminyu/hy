"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[84],{9386:function(e,t,a){a.d(t,{Z:function(){return C}});var s=a(4562),l=a(9582),i=a(4886),n=a(2118),o=a(5039),c=a(4061),r=a(4324),u=a(3424),d=a(3687),m=a(7808),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t(c.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(l.Z,[t(i.EB,{staticClass:"text-h5"},[e._v("Delete")]),t("p",{staticClass:"dialogContent"},[e._v("해당 아이탬을 삭제 하시겠습니까?")]),t(i.h7,[t(d.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(d.Z)],1)],1)],1),t(c.Z,{attrs:{"max-width":"1200px"},model:{value:e.insertDialog,callback:function(t){e.insertDialog=t},expression:"insertDialog"}},[t(l.Z,{staticClass:"full"},[t(i.EB,[t("span",{staticClass:"text-h6"},[e._v("Insert Item")])]),t("div",{staticClass:"rowBox"},[t(d.Z),t(m.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.insertTableSearch,callback:function(t){e.insertTableSearch=t},expression:"insertTableSearch"}})],1),t(n.Z,[t(o.Z,{attrs:{"fixed-header":"",search:e.insertTableSearch,headers:e.insertHeaders,items:e.insertTableList,"items-per-page":-1,"item-key":e.insertHeaders[1].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"actionsBox"},[t(r.Z,{attrs:{small:""},on:{click:function(t){return e.pushItem(a)}}},[e._v(" mdi-playlist-plus ")])],1)]}}],null,!0)})],1),t(i.h7,[t(d.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")])],1)],1)],1),t("div",{staticClass:"hyTitle"},[e._v("내부태그")]),void 0!==e.categoryOption?t(u.Z,{staticStyle:{width:"250px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":"","return-object":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),t("div",{staticClass:"spacer"}),t(m.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(o.Z,{staticClass:"spliceTable",attrs:{"fixed-header":"",search:e.masterTableSearch,headers:e.joinHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterHeaders[0].value},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"actionsBox"},[t(r.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.getInsertItems(a)}}},[e._v(" mdi-playlist-check ")]),t(r.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])],1)]}}],null,!0)})],1)])])])},v=[],h=a(144),f=a(5266),b={name:"InsertComponent",components:{},props:{obj:Object},setup(e){const{mappingKey:t,insertKeys:a,categoryOption:s,saveKey:l,saveApi:i,masterApi:n,masterHeaders:o,insertHeaders:c,insertApi:r}=e.obj;o.splice(1,0,{text:"No",value:"no",align:"center"});let u=null;const d=(0,h.iH)(null),m=(0,h.iH)(null),p=(0,h.iH)([]),v=(0,h.iH)(""),b=(0,h.iH)([...o,...c]),x=(0,h.iH)(null),g=(0,h.iH)(null),y=(0,h.iH)(!1),C=(0,h.iH)([]),k=(0,h.iH)(""),_=(0,h.iH)(!1),I=async()=>{const[e,t]=n;(0,f.getRequest)([e,t+"s"],{filterKey:d.value},(e=>{p.value=e||[]}))};if(s){const[e,t]=s.api;(0,f.getRequest)([e,t],null,(e=>{u=e[0],d.value=e[0][s.valueKey],m.value=e,I()}))}else I();const Z=e=>{d.value=e[s.valueKey],u=e,I()},w=e=>{c.map((t=>{const a=t.value;"actions"!==a&&(x.value[a]=e[a])}));const s={};l.map((e=>{s[e]=u[e]}));const n={SaveType:null===x.value[t]?"new":"update"};a.map((e=>{n[e]=x.value[e]})),s.list=[n],(0,f.postRequest)(i,s,(e=>{D()}))},H=e=>{y.value=!0;const t={};s&&(t.filterKey=d.value),x.value=e,(0,f.getRequest)(r,t,(e=>{C.value=e}))},T=e=>{g.value=e,_.value=!0},S=()=>{if(null===g.value[t])return void O();const e={};l.map((t=>{e[t]=u[t]}));const s={SaveType:"delete"};a.map((e=>{s[e]=g.value[e]})),e.list=[s],(0,f.postRequest)(i,e,(e=>{for(const t in e[0])g.value[t]=e[0][t];O()}))},D=()=>{y.value=!1},O=()=>{_.value=!1};return{masterHeaders:o,categoryChange:Z,categoryOption:s,category:d,categories:m,masterTableSearch:v,joinHeaders:b,masterTableList:p,insertDialog:y,getInsertItems:H,insertHeaders:c,insertTableSearch:k,insertTableList:C,dialogDelete:_,pushItem:w,deleteItem:T,deleteItemConfirm:S,close:D,closeDelete:O}}},x=b,g=a(1001),y=(0,g.Z)(x,p,v,!1,null,null,null),C=y.exports},5130:function(e,t,a){a.d(t,{Z:function(){return _}});var s=a(344),l=a(4562),i=a(9582),n=a(4886),o=a(5039),c=a(4061),r=a(5005),u=a(4324),d=a(3424),m=a(3687),p=a(7808),v=function(){var e=this,t=e._self._c;return t("div",{ref:"componentRef",staticClass:"component"},[t("div",{staticClass:"box"},[t(c.Z,{attrs:{"max-width":"500px"},model:{value:e.contentDialogDelete,callback:function(t){e.contentDialogDelete=t},expression:"contentDialogDelete"}},[t(i.Z,[t(n.EB,{staticClass:"text-h5"},[e._v("Delete")]),t("p",{staticClass:"dialogContent"},[e._v("해당 메뉴를 삭제 하시겠습니까?")]),t(n.h7,[t(m.Z),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(m.Z)],1)],1)],1),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v("Menu Control")]),t(l.Z,{attrs:{color:"primary",dark:""},on:{click:e.addItem}},[e._v(" New Item ")]),t(m.Z),t(l.Z,{attrs:{color:"primary",dark:""},on:{click:e.saveItems}},[e._v(" Save ")]),t(c.Z,{attrs:{"max-width":"500px"},model:{value:e.contentDialog,callback:function(t){e.contentDialog=t},expression:"contentDialog"}},[t(i.Z,[t(n.EB,[t("span",{staticClass:"text-h6"},[e._v("New Item")])]),t(r.Z,{ref:"formRef",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"regContainer"},e._l(e.fieldItems,(function(a,l){return t("div",{key:l,staticClass:"regBox"},["text"===a.type?t(p.Z,{attrs:{rules:[e.roleRequired],label:a.text,placeholder:a.text,required:""},model:{value:e.newItem[a.value],callback:function(t){e.$set(e.newItem,a.value,t)},expression:"newItem[item.value]"}}):e._e(),"shipSelect"===a.type?t(s.Z,{attrs:{rules:[e.roleRequired],items:e.shipSelectItems,label:a.text,placeholder:"Select...",required:"","item-text":"name","item-value":"code"},model:{value:e.newItem[a.value],callback:function(t){e.$set(e.newItem,a.value,t)},expression:"newItem[item.value]"}}):e._e(),"usageSelect"===a.type?t(s.Z,{attrs:{rules:[e.roleRequired],items:e.usageSelectItems,label:a.text,placeholder:"Select...",required:"","item-text":"name","item-value":"code"},model:{value:e.newItem[a.value],callback:function(t){e.$set(e.newItem,a.value,t)},expression:"newItem[item.value]"}}):e._e()],1)})),0)]),t(n.h7,[t(m.Z),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeNewItem}},[e._v(" Cancel ")]),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.saveNewItem}},[e._v(" Save ")])],1)],1)],1)],1),t("div",{staticClass:"box"},[t(o.Z,{attrs:{"fixed-header":"",headers:e.contentHeaders,items:e.contentTableList,"items-per-page":-1},scopedSlots:e._u([{key:"item.idx",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.name",fn:function({item:a}){return[t(p.Z,{staticClass:"caption",staticStyle:{width:"150px",margin:"0 auto"},attrs:{dense:"",outlined:"",placeholder:"menu","hide-details":"auto"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"item.name"}})]}},{key:"item.usage_yn",fn:function({item:a}){return[t(d.Z,{staticClass:"caption",staticStyle:{width:"150px",margin:"0 auto"},attrs:{items:e.usageSelectItems,placeholder:"usage",dense:"",outlined:"","hide-details":"auto","item-text":"name","item-value":"code"},model:{value:a.usage_yn,callback:function(t){e.$set(a,"usage_yn",t)},expression:"item.usage_yn"}})]}},{key:"item.ship_type_code",fn:function({item:a}){return[t(d.Z,{staticClass:"caption",staticStyle:{width:"250px",margin:"0 auto"},attrs:{items:e.shipSelectItems,placeholder:"shiptype",dense:"",outlined:"","hide-details":"auto","item-text":"name","item-value":"code"},model:{value:a.ship_type_code,callback:function(t){e.$set(a,"ship_type_code",t)},expression:"item.ship_type_code"}})]}},{key:"item.url",fn:function({item:a}){return[t(p.Z,{staticClass:"caption",staticStyle:{width:"150px",margin:"0 auto"},attrs:{dense:"",outlined:"",placeholder:"menu","hide-details":"auto"},model:{value:a.url,callback:function(t){e.$set(a,"url",t)},expression:"item.url"}})]}},{key:"item.actions",fn:function({item:a,index:s}){return[t("div",{staticClass:"actionsBox"},[0!==s?t(u.Z,{staticClass:"mr-1",attrs:{small:""},on:{click:function(t){return e.up(e.contentTableList,a)}}},[e._v(" mdi-arrow-up-thin ")]):e._e(),e.contentTableList.length-1!==s?t(u.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.down(e.contentTableList,a)}}},[e._v(" mdi-arrow-down-thin ")]):e._e(),t(u.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.contentTableList,a)}}},[e._v(" mdi-delete ")])],1)]}}],null,!0)})],1)])],1)])},h=[],f=(a(7658),a(144)),b=a(5266),x=a(782),g={name:"RegComponent",components:{},props:{obj:Object},setup(e){const{contentHeaders:t,contentApi:a}=e.obj;let s=null,l=null;const i=(0,f.iH)(),n=(0,f.iH)(),o=(0,f.iH)([]),c=(0,f.iH)([]),r=(0,f.iH)([]),u=(0,f.iH)([{name:"사용",code:"y"},{name:"미 사용",code:"n"}]);(0,b.getRequest)(["menu","shipTypes"],"",(e=>{r.value=e,(0,b.getRequest)(a,"",(e=>{o.value=e}))}));const d={},m=t.filter((e=>!!Object.prototype.hasOwnProperty.call(e,"type"))).map((e=>(d[e.value]="",e))),p=(0,f.qj)(Object.assign({},d)),v=(0,f.iH)(!1),h=(0,f.iH)(!1),g=(e,t)=>{const a=e.indexOf(t);e.splice(a,1),e.splice(a-1,0,t)},y=(e,t)=>{const a=e.indexOf(t);e.splice(a,1),e.splice(a+1,0,t)},C=()=>{v.value=!0},k=(e,t)=>{s=e,l=t,h.value=!0},_=()=>{const e=s.indexOf(l);s.splice(e,1),I()},I=()=>{h.value=!1,(0,f.Y3)((()=>{s=null,l=null}))},Z=()=>{o.value.push(Object.assign({},p)),w()},w=()=>{v.value=!1,(0,f.Y3)((()=>{i.value.reset(),Object.assign(p,d)}))},H=()=>{(0,b.postRequest)(["menu","saveMenus"],Array.from(o.value),(e=>{alert("데이터 저장이 완료 되었습니다.")}))};return{roleRequired:x.roleRequired,componentRef:n,formRef:i,newItem:p,fieldItems:m,up:g,down:y,addItem:C,saveItems:H,usageSelectItems:u,shipSelectItems:r,contentDialog:v,contentDialogDelete:h,contentHeaders:t,contentTableList:o,tabTableList:c,deleteItem:k,deleteItemConfirm:_,closeNewItem:w,closeDelete:I,saveNewItem:Z}}},y=g,C=a(1001),k=(0,C.Z)(y,v,h,!1,null,null,null),_=k.exports},5699:function(e,t,a){var s=a(5039),l=a(4324),i=a(3424),n=a(7808),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("div",{staticClass:"col",staticStyle:{"max-width":"50%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v("내부태그")]),t("div",{staticClass:"spacer"}),t(i.Z,{attrs:{items:e.ships,"item-text":e=>e.shipname,"menu-props":"auto",label:"선박","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},model:{value:e.ship,callback:function(t){e.ship=t},expression:"ship"}})],1),t("div",{staticClass:"box"},[t(s.Z,{attrs:{"fixed-header":"",headers:e.refTableHeaders,items:e.refTableList,"items-per-page":-1,"item-key":e.refTableHeaders[0].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(l.Z,{attrs:{small:""},on:{click:function(t){return e.copyItem(a)}}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),t("div",{staticClass:"col",staticStyle:{"max-width":"50%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v("외부태그")]),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.refTableSearch,callback:function(t){e.refTableSearch=t},expression:"refTableSearch"}})],1),t("div",{staticClass:"box"},[t(s.Z,{attrs:{"fixed-header":"",headers:e.bowlTableHeaders,items:e.bowlTableList,"items-per-page":-1,"item-key":e.bowlTableHeaders[0].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(l.Z,{attrs:{small:""},on:{click:function(t){return e.deleteBowlTableItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)])])])},c=[],r=(a(7658),a(144)),u={name:"TransferComponent",components:{},setup(){const e=(0,r.iH)([{shipid:"1",shipname:"아리온제주1"},{shipid:"2",shipname:"아리온제주2"},{shipid:"3",shipname:"아리온제주3"},{shipid:"4",shipname:"아리온제주4"},{shipid:"5",shipname:"아리온제주5"},{shipid:"5",shipname:"아리온제주6"},{shipid:"5",shipname:"아리온제주7"},{shipid:"5",shipname:"아리온제주8"},{shipid:"5",shipname:"아리온제주9"}]),t=(0,r.iH)(null),a=(0,r.iH)(""),s=(0,r.iH)([]),l=[{text:"NO",align:"center",value:"no"},{text:"선박",align:"center",value:"shipname"},{text:"장비ID",align:"center",value:"equipid"},{text:"태그",align:"center",value:"tagname"},{text:"Description",align:"center",value:"tagdesc"},{text:"Actions",value:"actions",sortable:!1}],i=(0,r.iH)([]),n=(0,r.iH)([{text:"Actions",value:"actions",sortable:!1},{text:"NO",align:"center",value:"no"},{text:"선박",align:"center",value:"shipname"},{text:"장비ID",align:"center",value:"equipid"},{text:"태그",align:"center",value:"tagname"},{text:"Description",align:"center",value:"tagdesc"}]),o=(0,r.iH)(!1),c=(0,r.iH)(!1),u=(0,r.iH)(-1),d=(0,r.iH)({shipname:"",equipid:"",tagname:"",tagdesc:""}),m=(0,r.iH)({shipname:"",equipid:"",tagname:"",tagdesc:""}),p=e=>{const t=Object.assign({},e);i.value.push(t)},v=e=>{u.value=i.value.indexOf(e),d.value=Object.assign({},e),o.value=!0},h=e=>{i.value.splice(i.value.indexOf(e),1)},f=()=>{o.value=!1,(0,r.Y3)((()=>{d.value=Object.assign({},m.value),u.value=-1}))},b=()=>{c.value=!1,(0,r.Y3)((()=>{d.value=Object.assign({},m.value),u.value=-1}))},x=()=>{u.value>-1?Object.assign(i.value[u.value],d.value):i.value.push(d.value),f()};(0,r.YP)(o,(e=>{e||f()})),(0,r.YP)(c,(e=>{e||b()}));const g=(0,r.Fl)((()=>-1===u.value?"New Item":"Edit Item"));return{formTitle:g,dialog:o,dialogDelete:c,bowlTableHeaders:n,bowlTableList:i,editedIndex:u,editedItem:d,defaultItem:m,copyItem:p,editItem:v,deleteBowlTableItem:h,close:f,closeDelete:b,save:x,refTableSearch:a,ships:e,ship:t,refTableHeaders:l,refTableList:s}}},d=u,m=a(1001),p=(0,m.Z)(d,o,c,!1,null,null,null);p.exports}}]);
//# sourceMappingURL=84.fa9d0106.js.map