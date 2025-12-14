(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{5269:function(e,t,r){Promise.resolve().then(r.bind(r,3046))},3046:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(7437),s=r(2265);let i=s.forwardRef(function({title:e,titleId:t,...r},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"}))});var n=r(5255),o=r(2125),l=r(7227),c=r(1097),d=r(5925);function u(){let[e,t]=(0,s.useState)([]),[r,u]=(0,s.useState)(!0),[m,p]=(0,s.useState)(!1),[f,v]=(0,s.useState)(null),[h,g]=(0,s.useState)({title:"",description:"",date:"",importance:"medium",currency:"",country:"",actual_value:"",forecast_value:"",previous_value:""});(0,s.useEffect)(()=>{x()},[]);let x=async()=>{try{let e=(0,c.e)(),{data:r,error:a}=await e.from("economic_events").select("*").order("date",{ascending:!0});if(a)throw a;t(r||[])}catch(e){console.error("Error fetching events:",e),d.default.error("Failed to fetch events")}finally{u(!1)}},y=async e=>{e.preventDefault();try{let e=(0,c.e)();if(f){let{error:t}=await e.from("economic_events").update({title:h.title,description:h.description,date:h.date,importance:h.importance,currency:h.currency||null,country:h.country||null,actual_value:h.actual_value||null,forecast_value:h.forecast_value||null,previous_value:h.previous_value||null}).eq("id",f.id);if(t)throw t;d.default.success("Event updated successfully")}else{let{error:t}=await e.from("economic_events").insert({title:h.title,description:h.description,date:h.date,importance:h.importance,currency:h.currency||null,country:h.country||null,actual_value:h.actual_value||null,forecast_value:h.forecast_value||null,previous_value:h.previous_value||null});if(t)throw t;d.default.success("Event created successfully")}p(!1),v(null),w(),x()}catch(e){console.error("Error saving event:",e),d.default.error("Failed to save event")}},b=e=>{v(e),g({title:e.title,description:e.description,date:e.date.slice(0,16),importance:e.importance,currency:e.currency||"",country:e.country||"",actual_value:e.actual_value||"",forecast_value:e.forecast_value||"",previous_value:e.previous_value||""}),p(!0)},j=async e=>{if(confirm("Are you sure you want to delete this event?"))try{let t=(0,c.e)(),{error:r}=await t.from("economic_events").delete().eq("id",e);if(r)throw r;d.default.success("Event deleted successfully"),x()}catch(e){console.error("Error deleting event:",e),d.default.error("Failed to delete event")}},w=()=>{g({title:"",description:"",date:"",importance:"medium",currency:"",country:"",actual_value:"",forecast_value:"",previous_value:""})};return r?(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"animate-pulse",children:[(0,a.jsx)("div",{className:"h-8 bg-gray-200 rounded w-1/4 mb-4"}),(0,a.jsx)("div",{className:"space-y-4",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,a.jsx)("div",{className:"h-20 bg-gray-200 rounded"},t))})]})})}):(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 py-12",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"mb-8",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(i,{className:"h-8 w-8 text-primary-600 mr-3"}),(0,a.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Calendar Admin"})]}),(0,a.jsxs)("button",{onClick:()=>p(!0),className:"btn-primary flex items-center",children:[(0,a.jsx)(n.Z,{className:"h-5 w-5 mr-2"}),"Add Event"]})]})}),m&&(0,a.jsxs)("div",{className:"card p-6 mb-8",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold mb-4",children:f?"Edit Event":"Add New Event"}),(0,a.jsxs)("form",{onSubmit:y,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Title *"}),(0,a.jsx)("input",{type:"text",required:!0,value:h.title,onChange:e=>g({...h,title:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"Event title"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Date & Time *"}),(0,a.jsx)("input",{type:"datetime-local",required:!0,value:h.date,onChange:e=>g({...h,date:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Description *"}),(0,a.jsx)("textarea",{required:!0,rows:3,value:h.description,onChange:e=>g({...h,description:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"Event description"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Importance"}),(0,a.jsxs)("select",{value:h.importance,onChange:e=>g({...h,importance:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",children:[(0,a.jsx)("option",{value:"low",children:"Low"}),(0,a.jsx)("option",{value:"medium",children:"Medium"}),(0,a.jsx)("option",{value:"high",children:"High"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Currency"}),(0,a.jsx)("input",{type:"text",value:h.currency,onChange:e=>g({...h,currency:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"USD, EUR, etc."})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Country"}),(0,a.jsx)("input",{type:"text",value:h.country,onChange:e=>g({...h,country:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"United States, etc."})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Previous Value"}),(0,a.jsx)("input",{type:"text",value:h.previous_value,onChange:e=>g({...h,previous_value:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"175K"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Forecast Value"}),(0,a.jsx)("input",{type:"text",value:h.forecast_value,onChange:e=>g({...h,forecast_value:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"180K"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Actual Value"}),(0,a.jsx)("input",{type:"text",value:h.actual_value,onChange:e=>g({...h,actual_value:e.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"182K"})]})]}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("button",{type:"submit",className:"btn-primary",children:f?"Update Event":"Create Event"}),(0,a.jsx)("button",{type:"button",onClick:()=>{p(!1),v(null),w()},className:"btn-secondary",children:"Cancel"})]})]})]}),(0,a.jsx)("div",{className:"space-y-4",children:e.map(e=>(0,a.jsx)("div",{className:"card p-6",children:(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 mb-2",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:e.title}),(0,a.jsx)("span",{className:"badge ".concat("high"===e.importance?"bg-red-100 text-red-700":"medium"===e.importance?"bg-yellow-100 text-yellow-700":"bg-green-100 text-green-700"),children:e.importance.toUpperCase()}),e.currency&&(0,a.jsx)("span",{className:"text-sm text-gray-500",children:e.currency})]}),(0,a.jsx)("p",{className:"text-gray-700 mb-2",children:e.description}),(0,a.jsx)("div",{className:"text-sm text-gray-500 mb-2",children:new Date(e.date).toLocaleString()}),(e.forecast_value||e.previous_value||e.actual_value)&&(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-4 text-sm bg-gray-50 p-3 rounded-lg",children:[e.previous_value&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Previous:"}),(0,a.jsx)("span",{className:"ml-1 font-medium",children:e.previous_value})]}),e.forecast_value&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Forecast:"}),(0,a.jsx)("span",{className:"ml-1 font-medium",children:e.forecast_value})]}),e.actual_value&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Actual:"}),(0,a.jsx)("span",{className:"ml-1 font-medium text-green-600",children:e.actual_value})]})]})]}),(0,a.jsxs)("div",{className:"flex gap-2 ml-4",children:[(0,a.jsx)("button",{onClick:()=>b(e),className:"p-2 text-gray-500 hover:text-primary-600",children:(0,a.jsx)(o.Z,{className:"h-5 w-5"})}),(0,a.jsx)("button",{onClick:()=>j(e.id),className:"p-2 text-gray-500 hover:text-red-600",children:(0,a.jsx)(l.Z,{className:"h-5 w-5"})})]})]})},e.id))}),0===e.length&&(0,a.jsxs)("div",{className:"text-center py-12",children:[(0,a.jsx)(i,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No events found"}),(0,a.jsx)("p",{className:"text-gray-500",children:"Create your first calendar event to get started."})]})]})})}},1097:function(e,t,r){"use strict";r.d(t,{e:function(){return s}});var a=r(3082);let s=()=>(0,a.createClientComponentClient)()},2125:function(e,t,r){"use strict";var a=r(2265);let s=a.forwardRef(function({title:e,titleId:t,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"}))});t.Z=s},5255:function(e,t,r){"use strict";var a=r(2265);let s=a.forwardRef(function({title:e,titleId:t,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))});t.Z=s},7227:function(e,t,r){"use strict";var a=r(2265);let s=a.forwardRef(function({title:e,titleId:t,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))});t.Z=s},5925:function(e,t,r){"use strict";let a,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return J},ErrorIcon:function(){return B},LoaderIcon:function(){return K},ToastBar:function(){return el},ToastIcon:function(){return er},Toaster:function(){return em},default:function(){return ep},resolveValue:function(){return k},toast:function(){return z},useToaster:function(){return V},useToasterStore:function(){return M}});var i,n=r(2265);let o={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",s="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+n+";":a+="f"==i[1]?m(n,i):i+"{"+m(n,"k"==i[1]?"":t)+"}":"object"==typeof n?a+=m(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(i,n):i+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},v=(e,t,r,a,s)=>{var i;let n=f(e),o=p[n]||(p[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!p[o]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[o]=m(s?{["@keyframes "+o]:t}:t,r?"":"."+o)}let l=r&&p.g?p.g:null;return r&&(p.g=p[o]),i=p[o],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),o},h=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return v(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let x,y,b,j=g.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(i,n){let o=Object.assign({},i),l=o.className||s.className;r.p=Object.assign({theme:y&&y()},o),r.o=/ *go\d+/.test(l),o.className=g.apply(r,a)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),b&&c[0]&&b(o),x(c,o)}return t?t(s):s}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),_=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},C="default",L=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return L(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},Z={},D=(e,t=C)=>{Z[t]=L(Z[t]||O,e),A.forEach(([e,r])=>{e===t&&r(Z[t])})},$=e=>Object.keys(Z).forEach(t=>D(e,t)),H=e=>Object.keys(Z).find(t=>Z[t].toasts.some(t=>t.id===e)),I=(e=C)=>t=>{D(t,e)},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(e={},t=C)=>{let[r,a]=(0,n.useState)(Z[t]||O),s=(0,n.useRef)(Z[t]);(0,n.useEffect)(()=>(s.current!==Z[t]&&a(Z[t]),A.push([t,a]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}},T=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),P=e=>(t,r)=>{let a=T(t,e,r);return I(a.toasterId||H(a.id))({type:2,toast:a}),a.id},z=(e,t)=>P("blank")(e,t);z.error=P("error"),z.success=P("success"),z.loading=P("loading"),z.custom=P("custom"),z.dismiss=(e,t)=>{let r={type:3,toastId:e};t?I(t)(r):$(r)},z.dismissAll=e=>z.dismiss(void 0,e),z.remove=(e,t)=>{let r={type:4,toastId:e};t?I(t)(r):$(r)},z.removeAll=e=>z.remove(void 0,e),z.promise=(e,t,r)=>{let a=z.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?k(t.success,e):void 0;return s?z.success(s,{id:a,...r,...null==r?void 0:r.success}):z.dismiss(a),e}).catch(e=>{let s=t.error?k(t.error,e):void 0;s?z.error(s,{id:a,...r,...null==r?void 0:r.error}):z.dismiss(a)}),e};var F=1e3,V=(e,t="default")=>{let{toasts:r,pausedAt:a}=M(e,t),s=(0,n.useRef)(new Map).current,i=(0,n.useCallback)((e,t=F)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),o({type:4,toastId:e})},t);s.set(e,r)},[]);(0,n.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&z.dismiss(r.id);return}return setTimeout(()=>z.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let o=(0,n.useCallback)(I(t),[t]),l=(0,n.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),c=(0,n.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),d=(0,n.useCallback)(()=>{a&&o({type:6,time:Date.now()})},[a,o]),u=(0,n.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},n=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,n.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},R=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,K=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,Y=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,J=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=w("div")`
  position: absolute;
`,X=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(et,null,t):t:"blank"===r?null:n.createElement(X,null,n.createElement(K,{...a}),"loading"!==r&&n.createElement(Q,null,"error"===r?n.createElement(B,{...a}):n.createElement(J,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,en=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=n.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(er,{toast:e}),o=n.createElement(en,{...e.ariaProps},k(e.message,e));return n.createElement(ei,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:o}):n.createElement(n.Fragment,null,i,o))});i=n.createElement,m.p=void 0,x=i,y=void 0,b=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:i,className:t,style:r},s)},ed=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:d}=V(r,i);return n.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let i=r.position||t,o=ed(i,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?eu:"",style:o},"custom"===r.type?k(r.message,r):s?s(r):n.createElement(el,{toast:r,position:i}))}))},ep=z}},function(e){e.O(0,[653,82,971,938,744],function(){return e(e.s=5269)}),_N_E=e.O()}]);