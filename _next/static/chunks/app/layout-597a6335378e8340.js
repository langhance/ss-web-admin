(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5729:function(e,t,r){Promise.resolve().then(r.bind(r,83924))},83924:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var s=r(57437),a=r(64671),n=r.n(a);r(53054);var i=r(2265),o=r(44504),l=r(12218),c=r(74697),d=r(49354);let u=o.zt,f=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.l_,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...a})});f.displayName=o.l_.displayName;let m=(0,l.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),p=i.forwardRef((e,t)=>{let{className:r,variant:a,...n}=e;return(0,s.jsx)(o.fC,{ref:t,className:(0,d.cn)(m({variant:a}),r),...n})});p.displayName=o.fC.displayName,i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.aU,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...a})}).displayName=o.aU.displayName;let x=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.x8,{ref:t,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...a,children:(0,s.jsx)(c.Z,{className:"h-4 w-4"})})});x.displayName=o.x8.displayName;let g=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.Dx,{ref:t,className:(0,d.cn)("text-sm font-semibold",r),...a})});g.displayName=o.Dx.displayName;let h=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(o.dk,{ref:t,className:(0,d.cn)("text-sm opacity-90",r),...a})});h.displayName=o.dk.displayName;var v=r(78068);function b(){let{toasts:e}=(0,v.pm)();return(0,s.jsxs)(u,{children:[e.map(function(e){let{id:t,title:r,description:a,action:n,...i}=e;return(0,s.jsxs)(p,{...i,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[r&&(0,s.jsx)(g,{children:r}),a&&(0,s.jsx)(h,{children:a})]}),n,(0,s.jsx)(x,{})]},t)}),(0,s.jsx)(f,{})]})}var j=r(66648),N=r(87140),y=r(67904),w=r(92496),A=r(11240),T=r(24258);let k=[{title:"Dashboard",menuList:[{title:"Dashboard",path:"/",icon:(0,s.jsx)(N.Z,{strokeWidth:1.5})}]},{title:"Management",menuList:[{title:"Vocabs",path:"/vocabs",icon:(0,s.jsx)(y.Z,{strokeWidth:1.5}),subMenuItems:[{title:"Vocabs",path:"/vocabs"},{title:"Packages",path:"/packages"}]},{title:"AI chat",path:"/ai-chat",icon:(0,s.jsx)(w.Z,{strokeWidth:1.5})},{title:"Quizzes",path:"/quizzes",icon:(0,s.jsx)(w.Z,{strokeWidth:1.5})},{title:"Accounts",path:"/accounts",icon:(0,s.jsx)(A.Z,{strokeWidth:1.5})}]},{title:"Settings",menuList:[{title:"Settings",path:"/settings",icon:(0,s.jsx)(T.Z,{strokeWidth:1.5})}]}];var I=r(56800),S=r.n(I);let O=(0,r(39099).Ue)((e,t)=>({toggleCollapse:!1,invokeToggleCollapse:()=>e({toggleCollapse:!t().toggleCollapse})}));var R=r(87138),C=r(16463),_=r(43781);let z=e=>{var t;let{item:r}=e,[a,n]=(0,i.useState)(!1),o=(0,C.usePathname)(),{toggleCollapse:l}=O();return(0,s.jsx)(s.Fragment,{children:r.subMenuItems?(0,s.jsxs)("div",{className:"rounded-md min-w-[18px] cursor-pointer",children:[(0,s.jsxs)("a",{className:"flex items-center min-h-[40px] h-full text-black py-2 px-4 hover:bg-gray-100 rounded duration-200\n                            ".concat(o.includes(r.path)?"rounded-md text-black light:text-black bg-gray-100":""),onClick:()=>{n(!a)},children:[r.icon,!l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"ml-3 text-base leading-6",children:r.title}),(0,s.jsx)(_.fmn,{className:"ml-auto text-xs  ".concat(a?"rotate-90":"")})]})]}),a&&!l&&(0,s.jsx)("div",{className:"border-l-2",children:(0,s.jsx)("div",{className:"grid gap-y-2 px-10 py-3 leading-5",children:null===(t=r.subMenuItems)||void 0===t?void 0:t.map((e,t)=>(0,s.jsx)(R.default,{href:e.path,className:"text-black py-2 px-4 hover:bg-gray-100 rounded duration-200\n                                                ".concat(e.path===o?"rounded-md text-black light:text-black bg-gray-100 font-semibold":"","\n                                            "),children:(0,s.jsx)("span",{className:"ml-3 leading-6",children:e.title})},t))})})]}):(0,s.jsxs)(R.default,{href:r.path,className:"flex items-center min-h-[40px] h-full text-black py-2 px-4 hover:bg-gray-100 rounded duration-200 ".concat(r.path===o?"rounded-md text-black light:text-black bg-gray-100 font-semibold":""),children:[r.icon,!l&&(0,s.jsx)("span",{className:"ml-3 leading-6",children:r.title})]})})},M=e=>{let{menuGroup:t}=e;return S()("py-4 tracking-[.1rem] font-medium uppercase text-[10px] text-gray-500"),(0,s.jsx)(s.Fragment,{children:t.menuList.map((e,t)=>(0,s.jsx)(z,{item:e},t))})},U={logo:r(17991)};var E=()=>{let e=S()("bg-sidebar text-gray-500 h-full w-[17rem] border transition duration-300 ease-in-out z-[49] w-[20rem]");return(0,s.jsxs)("aside",{className:e,children:[(0,s.jsx)("div",{className:"flex relative items-center py-5 px-3.5",children:(0,s.jsx)(j.default,{alt:"logo",src:U.logo,className:"size-[50px] mx-3.5 min-h-fit"})}),(0,s.jsx)("nav",{className:"flex flex-col gap-2 transition duration-300 ease-in-out",children:(0,s.jsx)("div",{className:"flex flex-col gap-2 px-4",children:k.map((e,t)=>(0,s.jsx)(M,{menuGroup:e},t))})})]})},L=e=>{let{children:t}=e;return(0,s.jsxs)("div",{className:"flex flex-row h-screen",children:[(0,s.jsx)(E,{}),(0,s.jsx)("div",{className:"flex flex-col h-full flex-grow",children:t})]})};let D=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});D.displayName="Card";let Z=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",r),...a})});Z.displayName="CardHeader";let F=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("h3",{ref:t,className:(0,d.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});F.displayName="CardTitle";let J=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("p",{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",r),...a})});J.displayName="CardDescription";let W=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("p-6 pt-0",r),...a})});W.displayName="CardContent",i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex items-center p-6 pt-0",r),...a})}).displayName="CardFooter";var V=r(50880);function P(){return(0,s.jsxs)("div",{className:"flex w-screen h-screen justify-center items-center overflow-hidden",children:[(0,s.jsx)("img",{loading:"lazy",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87de03ef-d3a5-4e7e-8510-f3fc827b9854/dh3jyxc-96842ec5-b83a-4c55-ba32-a2b2c5a6567e.png/v1/fill/w_1194,h_669,q_70,strp/sunset_from_living_room_by_juacko_dh3jyxc-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NyIsInBhdGgiOiJcL2ZcLzg3ZGUwM2VmLWQzYTUtNGU3ZS04NTEwLWYzZmM4MjdiOTg1NFwvZGgzanl4Yy05Njg0MmVjNS1iODNhLTRjNTUtYmEzMi1hMmIyYzVhNjU2N2UucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D2YYwceXBxJZi3jqLV5JlC-6pV66CmiLJrzclrHGMhI",className:"absolute top-0 left-0 w-full h-full object-cover"}),(0,s.jsx)("div",{className:"z-10",children:(0,s.jsxs)(D,{className:"w-[350px]",children:[(0,s.jsxs)(Z,{children:[(0,s.jsx)(F,{children:"Login"}),(0,s.jsx)(J,{children:"Langhance"})]}),(0,s.jsx)(W,{children:(0,s.jsx)(V.default,{})})]})})]})}var Q=r(97152);function G(e){let{children:t}=e,r=(0,C.useRouter)(),a=(0,C.usePathname)(),n=(0,Q.t)(e=>e.account);return((0,i.useLayoutEffect)(()=>{n||r.replace("/login")},[n]),"/login"!=a&&n)?(0,s.jsx)("div",{className:"bg-white",children:(0,s.jsx)(L,{children:t})}):(0,s.jsx)(P,{})}function B(e){let{children:t}=e;return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:n().className,children:[(0,s.jsx)("div",{className:"App",children:(0,s.jsx)(G,{children:t})}),(0,s.jsx)(b,{})]})})}},50880:function(e,t,r){"use strict";r.d(t,{default:function(){return k}});var s=r(57437),a=r(2265),n=r(77209),i=r(59772),o=r(39343),l=r(31014),c=r(71538),d=r(49354),u=r(70402);let f=o.RV,m=a.createContext({}),p=e=>{let{...t}=e;return(0,s.jsx)(m.Provider,{value:{name:t.name},children:(0,s.jsx)(o.Qr,{...t})})},x=()=>{let e=a.useContext(m),t=a.useContext(g),{getFieldState:r,formState:s}=(0,o.Gc)(),n=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},g=a.createContext({}),h=a.forwardRef((e,t)=>{let{className:r,...n}=e,i=a.useId();return(0,s.jsx)(g.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:t,className:(0,d.cn)("space-y-2",r),...n})})});h.displayName="FormItem";let v=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:n,formItemId:i}=x();return(0,s.jsx)(u._,{ref:t,className:(0,d.cn)(n&&"text-destructive",r),htmlFor:i,...a})});v.displayName="FormLabel";let b=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:n,formDescriptionId:i,formMessageId:o}=x();return(0,s.jsx)(c.g7,{ref:t,id:n,"aria-describedby":a?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!a,...r})});b.displayName="FormControl",a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:n}=x();return(0,s.jsx)("p",{ref:t,id:n,className:(0,d.cn)("text-sm text-muted-foreground",r),...a})}).displayName="FormDescription";let j=a.forwardRef((e,t)=>{let{className:r,children:a,...n}=e,{error:i,formMessageId:o}=x(),l=i?String(null==i?void 0:i.message):a;return l?(0,s.jsx)("p",{ref:t,id:o,className:(0,d.cn)("text-sm font-medium text-destructive",r),...n,children:l}):null});j.displayName="FormMessage";var N=r(89733),y=r(78068),w=r(16463),A=r(97152);let T=i.z.object({email:i.z.string().min(3,{message:"Please enter email. len > 3"}),password:i.z.string().min(1,{message:"Please enter password. len > 3"})});function k(){let e=(0,o.cI)({resolver:(0,l.F)(T),defaultValues:{email:"",password:"123456"}}),{toast:t}=(0,y.pm)(),r=(0,w.useRouter)(),a=(0,A.t)(e=>e.login);async function i(e){console.log("<> ",e),await a(e.email,e.password)?(t({title:"Login",description:"succeed"}),r.push("/")):t({title:"Login",description:"Login Fail"})}return(0,s.jsx)(f,{...e,children:(0,s.jsxs)("form",{className:"space-y-4",onSubmit:e.handleSubmit(i),children:[(0,s.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,s.jsx)(p,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,s.jsxs)(h,{children:[(0,s.jsx)(v,{children:"email"}),(0,s.jsx)(b,{children:(0,s.jsx)(n.I,{placeholder:"email",...t})}),(0,s.jsx)(j,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"password",render:e=>{let{field:t}=e;return(0,s.jsxs)(h,{children:[(0,s.jsx)(v,{children:"Password"}),(0,s.jsx)(b,{children:(0,s.jsx)(n.I,{type:"password",placeholder:"Password",...t})}),(0,s.jsx)(j,{})]})}})]}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(N.z,{type:"submit",children:"Login"})})]})})}},89733:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return c}});var s=r(57437),a=r(2265),n=r(71538),i=r(12218),o=r(49354);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:r})),ref:t,...d})});c.displayName="Button"},77209:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var s=r(57437),a=r(2265),n=r(49354);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},70402:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var s=r(57437),a=r(2265),n=r(38364),i=r(12218),o=r(49354);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.f,{ref:t,className:(0,o.cn)(l(),r),...a})});c.displayName=n.f.displayName},78068:function(e,t,r){"use strict";r.d(t,{pm:function(){return f}});var s=r(2265);let a=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function d(e){c=o(c,e),l.forEach(e=>{e(c)})}function u(e){let{...t}=e,r=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=s.useState(c);return s.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},32693:function(e,t,r){"use strict";r.d(t,{R:function(){return s}});class s{}s.ACCOUNT="account",s.AUTH_TOKENS="auth_tokens"},49354:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var s=r(44839),a=r(96164);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,s.W)(t))}},97152:function(e,t,r){"use strict";r.d(t,{t:function(){return l}});var s=r(32693),a=r(66508);class n{async login(e){try{let t=(await a.Z.post("/open/v1/auth/login",e)).data;if("success"!==t.status){console.error("Login failed");return}return t.data}catch(e){console.error("Login failed:",e)}}async logout(){try{localStorage.removeItem("account"),localStorage.removeItem("auth_tokens")}catch(e){console.error("Logout failed:",e)}}}var i=r(39099);let o=new n,l=(0,i.Ue)(e=>({account:JSON.parse(localStorage.getItem(s.R.ACCOUNT)),tokens:JSON.parse(localStorage.getItem(s.R.AUTH_TOKENS)),login:async(t,r)=>{let a=await o.login({email:t,password:r});if(!a)return!1;let n={id:a.accountId,email:a.email},i={accessToken:a.accessToken,refreshToken:a.refreshToken,accessTokenExpirationTime:new Date(a.accessTokenExpirationTime),refreshTokenExpirationTime:new Date(a.refreshTokenExpirationTime)};return e({account:n,tokens:i}),localStorage.setItem(s.R.ACCOUNT,JSON.stringify(n)),localStorage.setItem(s.R.AUTH_TOKENS,JSON.stringify(i)),!0},logout:async()=>{await o.logout(),e({account:void 0,tokens:void 0})},rotateLoginTokens:async e=>{}}))},66508:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var s=r(32693),a=r(42126);let n="https://api.langhance.com",i=a.Z.create({baseURL:n}),o=()=>{let e=JSON.parse(localStorage.getItem(s.R.AUTH_TOKENS));return a.Z.create({baseURL:n,headers:{Authorization:"Bearer ".concat(e.accessToken)}})};i.interceptors.request.use(function(e){return e}),i.interceptors.response.use(function(e){return e}),t.Z=i},53054:function(){},17991:function(e,t,r){"use strict";r.r(t),t.default={src:"./_next/static/media/logo.1a31b8de.webp",height:192,width:192,blurDataURL:"data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAABfsbFfAAAAm/////+bAF///Pz8/P9fsf/8///8/7Ky//z///z/s2L//Pz8+/9jAKH/////oQAAAGe5uWgAAABWUDggOgAAAHABAJ0BKggACAACQDglnALsAYhAAP75+AFxoM8kZDNZ+Meqk3q8tOWsbN02CsUq1ckVmMb2u9OiAAA=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[93,779,850,373,216,710,777,971,23,744],function(){return e(e.s=5729)}),_N_E=e.O()}]);