(self["webpackChunkins"]=self["webpackChunkins"]||[]).push([[177],{1669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var s=n(626),i=n(762),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"containerFrame"},[t("div",{staticClass:"tabBox"},[t(i.Z,{model:{value:e.tabIdx,callback:function(t){e.tabIdx=t},expression:"tabIdx"}},e._l(e.tabs,(function(n){return t(s.Z,{key:n},[e._v(" "+e._s(n)+" ")])})),1)],1),e._l(e.tabs,(function(n,s){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.tabIdx===s?n:"",expression:"tabIdx === idx ? item : ''"}],key:s,staticClass:"fix"},["Dashboard"===n?t("div",{staticClass:"component"},[!1===e.connect?t("div",{staticClass:"dashboardConnecting"},[e._v(" 대시보드에 접속중입니다. ")]):e._e(),t("div",{staticClass:"mqttCardBox"},e._l(e.mqttList,(function(n,s){return t("dl",{key:s,staticClass:"card"},[t("dt",[e._v(e._s(n.name))]),t("dd",[t("ul",e._l(n.list,(function(n,s){return t("li",{key:s},[t("span",[e._v(e._s(s))]),t("span",[e._v(e._s(n))])])})),0)])])})),0)]):e._e()])}))],2)},r=[],c=(n(7658),n(144)),a=n(8295),h=n(1159),u={name:"HomeView",components:{},setup(){const e=(0,h.Oh)(),t=(0,c.iH)(0),n=(0,c.iH)(["Dashboard"]),s=(0,c.iH)([]),i=(0,c.iH)(!1);let o={};o.MQTT=a;const r="breez-web-demo-"+Math.floor(8999*Math.random()+1e3),u=new o.MQTT.Client("ec2-13-125-216-141.ap-northeast-2.compute.amazonaws.com",1884,r);function d(){u.subscribe("tv_local")}function l(e){0!=e.errorCode&&console.log("onConnectionLost:"+e.errorMessage)}e.setClient(u),u.onConnectionLost=l,u.onMessageArrived=_,u.connect({onSuccess:d,onFailure(e){console.log("fail",e)}});let f=!1;function _(e){const t=JSON.parse(e.payloadString),n=[];n.push({name:"Longitude",list:{longitudeDegrees:t.longitudeDegrees,longitudeMinutes:t.longitudeMinutes,longitudeSeconds:t.longitudeSeconds}}),n.push({name:"Latitude",list:{LatitudeDegrees:t.LatitudeDegrees,LatitudeMinutes:t.LatitudeMinutes,LatitudeSeconds:t.LatitudeSeconds}}),n.push({name:"Speed",list:{SourceTime:t.SourceTime,SpeedLonWaterSpd:t.SpeedLonWaterSpd,SpeedSogKnots:t.SpeedSogKnots}}),s.value=n,!1===f&&(i.value=!0),f=!0}return{connect:i,tabs:n,tabIdx:t,mqttList:s}}},d=u,l=n(1001),f=(0,l.Z)(d,o,r,!1,null,null,null),_=f.exports},8295:function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){var e=function(e){var t="@VERSION@-@BUILDLEVEL@",n=e.localStorage||function(){var e={};return{setItem:function(t,n){e[t]=n},getItem:function(t){return e[t]},removeItem:function(t){delete e[t]}}}(),s={CONNECT:1,CONNACK:2,PUBLISH:3,PUBACK:4,PUBREC:5,PUBREL:6,PUBCOMP:7,SUBSCRIBE:8,SUBACK:9,UNSUBSCRIBE:10,UNSUBACK:11,PINGREQ:12,PINGRESP:13,DISCONNECT:14},i=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if(!t.hasOwnProperty(n)){var s="Unknown property, "+n+". Valid properties are:";for(var i in t)t.hasOwnProperty(i)&&(s=s+" "+i);throw new Error(s)}if(typeof e[n]!==t[n])throw new Error(a(r.INVALID_TYPE,[typeof e[n],n]))}},o=function(e,t){return function(){return e.apply(t,arguments)}},r={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},c={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},a=function(e,t){var n=e.text;if(t)for(var s,i,o=0;o<t.length;o++)if(s="{"+o+"}",i=n.indexOf(s),i>0){var r=n.substring(0,i),c=n.substring(i+s.length);n=r+t[o]+c}return n},h=[0,6,77,81,73,115,100,112,3],u=[0,4,77,81,84,84,4],d=function(e,t){for(var n in this.type=e,t)t.hasOwnProperty(n)&&(this[n]=t[n])};function l(e,t){var n,i=t,o=e[t],r=o>>4,c=o&=15;t+=1;var a=0,h=1;do{if(t==e.length)return[null,i];n=e[t++],a+=(127&n)*h,h*=128}while(0!==(128&n));var u=t+a;if(u>e.length)return[null,i];var l=new d(r);switch(r){case s.CONNACK:var f=e[t++];1&f&&(l.sessionPresent=!0),l.returnCode=e[t++];break;case s.PUBLISH:var _=c>>1&3,g=p(e,t);t+=2;var I=m(e,t,g);t+=g,_>0&&(l.messageIdentifier=p(e,t),t+=2);var v=new S(e.subarray(t,u));1==(1&c)&&(v.retained=!0),8==(8&c)&&(v.duplicate=!0),v.qos=_,v.destinationName=I,l.payloadMessage=v;break;case s.PUBACK:case s.PUBREC:case s.PUBREL:case s.PUBCOMP:case s.UNSUBACK:l.messageIdentifier=p(e,t);break;case s.SUBACK:l.messageIdentifier=p(e,t),t+=2,l.returnCode=e.subarray(t,u);break;default:break}return[l,u]}function f(e,t,n){return t[n++]=e>>8,t[n++]=e%256,n}function _(e,t,n,s){return s=f(t,n,s),v(e,n,s),s+t}function p(e,t){return 256*e[t]+e[t+1]}function g(e){var t=new Array(1),n=0;do{var s=e%128;e>>=7,e>0&&(s|=128),t[n++]=s}while(e>0&&n<4);return t}function I(e){for(var t=0,n=0;n<e.length;n++){var s=e.charCodeAt(n);s>2047?(55296<=s&&s<=56319&&(n++,t++),t+=3):s>127?t+=2:t++}return t}function v(e,t,n){for(var s=n,i=0;i<e.length;i++){var o=e.charCodeAt(i);if(55296<=o&&o<=56319){var c=e.charCodeAt(++i);if(isNaN(c))throw new Error(a(r.MALFORMED_UNICODE,[o,c]));o=c-56320+(o-55296<<10)+65536}o<=127?t[s++]=o:o<=2047?(t[s++]=o>>6&31|192,t[s++]=63&o|128):o<=65535?(t[s++]=o>>12&15|224,t[s++]=o>>6&63|128,t[s++]=63&o|128):(t[s++]=o>>18&7|240,t[s++]=o>>12&63|128,t[s++]=o>>6&63|128,t[s++]=63&o|128)}return t}function m(e,t,n){var s,i="",o=t;while(o<t+n){var c=e[o++];if(c<128)s=c;else{var h=e[o++]-128;if(h<0)throw new Error(a(r.MALFORMED_UTF,[c.toString(16),h.toString(16),""]));if(c<224)s=64*(c-192)+h;else{var u=e[o++]-128;if(u<0)throw new Error(a(r.MALFORMED_UTF,[c.toString(16),h.toString(16),u.toString(16)]));if(c<240)s=4096*(c-224)+64*h+u;else{var d=e[o++]-128;if(d<0)throw new Error(a(r.MALFORMED_UTF,[c.toString(16),h.toString(16),u.toString(16),d.toString(16)]));if(!(c<248))throw new Error(a(r.MALFORMED_UTF,[c.toString(16),h.toString(16),u.toString(16),d.toString(16)]));s=262144*(c-240)+4096*h+64*u+d}}}s>65535&&(s-=65536,i+=String.fromCharCode(55296+(s>>10)),s=56320+(1023&s)),i+=String.fromCharCode(s)}return i}d.prototype.encode=function(){var e,t=(15&this.type)<<4,n=0,i=[],o=0;switch(void 0!==this.messageIdentifier&&(n+=2),this.type){case s.CONNECT:switch(this.mqttVersion){case 3:n+=h.length+3;break;case 4:n+=u.length+3;break}n+=I(this.clientId)+2,void 0!==this.willMessage&&(n+=I(this.willMessage.destinationName)+2,e=this.willMessage.payloadBytes,e instanceof Uint8Array||(e=new Uint8Array(c)),n+=e.byteLength+2),void 0!==this.userName&&(n+=I(this.userName)+2),void 0!==this.password&&(n+=I(this.password)+2);break;case s.SUBSCRIBE:t|=2;for(var r=0;r<this.topics.length;r++)i[r]=I(this.topics[r]),n+=i[r]+2;n+=this.requestedQos.length;break;case s.UNSUBSCRIBE:t|=2;for(r=0;r<this.topics.length;r++)i[r]=I(this.topics[r]),n+=i[r]+2;break;case s.PUBREL:t|=2;break;case s.PUBLISH:this.payloadMessage.duplicate&&(t|=8),t=t|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(t|=1),o=I(this.payloadMessage.destinationName),n+=o+2;var c=this.payloadMessage.payloadBytes;n+=c.byteLength,c instanceof ArrayBuffer?c=new Uint8Array(c):c instanceof Uint8Array||(c=new Uint8Array(c.buffer));break;case s.DISCONNECT:break;default:break}var a=g(n),d=a.length+1,l=new ArrayBuffer(n+d),p=new Uint8Array(l);if(p[0]=t,p.set(a,1),this.type==s.PUBLISH)d=_(this.payloadMessage.destinationName,o,p,d);else if(this.type==s.CONNECT){switch(this.mqttVersion){case 3:p.set(h,d),d+=h.length;break;case 4:p.set(u,d),d+=u.length;break}var v=0;this.cleanSession&&(v=2),void 0!==this.willMessage&&(v|=4,v|=this.willMessage.qos<<3,this.willMessage.retained&&(v|=32)),void 0!==this.userName&&(v|=128),void 0!==this.password&&(v|=64),p[d++]=v,d=f(this.keepAliveInterval,p,d)}switch(void 0!==this.messageIdentifier&&(d=f(this.messageIdentifier,p,d)),this.type){case s.CONNECT:d=_(this.clientId,I(this.clientId),p,d),void 0!==this.willMessage&&(d=_(this.willMessage.destinationName,I(this.willMessage.destinationName),p,d),d=f(e.byteLength,p,d),p.set(e,d),d+=e.byteLength),void 0!==this.userName&&(d=_(this.userName,I(this.userName),p,d)),void 0!==this.password&&(d=_(this.password,I(this.password),p,d));break;case s.PUBLISH:p.set(c,d);break;case s.SUBSCRIBE:for(r=0;r<this.topics.length;r++)d=_(this.topics[r],i[r],p,d),p[d++]=this.requestedQos[r];break;case s.UNSUBSCRIBE:for(r=0;r<this.topics.length;r++)d=_(this.topics[r],i[r],p,d);break;default:}return l};var E=function(e,t){this._client=e,this._keepAliveInterval=1e3*t,this.isReset=!1;var n=new d(s.PINGREQ).encode(),i=function(e){return function(){return o.apply(e)}},o=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(n),this.timeout=setTimeout(i(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(r.PING_TIMEOUT.code,a(r.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(i(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},y=function(e,t,n,s){t||(t=30);var i=function(e,t,n){return function(){return e.apply(t,n)}};this.timeout=setTimeout(i(n,e,s),1e3*t),this.cancel=function(){clearTimeout(this.timeout)}},w=function(t,s,i,o,c){if(!("WebSocket"in e)||null===e.WebSocket)throw new Error(a(r.UNSUPPORTED,["WebSocket"]));if(!("ArrayBuffer"in e)||null===e.ArrayBuffer)throw new Error(a(r.UNSUPPORTED,["ArrayBuffer"]));for(var h in this._trace("Paho.Client",t,s,i,o,c),this.host=s,this.port=i,this.path=o,this.uri=t,this.clientId=c,this._wsuri=null,this._localKey=s+":"+i+("/mqtt"!=o?":"+o:"")+":"+c+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0,n)0!==h.indexOf("Sent:"+this._localKey)&&0!==h.indexOf("Received:"+this._localKey)||this.restore(h)};w.prototype.host=null,w.prototype.port=null,w.prototype.path=null,w.prototype.uri=null,w.prototype.clientId=null,w.prototype.socket=null,w.prototype.connected=!1,w.prototype.maxMessageIdentifier=65536,w.prototype.connectOptions=null,w.prototype.hostIndex=null,w.prototype.onConnected=null,w.prototype.onConnectionLost=null,w.prototype.onMessageDelivered=null,w.prototype.onMessageArrived=null,w.prototype.traceFunction=null,w.prototype._msg_queue=null,w.prototype._buffered_msg_queue=null,w.prototype._connectTimeout=null,w.prototype.sendPinger=null,w.prototype.receivePinger=null,w.prototype._reconnectInterval=1,w.prototype._reconnecting=!1,w.prototype._reconnectTimeout=null,w.prototype.disconnectedPublishing=!1,w.prototype.disconnectedBufferSize=5e3,w.prototype.receiveBuffer=null,w.prototype._traceBuffer=null,w.prototype._MAX_TRACE_ENTRIES=100,w.prototype.connect=function(e){var t=this._traceMask(e,"password");if(this._trace("Client.connect",t,this.socket,this.connected),this.connected)throw new Error(a(r.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(a(r.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=e,this._reconnectInterval=1,this._reconnecting=!1,e.uris?(this.hostIndex=0,this._doConnect(e.uris[0])):this._doConnect(this.uri)},w.prototype.subscribe=function(e,t){if(this._trace("Client.subscribe",e,t),!this.connected)throw new Error(a(r.INVALID_STATE,["not connected"]));var n=new d(s.SUBSCRIBE);n.topics=e.constructor===Array?e:[e],void 0===t.qos&&(t.qos=0),n.requestedQos=[];for(var i=0;i<n.topics.length;i++)n.requestedQos[i]=t.qos;t.onSuccess&&(n.onSuccess=function(e){t.onSuccess({invocationContext:t.invocationContext,grantedQos:e})}),t.onFailure&&(n.onFailure=function(e){t.onFailure({invocationContext:t.invocationContext,errorCode:e,errorMessage:a(e)})}),t.timeout&&(n.timeOut=new y(this,t.timeout,t.onFailure,[{invocationContext:t.invocationContext,errorCode:r.SUBSCRIBE_TIMEOUT.code,errorMessage:a(r.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(n),this._schedule_message(n)},w.prototype.unsubscribe=function(e,t){if(this._trace("Client.unsubscribe",e,t),!this.connected)throw new Error(a(r.INVALID_STATE,["not connected"]));var n=new d(s.UNSUBSCRIBE);n.topics=e.constructor===Array?e:[e],t.onSuccess&&(n.callback=function(){t.onSuccess({invocationContext:t.invocationContext})}),t.timeout&&(n.timeOut=new y(this,t.timeout,t.onFailure,[{invocationContext:t.invocationContext,errorCode:r.UNSUBSCRIBE_TIMEOUT.code,errorMessage:a(r.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(n),this._schedule_message(n)},w.prototype.send=function(e){this._trace("Client.send",e);var t=new d(s.PUBLISH);if(t.payloadMessage=e,this.connected)e.qos>0?this._requires_ack(t):this.onMessageDelivered&&(this._notify_msg_sent[t]=this.onMessageDelivered(t.payloadMessage)),this._schedule_message(t);else{if(!this._reconnecting||!this.disconnectedPublishing)throw new Error(a(r.INVALID_STATE,["not connected"]));var n=Object.keys(this._sentMessages).length+this._buffered_msg_queue.length;if(n>this.disconnectedBufferSize)throw new Error(a(r.BUFFER_FULL,[this.disconnectedBufferSize]));e.qos>0?this._requires_ack(t):(t.sequence=++this._sequence,this._buffered_msg_queue.unshift(t))}},w.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(a(r.INVALID_STATE,["not connecting or connected"]));var e=new d(s.DISCONNECT);this._notify_msg_sent[e]=o(this._disconnected,this),this._schedule_message(e)},w.prototype.getTraceLog=function(){if(null!==this._traceBuffer){for(var e in this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length),this._sentMessages)this._trace("_sentMessages ",e,this._sentMessages[e]);for(var e in this._receivedMessages)this._trace("_receivedMessages ",e,this._receivedMessages[e]);return this._traceBuffer}},w.prototype.startTrace=function(){null===this._traceBuffer&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,t)},w.prototype.stopTrace=function(){delete this._traceBuffer},w.prototype._doConnect=function(e){if(this.connectOptions.useSSL){var t=e.split(":");t[0]="wss",e=t.join(":")}this._wsuri=e,this.connected=!1,this.connectOptions.mqttVersion<4?this.socket=new WebSocket(e,["mqttv3.1"]):this.socket=new WebSocket(e,["mqtt"]),this.socket.binaryType="arraybuffer",this.socket.onopen=o(this._on_socket_open,this),this.socket.onmessage=o(this._on_socket_message,this),this.socket.onerror=o(this._on_socket_error,this),this.socket.onclose=o(this._on_socket_close,this),this.sendPinger=new E(this,this.connectOptions.keepAliveInterval),this.receivePinger=new E(this,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new y(this,this.connectOptions.timeout,this._disconnected,[r.CONNECT_TIMEOUT.code,a(r.CONNECT_TIMEOUT)])},w.prototype._schedule_message=function(e){this._msg_queue.unshift(e),this.connected&&this._process_queue()},w.prototype.store=function(e,t){var i={type:t.type,messageIdentifier:t.messageIdentifier,version:1};switch(t.type){case s.PUBLISH:t.pubRecReceived&&(i.pubRecReceived=!0),i.payloadMessage={};for(var o="",c=t.payloadMessage.payloadBytes,h=0;h<c.length;h++)c[h]<=15?o=o+"0"+c[h].toString(16):o+=c[h].toString(16);i.payloadMessage.payloadHex=o,i.payloadMessage.qos=t.payloadMessage.qos,i.payloadMessage.destinationName=t.payloadMessage.destinationName,t.payloadMessage.duplicate&&(i.payloadMessage.duplicate=!0),t.payloadMessage.retained&&(i.payloadMessage.retained=!0),0===e.indexOf("Sent:")&&(void 0===t.sequence&&(t.sequence=++this._sequence),i.sequence=t.sequence);break;default:throw Error(a(r.INVALID_STORED_DATA,[e+this._localKey+t.messageIdentifier,i]))}n.setItem(e+this._localKey+t.messageIdentifier,JSON.stringify(i))},w.prototype.restore=function(e){var t=n.getItem(e),i=JSON.parse(t),o=new d(i.type,i);switch(i.type){case s.PUBLISH:var c=i.payloadMessage.payloadHex,h=new ArrayBuffer(c.length/2),u=new Uint8Array(h),l=0;while(c.length>=2){var f=parseInt(c.substring(0,2),16);c=c.substring(2,c.length),u[l++]=f}var _=new S(u);_.qos=i.payloadMessage.qos,_.destinationName=i.payloadMessage.destinationName,i.payloadMessage.duplicate&&(_.duplicate=!0),i.payloadMessage.retained&&(_.retained=!0),o.payloadMessage=_;break;default:throw Error(a(r.INVALID_STORED_DATA,[e,t]))}0===e.indexOf("Sent:"+this._localKey)?(o.payloadMessage.duplicate=!0,this._sentMessages[o.messageIdentifier]=o):0===e.indexOf("Received:"+this._localKey)&&(this._receivedMessages[o.messageIdentifier]=o)},w.prototype._process_queue=function(){var e=null;while(e=this._msg_queue.pop())this._socket_send(e),this._notify_msg_sent[e]&&(this._notify_msg_sent[e](),delete this._notify_msg_sent[e])},w.prototype._requires_ack=function(e){var t=Object.keys(this._sentMessages).length;if(t>this.maxMessageIdentifier)throw Error("Too many messages:"+t);while(void 0!==this._sentMessages[this._message_identifier])this._message_identifier++;e.messageIdentifier=this._message_identifier,this._sentMessages[e.messageIdentifier]=e,e.type===s.PUBLISH&&this.store("Sent:",e),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},w.prototype._on_socket_open=function(){var e=new d(s.CONNECT,this.connectOptions);e.clientId=this.clientId,this._socket_send(e)},w.prototype._on_socket_message=function(e){this._trace("Client._on_socket_message",e.data);for(var t=this._deframeMessages(e.data),n=0;n<t.length;n+=1)this._handleMessage(t[n])},w.prototype._deframeMessages=function(e){var t=new Uint8Array(e),n=[];if(this.receiveBuffer){var s=new Uint8Array(this.receiveBuffer.length+t.length);s.set(this.receiveBuffer),s.set(t,this.receiveBuffer.length),t=s,delete this.receiveBuffer}try{var i=0;while(i<t.length){var o=l(t,i),c=o[0];if(i=o[1],null===c)break;n.push(c)}i<t.length&&(this.receiveBuffer=t.subarray(i))}catch(u){var h="undefined"==u.hasOwnProperty("stack")?u.stack.toString():"No Error Stack Available";return void this._disconnected(r.INTERNAL_ERROR.code,a(r.INTERNAL_ERROR,[u.message,h]))}return n},w.prototype._handleMessage=function(e){this._trace("Client._handleMessage",e);try{switch(e.type){case s.CONNACK:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var t in this._sentMessages){var i=this._sentMessages[t];n.removeItem("Sent:"+this._localKey+i.messageIdentifier)}for(var t in this._sentMessages={},this._receivedMessages){var o=this._receivedMessages[t];n.removeItem("Received:"+this._localKey+o.messageIdentifier)}this._receivedMessages={}}if(0!==e.returnCode){this._disconnected(r.CONNACK_RETURNCODE.code,a(r.CONNACK_RETURNCODE,[e.returnCode,c[e.returnCode]]));break}this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);var h=[];for(var u in this._sentMessages)this._sentMessages.hasOwnProperty(u)&&h.push(this._sentMessages[u]);if(this._buffered_msg_queue.length>0){var l=null;while(l=this._buffered_msg_queue.pop())h.push(l),this.onMessageDelivered&&(this._notify_msg_sent[l]=this.onMessageDelivered(l.payloadMessage))}h=h.sort((function(e,t){return e.sequence-t.sequence}));for(var f=0,_=h.length;f<_;f++){i=h[f];if(i.type==s.PUBLISH&&i.pubRecReceived){var p=new d(s.PUBREL,{messageIdentifier:i.messageIdentifier});this._schedule_message(p)}else this._schedule_message(i)}this.connectOptions.onSuccess&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var g=!1;this._reconnecting&&(g=!0,this._reconnectInterval=1,this._reconnecting=!1),this._connected(g,this._wsuri),this._process_queue();break;case s.PUBLISH:this._receivePublish(e);break;case s.PUBACK:i=this._sentMessages[e.messageIdentifier];i&&(delete this._sentMessages[e.messageIdentifier],n.removeItem("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(i.payloadMessage));break;case s.PUBREC:i=this._sentMessages[e.messageIdentifier];if(i){i.pubRecReceived=!0;p=new d(s.PUBREL,{messageIdentifier:e.messageIdentifier});this.store("Sent:",i),this._schedule_message(p)}break;case s.PUBREL:o=this._receivedMessages[e.messageIdentifier];n.removeItem("Received:"+this._localKey+e.messageIdentifier),o&&(this._receiveMessage(o),delete this._receivedMessages[e.messageIdentifier]);var I=new d(s.PUBCOMP,{messageIdentifier:e.messageIdentifier});this._schedule_message(I);break;case s.PUBCOMP:i=this._sentMessages[e.messageIdentifier];delete this._sentMessages[e.messageIdentifier],n.removeItem("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(i.payloadMessage);break;case s.SUBACK:i=this._sentMessages[e.messageIdentifier];i&&(i.timeOut&&i.timeOut.cancel(),128===e.returnCode[0]?i.onFailure&&i.onFailure(e.returnCode):i.onSuccess&&i.onSuccess(e.returnCode),delete this._sentMessages[e.messageIdentifier]);break;case s.UNSUBACK:i=this._sentMessages[e.messageIdentifier];i&&(i.timeOut&&i.timeOut.cancel(),i.callback&&i.callback(),delete this._sentMessages[e.messageIdentifier]);break;case s.PINGRESP:this.sendPinger.reset();break;case s.DISCONNECT:this._disconnected(r.INVALID_MQTT_MESSAGE_TYPE.code,a(r.INVALID_MQTT_MESSAGE_TYPE,[e.type]));break;default:this._disconnected(r.INVALID_MQTT_MESSAGE_TYPE.code,a(r.INVALID_MQTT_MESSAGE_TYPE,[e.type]))}}catch(m){var v="undefined"==m.hasOwnProperty("stack")?m.stack.toString():"No Error Stack Available";return void this._disconnected(r.INTERNAL_ERROR.code,a(r.INTERNAL_ERROR,[m.message,v]))}},w.prototype._on_socket_error=function(e){this._reconnecting||this._disconnected(r.SOCKET_ERROR.code,a(r.SOCKET_ERROR,[e.data]))},w.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(r.SOCKET_CLOSE.code,a(r.SOCKET_CLOSE))},w.prototype._socket_send=function(e){if(1==e.type){var t=this._traceMask(e,"password");this._trace("Client._socket_send",t)}else this._trace("Client._socket_send",e);this.socket.send(e.encode()),this.sendPinger.reset()},w.prototype._receivePublish=function(e){switch(e.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(e);break;case 1:var t=new d(s.PUBACK,{messageIdentifier:e.messageIdentifier});this._schedule_message(t),this._receiveMessage(e);break;case 2:this._receivedMessages[e.messageIdentifier]=e,this.store("Received:",e);var n=new d(s.PUBREC,{messageIdentifier:e.messageIdentifier});this._schedule_message(n);break;default:throw Error("Invaild qos="+e.payloadMessage.qos)}},w.prototype._receiveMessage=function(e){this.onMessageArrived&&this.onMessageArrived(e.payloadMessage)},w.prototype._connected=function(e,t){this.onConnected&&this.onConnected(e,t)},w.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<128&&(this._reconnectInterval=2*this._reconnectInterval),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},w.prototype._disconnected=function(e,t){if(this._trace("Client._disconnected",e,t),void 0!==e&&this._reconnecting)this._reconnectTimeout=new y(this,this._reconnectInterval,this._reconnect);else if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,1===this.socket.readyState&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(void 0===e&&(e=r.OK.code,t=a(r.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:e,errorMessage:t,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),e!==r.OK.code&&this.connectOptions.reconnect)return this._reconnectInterval=1,void this._reconnect()}else 4===this.connectOptions.mqttVersion&&!1===this.connectOptions.mqttVersionExplicit?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:e,errorMessage:t})},w.prototype._trace=function(){if(this.traceFunction){var e=Array.prototype.slice.call(arguments);for(var t in e)"undefined"!==typeof e[t]&&e.splice(t,1,JSON.stringify(e[t]));var n=e.join("");this.traceFunction({severity:"Debug",message:n})}if(null!==this._traceBuffer){t=0;for(var s=arguments.length;t<s;t++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),0===t||"undefined"===typeof arguments[t]?this._traceBuffer.push(arguments[t]):this._traceBuffer.push("  "+JSON.stringify(arguments[t]))}},w.prototype._traceMask=function(e,t){var n={};for(var s in e)e.hasOwnProperty(s)&&(n[s]=s==t?"******":e[s]);return n};var M=function(e,t,n,s){var o;if("string"!==typeof e)throw new Error(a(r.INVALID_TYPE,[typeof e,"host"]));if(2==arguments.length){s=t,o=e;var c=o.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(!c)throw new Error(a(r.INVALID_ARGUMENT,[e,"host"]));e=c[4]||c[2],t=parseInt(c[7]),n=c[8]}else{if(3==arguments.length&&(s=n,n="/mqtt"),"number"!==typeof t||t<0)throw new Error(a(r.INVALID_TYPE,[typeof t,"port"]));if("string"!==typeof n)throw new Error(a(r.INVALID_TYPE,[typeof n,"path"]));var h=-1!==e.indexOf(":")&&"["!==e.slice(0,1)&&"]"!==e.slice(-1);o="ws://"+(h?"["+e+"]":e)+":"+t+n}for(var u=0,d=0;d<s.length;d++){var l=s.charCodeAt(d);55296<=l&&l<=56319&&d++,u++}if("string"!==typeof s||u>65535)throw new Error(a(r.INVALID_ARGUMENT,[s,"clientId"]));var f=new w(o,e,t,n,s);Object.defineProperties(this,{host:{get:function(){return e},set:function(){throw new Error(a(r.UNSUPPORTED_OPERATION))}},port:{get:function(){return t},set:function(){throw new Error(a(r.UNSUPPORTED_OPERATION))}},path:{get:function(){return n},set:function(){throw new Error(a(r.UNSUPPORTED_OPERATION))}},uri:{get:function(){return o},set:function(){throw new Error(a(r.UNSUPPORTED_OPERATION))}},clientId:{get:function(){return f.clientId},set:function(){throw new Error(a(r.UNSUPPORTED_OPERATION))}},onConnected:{get:function(){return f.onConnected},set:function(e){if("function"!==typeof e)throw new Error(a(r.INVALID_TYPE,[typeof e,"onConnected"]));f.onConnected=e}},disconnectedPublishing:{get:function(){return f.disconnectedPublishing},set:function(e){f.disconnectedPublishing=e}},disconnectedBufferSize:{get:function(){return f.disconnectedBufferSize},set:function(e){f.disconnectedBufferSize=e}},onConnectionLost:{get:function(){return f.onConnectionLost},set:function(e){if("function"!==typeof e)throw new Error(a(r.INVALID_TYPE,[typeof e,"onConnectionLost"]));f.onConnectionLost=e}},onMessageDelivered:{get:function(){return f.onMessageDelivered},set:function(e){if("function"!==typeof e)throw new Error(a(r.INVALID_TYPE,[typeof e,"onMessageDelivered"]));f.onMessageDelivered=e}},onMessageArrived:{get:function(){return f.onMessageArrived},set:function(e){if("function"!==typeof e)throw new Error(a(r.INVALID_TYPE,[typeof e,"onMessageArrived"]));f.onMessageArrived=e}},trace:{get:function(){return f.traceFunction},set:function(e){if("function"!==typeof e)throw new Error(a(r.INVALID_TYPE,[typeof e,"onTrace"]));f.traceFunction=e}}}),this.connect=function(e){if(e=e||{},i(e,{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),void 0===e.keepAliveInterval&&(e.keepAliveInterval=60),e.mqttVersion>4||e.mqttVersion<3)throw new Error(a(r.INVALID_ARGUMENT,[e.mqttVersion,"connectOptions.mqttVersion"]));if(void 0===e.mqttVersion?(e.mqttVersionExplicit=!1,e.mqttVersion=4):e.mqttVersionExplicit=!0,void 0!==e.password&&void 0===e.userName)throw new Error(a(r.INVALID_ARGUMENT,[e.password,"connectOptions.password"]));if(e.willMessage){if(!(e.willMessage instanceof S))throw new Error(a(r.INVALID_TYPE,[e.willMessage,"connectOptions.willMessage"]));if(e.willMessage.stringPayload=null,"undefined"===typeof e.willMessage.destinationName)throw new Error(a(r.INVALID_TYPE,[typeof e.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if("undefined"===typeof e.cleanSession&&(e.cleanSession=!0),e.hosts){if(!(e.hosts instanceof Array))throw new Error(a(r.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));if(e.hosts.length<1)throw new Error(a(r.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));for(var t=!1,s=0;s<e.hosts.length;s++){if("string"!==typeof e.hosts[s])throw new Error(a(r.INVALID_TYPE,[typeof e.hosts[s],"connectOptions.hosts["+s+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(e.hosts[s])){if(0===s)t=!0;else if(!t)throw new Error(a(r.INVALID_ARGUMENT,[e.hosts[s],"connectOptions.hosts["+s+"]"]))}else if(t)throw new Error(a(r.INVALID_ARGUMENT,[e.hosts[s],"connectOptions.hosts["+s+"]"]))}if(t)e.uris=e.hosts;else{if(!e.ports)throw new Error(a(r.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(!(e.ports instanceof Array))throw new Error(a(r.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(e.hosts.length!==e.ports.length)throw new Error(a(r.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));e.uris=[];for(s=0;s<e.hosts.length;s++){if("number"!==typeof e.ports[s]||e.ports[s]<0)throw new Error(a(r.INVALID_TYPE,[typeof e.ports[s],"connectOptions.ports["+s+"]"]));var c=e.hosts[s],h=e.ports[s],u=-1!==c.indexOf(":");o="ws://"+(u?"["+c+"]":c)+":"+h+n,e.uris.push(o)}}}f.connect(e)},this.subscribe=function(e,t){if("string"!==typeof e&&e.constructor!==Array)throw new Error("Invalid argument:"+e);if(t=t||{},i(t,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),t.timeout&&!t.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if("undefined"!==typeof t.qos&&0!==t.qos&&1!==t.qos&&2!==t.qos)throw new Error(a(r.INVALID_ARGUMENT,[t.qos,"subscribeOptions.qos"]));f.subscribe(e,t)},this.unsubscribe=function(e,t){if("string"!==typeof e&&e.constructor!==Array)throw new Error("Invalid argument:"+e);if(t=t||{},i(t,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),t.timeout&&!t.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");f.unsubscribe(e,t)},this.send=function(e,t,n,s){var i;if(0===arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof S)&&"string"!==typeof e)throw new Error("Invalid argument:"+typeof e);if(i=e,"undefined"===typeof i.destinationName)throw new Error(a(r.INVALID_ARGUMENT,[i.destinationName,"Message.destinationName"]));f.send(i)}else i=new S(t),i.destinationName=e,arguments.length>=3&&(i.qos=n),arguments.length>=4&&(i.retained=s),f.send(i)},this.publish=function(e,t,n,s){var i;if(0===arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof S)&&"string"!==typeof e)throw new Error("Invalid argument:"+typeof e);if(i=e,"undefined"===typeof i.destinationName)throw new Error(a(r.INVALID_ARGUMENT,[i.destinationName,"Message.destinationName"]));f.send(i)}else i=new S(t),i.destinationName=e,arguments.length>=3&&(i.qos=n),arguments.length>=4&&(i.retained=s),f.send(i)},this.disconnect=function(){f.disconnect()},this.getTraceLog=function(){return f.getTraceLog()},this.startTrace=function(){f.startTrace()},this.stopTrace=function(){f.stopTrace()},this.isConnected=function(){return f.connected}},S=function(e){var t,n;if(!("string"===typeof e||e instanceof ArrayBuffer||ArrayBuffer.isView(e)&&!(e instanceof DataView)))throw a(r.INVALID_ARGUMENT,[e,"newPayload"]);t=e;var s=0,i=!1,o=!1;Object.defineProperties(this,{payloadString:{enumerable:!0,get:function(){return"string"===typeof t?t:m(t,0,t.length)}},payloadBytes:{enumerable:!0,get:function(){if("string"===typeof t){var e=new ArrayBuffer(I(t)),n=new Uint8Array(e);return v(t,n,0),n}return t}},destinationName:{enumerable:!0,get:function(){return n},set:function(e){if("string"!==typeof e)throw new Error(a(r.INVALID_ARGUMENT,[e,"newDestinationName"]));n=e}},qos:{enumerable:!0,get:function(){return s},set:function(e){if(0!==e&&1!==e&&2!==e)throw new Error("Invalid argument:"+e);s=e}},retained:{enumerable:!0,get:function(){return i},set:function(e){if("boolean"!==typeof e)throw new Error(a(r.INVALID_ARGUMENT,[e,"newRetained"]));i=e}},topic:{enumerable:!0,get:function(){return n},set:function(e){n=e}},duplicate:{enumerable:!0,get:function(){return o},set:function(e){o=e}}})};return{Client:M,Message:S}}("undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});return e}))}}]);
//# sourceMappingURL=home.8f08d930.js.map