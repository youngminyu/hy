"use strict";(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[462],{9386:function(e,t,a){a.d(t,{Z:function(){return T}});var s=a(4562),l=a(9582),i=a(4886),n=a(2118),o=a(5039),r=a(4061),c=a(4324),u=a(3424),d=a(3687),m=a(7808),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t(r.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(l.Z,[t(i.EB,{staticClass:"text-h5"},[e._v("Delete")]),t("p",{staticClass:"dialogContent"},[e._v("해당 아이탬을 삭제 하시겠습니까?")]),t(i.h7,[t(d.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(d.Z)],1)],1)],1),t(r.Z,{attrs:{"max-width":"1200px"},model:{value:e.insertDialog,callback:function(t){e.insertDialog=t},expression:"insertDialog"}},[t(l.Z,{staticClass:"full"},[t(i.EB,[t("span",{staticClass:"text-h6"},[e._v("Insert Item")])]),t("div",{staticClass:"rowBox"},[t(d.Z),t(m.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.insertTableSearch,callback:function(t){e.insertTableSearch=t},expression:"insertTableSearch"}})],1),t(n.Z,[t(o.Z,{attrs:{"fixed-header":"",search:e.insertTableSearch,headers:e.insertHeaders,items:e.insertTableList,"items-per-page":-1,"item-key":e.insertHeaders[1].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"actionsBox"},[t(c.Z,{attrs:{small:""},on:{click:function(t){return e.pushItem(a)}}},[e._v(" mdi-playlist-plus ")])],1)]}}],null,!0)})],1),t(i.h7,[t(d.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")])],1)],1)],1),t("div",{staticClass:"hyTitle"},[e._v("내부태그")]),void 0!==e.categoryOption?t(u.Z,{staticStyle:{width:"250px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":"","return-object":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),t("div",{staticClass:"spacer"}),t(m.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(o.Z,{staticClass:"spliceTable",attrs:{"fixed-header":"",search:e.masterTableSearch,headers:e.joinHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterHeaders[0].value},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"actionsBox"},[t(c.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.getInsertItems(a)}}},[e._v(" mdi-playlist-check ")]),t(c.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])],1)]}}],null,!0)})],1)])])])},v=[],y=a(144),b=a(5266),h={name:"InsertComponent",components:{},props:{obj:Object},setup(e){const{mappingKey:t,insertKeys:a,categoryOption:s,saveKey:l,saveApi:i,masterApi:n,masterHeaders:o,insertHeaders:r,insertApi:c}=e.obj;o.splice(1,0,{text:"No",value:"no",align:"center"});let u=null;const d=(0,y.iH)(null),m=(0,y.iH)(null),p=(0,y.iH)([]),v=(0,y.iH)(""),h=(0,y.iH)([...o,...r]),f=(0,y.iH)(null),g=(0,y.iH)(null),x=(0,y.iH)(!1),T=(0,y.iH)([]),C=(0,y.iH)(""),_=(0,y.iH)(!1),k=async()=>{const[e,t]=n;(0,b.getRequest)([e,t+"s"],{filterKey:d.value},(e=>{p.value=e||[]}))};if(s){const[e,t]=s.api;(0,b.getRequest)([e,t],null,(e=>{u=e[0],d.value=e[0][s.valueKey],m.value=e,k()}))}else k();const H=e=>{d.value=e[s.valueKey],u=e,k()},I=e=>{r.map((t=>{const a=t.value;"actions"!==a&&(f.value[a]=e[a])}));const s={};l.map((e=>{s[e]=u[e]}));const n={SaveType:null===f.value[t]?"new":"update"};a.map((e=>{n[e]=f.value[e]})),s.list=[n],(0,b.postRequest)(i,s,(e=>{K()}))},Z=e=>{x.value=!0;const t={};s&&(t.filterKey=d.value),f.value=e,(0,b.getRequest)(c,t,(e=>{T.value=e}))},S=e=>{g.value=e,_.value=!0},w=()=>{if(null===g.value[t])return void D();const e={};l.map((t=>{e[t]=u[t]}));const s={SaveType:"delete"};a.map((e=>{s[e]=g.value[e]})),e.list=[s],(0,b.postRequest)(i,e,(e=>{for(const t in e[0])g.value[t]=e[0][t];D()}))},K=()=>{x.value=!1},D=()=>{_.value=!1};return{masterHeaders:o,categoryChange:H,categoryOption:s,category:d,categories:m,masterTableSearch:v,joinHeaders:h,masterTableList:p,insertDialog:x,getInsertItems:Z,insertHeaders:r,insertTableSearch:C,insertTableList:T,dialogDelete:_,pushItem:I,deleteItem:S,deleteItemConfirm:w,close:K,closeDelete:D}}},f=h,g=a(1001),x=(0,g.Z)(f,p,v,!1,null,null,null),T=x.exports},6834:function(e,t,a){a.d(t,{Z:function(){return I}});var s=a(4562),l=a(5039),i=a(4324),n=a(7808),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("SelectDialog",{attrs:{payload:e.selectPayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{staticClass:"selectTable",attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterTableKey},on:{"click:row":e.selectTableItem},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.icon",fn:function({}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),null!==e.refItem?t("div",{staticClass:"col",staticStyle:{"min-width":"50%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.secoundName))]),t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.selectItem(e.secoundName,e.secoundHeaders,e.secoundTableList)}}},[e._v(" Select Item ")]),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.secoundTableSearch,callback:function(t){e.secoundTableSearch=t},expression:"secoundTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{attrs:{"fixed-header":"",search:e.secoundTableSearch,headers:e.secoundHeaders,items:e.secoundTableList,"items-per-page":-1,"item-key":e.secoundTableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}}],null,!0)})],1)]):e._e()],1)])},r=[],c=a(144),u=a(5266),d=a(9582),m=a(4886),p=a(4061),v=a(3424),y=a(3687),b=function(){var e=this,t=e._self._c;return t(p.Z,{attrs:{"max-width":"1000px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(d.Z,{staticClass:"full"},[t(m.EB,[t("span",{staticClass:"text-h6"},[e._v(e._s(e.title)+" 선택")])]),t("div",{staticClass:"container"},[t(l.Z,{attrs:{"fixed-header":"",headers:e.headers,items:e.list,"items-per-page":-1,"item-key":e.tableKey,"show-select":""},scopedSlots:e._u([{key:"item.role_master_name",fn:function({item:a,header:s}){return[t(v.Z,{staticClass:"caption",staticStyle:{width:"200px",margin:"0 auto"},attrs:{items:e.selectItems[s.api[1]],placeholder:"shiptype",dense:"",outlined:"","hide-details":"auto","item-text":s.textKey,"item-value":s.valueKey},model:{value:a[e.selectKeys[s.api[1]].modelKey],callback:function(t){e.$set(a,e.selectKeys[s.api[1]].modelKey,t)},expression:"item[selectKeys[header.api[1]].modelKey]"}})]}}],null,!0),model:{value:e.selectedList,callback:function(t){e.selectedList=t},expression:"selectedList"}})],1),t(m.h7,[t(y.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},h=[],f=(a(7658),{name:"DialogCreateItem",props:["payload"],setup(e){let t=null,a=null;const s=(0,c.iH)(""),l=(0,c.qj)({}),i=(0,c.qj)({}),n=(0,c.iH)([]),o=(0,c.iH)(""),r=(0,c.iH)([]),d=(0,c.iH)([]),m=(0,c.iH)(!1),p=()=>{m.value=!1,(0,c.Y3)((()=>{n.value=[]}))},v=()=>{const{secoundHeaders:e,parentItem:l}=t,i=n.value.reduce(((t,l)=>{const i={};if(a.has(l[s.value])){i.saveType="update";const t=a.get(l[s.value]);e.map((e=>{!0===e.useUpdateItem&&(i[e.modelKey||e.value]=l[e.modelKey||e.value]||t[e.modelKey||e.value]||null)}))}else i.saveType="new",e.map((e=>{!0===e.useUpdateItem&&(i[e.modelKey||e.value]=l[e.modelKey||e.value]||null)}));return t.push(i),t}),[]),o={...l,list:i},[r,c]=t.api;(0,u.postRequest)([r,c],o,(e=>{t.setList(e)})),p()};return(0,c.YP)((()=>e.payload),(e=>{t=e,s.value=e.secoundHeaders[0].value;const c=[];e.list.map((t=>{e.targetListMap.has(t[s.value])&&c.push(t)})),n.value=c;const p=[],v=e.headers.filter((t=>{if(Object.prototype.hasOwnProperty.call(t,"type")){if("select"===t.type){const[a,n]=t.api;p.push(new Promise((a=>{(0,u.getRequest)(t.api,null,(o=>{const r=o[0][t.modelKey];e.list.map((a=>{e.targetListMap.has(a[s.value])?a[t.modelKey]=e.targetListMap.get(a[s.value])[t.modelKey]:-1===a[t.modelKey]&&(a[t.modelKey]=r)})),l[n]={textKey:t.textKey,valueKey:t.valueKey,modelKey:t.modelKey},i[n]=o,a(!0)}))})))}return!0}return!1}));Promise.all(p).then((()=>{o.value=e.title,r.value=v,d.value=e.list,a=new Map(t.targetList.map((e=>[e[s.value],e]))),m.value=!0}))})),{selectKeys:l,selectItems:i,tableKey:s,selectedList:n,title:o,headers:r,list:d,dialog:m,close:p,save:v}}}),g=f,x=a(1001),T=(0,x.Z)(g,b,h,!1,null,null,null),C=T.exports,_={name:"SelectComponent",components:{SelectDialog:C},props:{obj:Object},setup(e){const{masterName:t,masterApi:a,masterHeaders:s,mappingApi:l,updateApi:i,secoundName:n,secoundApi:o,secoundHeaders:r}=e.obj;s.splice(1,0,{text:"No",value:"no",align:"center"}),r.splice(1,0,{text:"No",value:"no",align:"center"});const d=(0,c.iH)(null),m=(0,c.iH)([]),p=(0,c.iH)([]),v=(0,c.iH)(""),y=(0,c.iH)(""),b={},h=(0,c.iH)(s[0].value),f=(0,c.iH)(s[0].value),g=(0,c.iH)(r[0].value);s.map((e=>{!0===e.useUpdateItem&&(b[e.value]=e),!0===e.useParentKey&&(h.value=e.value)}));let x=new Map;const T=e=>{const[t,a]=o;(0,u.getRequest)([t,a+"s"],{parent_key:e},(e=>{p.value=e||[],x=new Map(p.value.map((e=>[e[r[0].value],e])))}))},[C,_]=a;(0,u.getRequest)([C,_+"s"],null,(e=>{m.value=e||[]}));const k=(e,t)=>{d.value=e,T(e[h.value]),t.select(!0)},H=(0,c.iH)(null),I=(e,t)=>{const a={};for(const l in b)b[l].asKey?a[b[l].asKey]=d.value[l]:a[l]=d.value[l];const[s,n]=l;(0,u.getRequest)([s,n],null,(s=>{H.value={title:e,headers:t,list:s,targetList:p,targetListMap:x,api:i,parentItem:a,secoundHeaders:r,setList:e=>{p.value=e,x=new Map(p.value.map((e=>[e[r[0].value],e])))}}}))};return{refItem:d,masterTableKey:f,secoundTableKey:g,masterName:t,masterApi:a,masterHeaders:s,masterTableList:m,secoundName:n,secoundApi:o,secoundHeaders:r,secoundTableList:p,masterTableSearch:v,secoundTableSearch:y,selectTableItem:k,selectItem:I,selectPayload:H}}},k=_,H=(0,x.Z)(k,o,r,!1,null,null,null),I=H.exports},5130:function(e,t,a){a.d(t,{Z:function(){return _}});var s=a(344),l=a(4562),i=a(9582),n=a(4886),o=a(5039),r=a(4061),c=a(5005),u=a(4324),d=a(3424),m=a(3687),p=a(7808),v=function(){var e=this,t=e._self._c;return t("div",{ref:"componentRef",staticClass:"component"},[t("div",{staticClass:"box"},[t(r.Z,{attrs:{"max-width":"500px"},model:{value:e.contentDialogDelete,callback:function(t){e.contentDialogDelete=t},expression:"contentDialogDelete"}},[t(i.Z,[t(n.EB,{staticClass:"text-h5"},[e._v("Delete")]),t("p",{staticClass:"dialogContent"},[e._v("해당 메뉴를 삭제 하시겠습니까?")]),t(n.h7,[t(m.Z),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(m.Z)],1)],1)],1),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v("Menu Control")]),t(l.Z,{attrs:{color:"primary",dark:""},on:{click:e.addItem}},[e._v(" New Item ")]),t(m.Z),t(l.Z,{attrs:{color:"primary",dark:""},on:{click:e.saveItems}},[e._v(" Save ")]),t(r.Z,{attrs:{"max-width":"500px"},model:{value:e.contentDialog,callback:function(t){e.contentDialog=t},expression:"contentDialog"}},[t(i.Z,[t(n.EB,[t("span",{staticClass:"text-h6"},[e._v("New Item")])]),t(c.Z,{ref:"formRef",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"regContainer"},e._l(e.fieldItems,(function(a,l){return t("div",{key:l,staticClass:"regBox"},["text"===a.type?t(p.Z,{attrs:{rules:[e.roleRequired],label:a.text,placeholder:a.text,required:""},model:{value:e.newItem[a.value],callback:function(t){e.$set(e.newItem,a.value,t)},expression:"newItem[item.value]"}}):e._e(),"shipSelect"===a.type?t(s.Z,{attrs:{rules:[e.roleRequired],items:e.shipSelectItems,label:a.text,placeholder:"Select...",required:"","item-text":"name","item-value":"code"},model:{value:e.newItem[a.value],callback:function(t){e.$set(e.newItem,a.value,t)},expression:"newItem[item.value]"}}):e._e(),"usageSelect"===a.type?t(s.Z,{attrs:{rules:[e.roleRequired],items:e.usageSelectItems,label:a.text,placeholder:"Select...",required:"","item-text":"name","item-value":"code"},model:{value:e.newItem[a.value],callback:function(t){e.$set(e.newItem,a.value,t)},expression:"newItem[item.value]"}}):e._e()],1)})),0)]),t(n.h7,[t(m.Z),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeNewItem}},[e._v(" Cancel ")]),t(l.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.saveNewItem}},[e._v(" Save ")])],1)],1)],1)],1),t("div",{staticClass:"box"},[t(o.Z,{attrs:{"fixed-header":"",headers:e.contentHeaders,items:e.contentTableList,"items-per-page":-1},scopedSlots:e._u([{key:"item.idx",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.name",fn:function({item:a}){return[t(p.Z,{staticClass:"caption",staticStyle:{width:"150px",margin:"0 auto"},attrs:{dense:"",outlined:"",placeholder:"menu","hide-details":"auto"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"item.name"}})]}},{key:"item.usage_yn",fn:function({item:a}){return[t(d.Z,{staticClass:"caption",staticStyle:{width:"150px",margin:"0 auto"},attrs:{items:e.usageSelectItems,placeholder:"usage",dense:"",outlined:"","hide-details":"auto","item-text":"name","item-value":"code"},model:{value:a.usage_yn,callback:function(t){e.$set(a,"usage_yn",t)},expression:"item.usage_yn"}})]}},{key:"item.ship_type_code",fn:function({item:a}){return[t(d.Z,{staticClass:"caption",staticStyle:{width:"250px",margin:"0 auto"},attrs:{items:e.shipSelectItems,placeholder:"shiptype",dense:"",outlined:"","hide-details":"auto","item-text":"name","item-value":"code"},model:{value:a.ship_type_code,callback:function(t){e.$set(a,"ship_type_code",t)},expression:"item.ship_type_code"}})]}},{key:"item.url",fn:function({item:a}){return[t(p.Z,{staticClass:"caption",staticStyle:{width:"150px",margin:"0 auto"},attrs:{dense:"",outlined:"",placeholder:"menu","hide-details":"auto"},model:{value:a.url,callback:function(t){e.$set(a,"url",t)},expression:"item.url"}})]}},{key:"item.actions",fn:function({item:a,index:s}){return[t("div",{staticClass:"actionsBox"},[0!==s?t(u.Z,{staticClass:"mr-1",attrs:{small:""},on:{click:function(t){return e.up(e.contentTableList,a)}}},[e._v(" mdi-arrow-up-thin ")]):e._e(),e.contentTableList.length-1!==s?t(u.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.down(e.contentTableList,a)}}},[e._v(" mdi-arrow-down-thin ")]):e._e(),t(u.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.contentTableList,a)}}},[e._v(" mdi-delete ")])],1)]}}],null,!0)})],1)])],1)])},y=[],b=(a(7658),a(144)),h=a(5266),f=a(782),g={name:"RegComponent",components:{},props:{obj:Object},setup(e){const{contentHeaders:t,contentApi:a}=e.obj;let s=null,l=null;const i=(0,b.iH)(),n=(0,b.iH)(),o=(0,b.iH)([]),r=(0,b.iH)([]),c=(0,b.iH)([]),u=(0,b.iH)([{name:"사용",code:"y"},{name:"미 사용",code:"n"}]);(0,h.getRequest)(["menu","shipTypes"],"",(e=>{c.value=e,(0,h.getRequest)(a,"",(e=>{o.value=e}))}));const d={},m=t.filter((e=>!!Object.prototype.hasOwnProperty.call(e,"type"))).map((e=>(d[e.value]="",e))),p=(0,b.qj)(Object.assign({},d)),v=(0,b.iH)(!1),y=(0,b.iH)(!1),g=(e,t)=>{const a=e.indexOf(t);e.splice(a,1),e.splice(a-1,0,t)},x=(e,t)=>{const a=e.indexOf(t);e.splice(a,1),e.splice(a+1,0,t)},T=()=>{v.value=!0},C=(e,t)=>{s=e,l=t,y.value=!0},_=()=>{const e=s.indexOf(l);s.splice(e,1),k()},k=()=>{y.value=!1,(0,b.Y3)((()=>{s=null,l=null}))},H=()=>{o.value.push(Object.assign({},p)),I()},I=()=>{v.value=!1,(0,b.Y3)((()=>{i.value.reset(),Object.assign(p,d)}))},Z=()=>{(0,h.postRequest)(["menu","saveMenus"],Array.from(o.value),(e=>{alert("데이터 저장이 완료 되었습니다.")}))};return{roleRequired:f.roleRequired,componentRef:n,formRef:i,newItem:p,fieldItems:m,up:g,down:x,addItem:T,saveItems:Z,usageSelectItems:u,shipSelectItems:c,contentDialog:v,contentDialogDelete:y,contentHeaders:t,contentTableList:o,tabTableList:r,deleteItem:C,deleteItemConfirm:_,closeNewItem:I,closeDelete:k,saveNewItem:H}}},x=g,T=a(1001),C=(0,T.Z)(x,v,y,!1,null,null,null),_=C.exports},7790:function(e,t,a){a.d(t,{Z:function(){return g}});var s=a(4562),l=a(5039),i=a(4324),n=a(3424),o=a(7808),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("CreateDialog",{attrs:{payload:e.createPayload}}),t("DeleteDialog",{attrs:{payload:e.deletePayload}}),t("UpdateDialog",{attrs:{payload:e.updatePayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),void 0!==e.categoryOption?t(n.Z,{staticStyle:{width:"250px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem(e.masterName,e.masterApi,e.masterTableList,e.masterHeaders)}}},[e._v(" New Item ")]),t("div",{staticClass:"spacer"}),t(o.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.tableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem(e.masterName,e.masterApi,e.masterTableList,e.masterHeaders,a)}}},[e._v(" mdi-pencil ")]),t(i.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.masterApi,e.masterTableList,a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)])],1)])},c=[],u=a(144),d=a(5266),m=a(9245),p=a(9659),v=a(209),y={name:"SelectComponent",components:{CreateDialog:p.Z,DeleteDialog:m.Z,UpdateDialog:v.Z},props:{obj:Object},setup(e){const{categoryOption:t,masterName:a,masterApi:s,masterHeaders:l}=e.obj,i=(0,u.iH)(l[0].value),n=(0,u.iH)(""),o=(0,u.iH)(null);l.splice(1,0,{text:"No",value:"no",align:"center"});const r=(0,u.iH)([]),c=(0,u.iH)(""),m=()=>{const[e,t]=s;""===n.value?(0,d.getRequest)([e,t+"s"],null,(e=>{r.value=e||[]})):(0,d.getRequest)([e,t+"s"],{filterKey:n.value},(e=>{r.value=e||[]}))};if(t){const[e,a]=t.api;(0,d.getRequest)([e,a],null,(e=>{n.value=e[0][t.valueKey],o.value=e,m()}))}else m();const p=e=>{n.value=e,m()},v=(0,u.iH)(null),y=(0,u.iH)(null),b=(0,u.iH)(null),h=(e,a,s,l)=>{const o={};t&&(o[t.modelKey]=n.value);const r={saveType:"new"};r[i.value]=null,v.value={title:e,api:a,list:s,fields:l,parentItem:r,filter:o}},f=(e,a,s,l,o)=>{const r={};t&&(r[t.modelKey]=n.value);const c={saveType:"update"};c[i.value]=o[i.value],y.value={title:e,api:a,list:s,fields:l,item:o,parentItem:c,filter:r}},g=(e,t,a)=>{b.value={list:t,item:a,api:e}};return{tableKey:i,categoryChange:p,categoryOption:t,category:n,categories:o,masterName:a,masterApi:s,masterHeaders:l,masterTableList:r,masterTableSearch:c,createItem:h,updateItem:f,deleteItem:g,createPayload:v,updatePayload:y,deletePayload:b}}},b=y,h=a(1001),f=(0,h.Z)(b,r,c,!1,null,null,null),g=f.exports},5987:function(e,t,a){a.d(t,{Z:function(){return g}});var s=a(4562),l=a(5039),i=a(4324),n=a(3424),o=a(7808),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("CreateDialog",{attrs:{payload:e.createPayload}}),t("DeleteDialog",{attrs:{payload:e.deletePayload}}),t("UpdateDialog",{attrs:{payload:e.updatePayload}}),t("div",{staticClass:"col"},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.masterName))]),void 0!==e.categoryOption?t(n.Z,{staticStyle:{width:"200px"},attrs:{items:e.categories,"item-text":t=>t[e.categoryOption.textKey],"item-value":t=>t[e.categoryOption.valueKey],"menu-props":"auto","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},on:{change:e.categoryChange},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._e(),!1!==e.masterNewItem?t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem("master",e.masterName,e.masterTableKey,e.masterApi,e.masterTableList,e.masterHeaders)}}},[e._v(" New Item ")]):e._e(),t("div",{staticClass:"spacer"}),t(o.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.masterTableSearch,callback:function(t){e.masterTableSearch=t},expression:"masterTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{staticClass:"selectTable",attrs:{"fixed-header":"","single-select":!0,search:e.masterTableSearch,headers:e.masterHeaders,items:e.masterTableList,"items-per-page":-1,"item-key":e.masterTableKey},on:{"click:row":e.selectTableItem},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem("master",e.masterName,e.masterTableKey,e.masterApi,e.masterTableList,e.masterHeaders,a)}}},[e._v(" mdi-pencil ")]),t(i.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.masterApi,e.masterTableList,a)}}},[e._v(" mdi-delete ")])]}},{key:"item.icon",fn:function({}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),null!==e.refItem?t("div",{staticClass:"col",staticStyle:{"min-width":"55%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v(e._s(e.secoundName))]),t(s.Z,{attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem("secound",e.secoundName,e.secoundTableKey,e.secoundApi,e.secoundTableList,e.secoundHeaders)}}},[e._v(" New Item ")]),t("div",{staticClass:"spacer"}),t(o.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.secoundTableSearch,callback:function(t){e.secoundTableSearch=t},expression:"secoundTableSearch"}})],1),t("div",{staticClass:"box"},[t(l.Z,{attrs:{"fixed-header":"",search:e.secoundTableSearch,headers:e.secoundHeaders,items:e.secoundTableList,"items-per-page":-1,"item-key":e.secoundTableKey},scopedSlots:e._u([{key:"item.no",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"item.actions",fn:function({item:a}){return[t(i.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.updateItem("secound",e.secoundName,e.secoundTableKey,e.secoundApi,e.secoundTableList,e.secoundHeaders,a)}}},[e._v(" mdi-pencil ")]),t(i.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.secoundApi,e.secoundTableList,a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)]):e._e()],1)])},c=[],u=a(144),d=a(5266),m=a(9245),p=a(9659),v=a(209),y={name:"SelectComponent",components:{CreateDialog:p.Z,DeleteDialog:m.Z,UpdateDialog:v.Z},props:{obj:Object},setup(e){const{categoryOption:t,masterNewItem:a,masterName:s,masterApi:l,masterHeaders:i,secoundName:n,secoundApi:o,secoundHeaders:r}=e.obj;i.splice(1,0,{text:"No",value:"no",align:"center"}),r.splice(1,0,{text:"No",value:"no",align:"center"});const c=(0,u.iH)(null),m=(0,u.iH)([]),p=(0,u.iH)([]),v=(0,u.iH)(""),y=(0,u.iH)(""),b={},h=(0,u.iH)(i[0].value),f=(0,u.iH)(i[0].value),g=(0,u.iH)(r[0].value);i.map((e=>{!0===e.useUpdateItem&&(b[e.value]=e),!0===e.useParentKey&&(h.value=e.value)}));const x=e=>{const[t,a]=o;(0,d.getRequest)([t,a+"s"],{parent_key:e},(e=>{p.value=e||[]}))},T=(0,u.iH)(""),C=(0,u.iH)(null),_=e=>{T.value=e,k()},k=()=>{const[e,t]=l;""===T.value?(0,d.getRequest)([e,t+"s"],null,(e=>{m.value=e||[]})):(0,d.getRequest)([e,t+"s"],{filterKey:T.value},(e=>{m.value=e||[]}))};if(t){const[e,a]=t.api;(0,d.getRequest)([e,a],null,(e=>{T.value=e[0][t.valueKey],C.value=e,k()}))}else k();const H=(e,t)=>{c.value=e,x(e[h.value]),t.select(!0)},I=(0,u.iH)(null),Z=(0,u.iH)(null),S=(0,u.iH)(null),w=(e,t,a,s,l,i)=>{const n={};if("secound"===e)for(const o in b)b[o].asKey?n[b[o].asKey]=c.value[o]:n[o]=c.value[o];n[a]=null,n.saveType="new",I.value={title:t,api:s,list:l,fields:i,parentItem:n}},K=(e,t,a,s,l,i,n)=>{const o={};if("secound"===e)for(const r in b)b[r].asKey?o[b[r].asKey]=c.value[r]:o[r]=c.value[r];o[a]=n[a],o.saveType="update",Z.value={title:t,api:s,list:l,fields:i,item:n,parentItem:o}},D=(e,t,a)=>{S.value={list:t,item:a,api:e}};return{refItem:c,masterTableKey:f,secoundTableKey:g,categoryChange:_,categoryOption:t,category:T,categories:C,masterNewItem:a,masterName:s,masterApi:l,masterHeaders:i,masterTableList:m,secoundName:n,secoundApi:o,secoundHeaders:r,secoundTableList:p,masterTableSearch:v,secoundTableSearch:y,selectTableItem:H,createItem:w,updateItem:K,deleteItem:D,createPayload:I,updatePayload:Z,deletePayload:S}}},b=y,h=a(1001),f=(0,h.Z)(b,r,c,!1,null,null,null),g=f.exports},5699:function(e,t,a){var s=a(5039),l=a(4324),i=a(3424),n=a(7808),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"component"},[t("div",{staticClass:"box"},[t("div",{staticClass:"col",staticStyle:{"max-width":"50%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v("내부태그")]),t("div",{staticClass:"spacer"}),t(i.Z,{attrs:{items:e.ships,"item-text":e=>e.shipname,"menu-props":"auto",label:"선박","hide-details":"","prepend-icon":"mdi-ferry","single-line":""},model:{value:e.ship,callback:function(t){e.ship=t},expression:"ship"}})],1),t("div",{staticClass:"box"},[t(s.Z,{attrs:{"fixed-header":"",headers:e.refTableHeaders,items:e.refTableList,"items-per-page":-1,"item-key":e.refTableHeaders[0].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(l.Z,{attrs:{small:""},on:{click:function(t){return e.copyItem(a)}}},[e._v(" mdi-arrow-right-bold ")])]}}],null,!0)})],1)]),t("div",{staticClass:"col",staticStyle:{"max-width":"50%"}},[t("div",{staticClass:"box rowBox"},[t("div",{staticClass:"hyTitle"},[e._v("외부태그")]),t("div",{staticClass:"spacer"}),t(n.Z,{attrs:{"append-icon":"mdi-magnify",label:"검색","single-line":"","hide-details":""},model:{value:e.refTableSearch,callback:function(t){e.refTableSearch=t},expression:"refTableSearch"}})],1),t("div",{staticClass:"box"},[t(s.Z,{attrs:{"fixed-header":"",headers:e.bowlTableHeaders,items:e.bowlTableList,"items-per-page":-1,"item-key":e.bowlTableHeaders[0].value},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(l.Z,{attrs:{small:""},on:{click:function(t){return e.deleteBowlTableItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)])])])},r=[],c=(a(7658),a(144)),u={name:"TransferComponent",components:{},setup(){const e=(0,c.iH)([{shipid:"1",shipname:"아리온제주1"},{shipid:"2",shipname:"아리온제주2"},{shipid:"3",shipname:"아리온제주3"},{shipid:"4",shipname:"아리온제주4"},{shipid:"5",shipname:"아리온제주5"},{shipid:"5",shipname:"아리온제주6"},{shipid:"5",shipname:"아리온제주7"},{shipid:"5",shipname:"아리온제주8"},{shipid:"5",shipname:"아리온제주9"}]),t=(0,c.iH)(null),a=(0,c.iH)(""),s=(0,c.iH)([]),l=[{text:"NO",align:"center",value:"no"},{text:"선박",align:"center",value:"shipname"},{text:"장비ID",align:"center",value:"equipid"},{text:"태그",align:"center",value:"tagname"},{text:"Description",align:"center",value:"tagdesc"},{text:"Actions",value:"actions",sortable:!1}],i=(0,c.iH)([]),n=(0,c.iH)([{text:"Actions",value:"actions",sortable:!1},{text:"NO",align:"center",value:"no"},{text:"선박",align:"center",value:"shipname"},{text:"장비ID",align:"center",value:"equipid"},{text:"태그",align:"center",value:"tagname"},{text:"Description",align:"center",value:"tagdesc"}]),o=(0,c.iH)(!1),r=(0,c.iH)(!1),u=(0,c.iH)(-1),d=(0,c.iH)({shipname:"",equipid:"",tagname:"",tagdesc:""}),m=(0,c.iH)({shipname:"",equipid:"",tagname:"",tagdesc:""}),p=e=>{const t=Object.assign({},e);i.value.push(t)},v=e=>{u.value=i.value.indexOf(e),d.value=Object.assign({},e),o.value=!0},y=e=>{i.value.splice(i.value.indexOf(e),1)},b=()=>{o.value=!1,(0,c.Y3)((()=>{d.value=Object.assign({},m.value),u.value=-1}))},h=()=>{r.value=!1,(0,c.Y3)((()=>{d.value=Object.assign({},m.value),u.value=-1}))},f=()=>{u.value>-1?Object.assign(i.value[u.value],d.value):i.value.push(d.value),b()};(0,c.YP)(o,(e=>{e||b()})),(0,c.YP)(r,(e=>{e||h()}));const g=(0,c.Fl)((()=>-1===u.value?"New Item":"Edit Item"));return{formTitle:g,dialog:o,dialogDelete:r,bowlTableHeaders:n,bowlTableList:i,editedIndex:u,editedItem:d,defaultItem:m,copyItem:p,editItem:v,deleteBowlTableItem:y,close:b,closeDelete:h,save:f,refTableSearch:a,ships:e,ship:t,refTableHeaders:l,refTableList:s}}},d=u,m=a(1001),p=(0,m.Z)(d,o,r,!1,null,null,null);p.exports}}]);
//# sourceMappingURL=462.0d135e27.js.map