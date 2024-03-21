"use strict";(self.webpackChunklab1_01reimagined=self.webpackChunklab1_01reimagined||[]).push([[329],{329:(e,l,n)=>{n.r(l),n.d(l,{default:()=>V});var t=n(5043),i=n(4244),s=n(9073),r=n(8570),a=n(3240),x=n(2910),h=n(2115),c=n(6058),j=n(461);const d=(e,l)=>{const n=[];for(let t=e;t<=l;t+=.05){const e=t*t;n.push({x:t,y:e})}return n};var o=n(579);j.t1.register(j.PP,j.kc,j.FN,j.No,j.hE,j.m_,j.s$);const m=e=>{let{n:l,to:n,from:t}=e;const{lowerSumPoints:i,upperSumPoints:s}=((e,l,n)=>{const t=(l-n)/e;let i=0,s=0,r=[],a=[];for(let x=0;x<e;x++){const e=n+x*t,l=e+t,h=Math.min(e*e,l*l),c=Math.max(e*e,l*l);i+=h*t,s+=c*t,r.push({x:e,y:h},{x:l,y:h}),a.push({x:e,y:c},{x:l,y:c})}return{lowerSum:i,upperSum:s,lowerSumPoints:r,upperSumPoints:a}})(l,n,t),r={datasets:[{label:"Lower Darboux Sum",data:i,borderColor:"#66CC33",borderWidth:2,fill:!1,stepped:!0,pointRadius:0},{label:"Upper Darboux Sum",data:s,borderColor:"rgba(255,99,132,1)",borderWidth:2,fill:!1,stepped:!0,pointRadius:0},{label:"f(x)",data:d(t,n),borderColor:"#CCFFFF",borderWidth:1,pointRadius:0}]};return(0,o.jsx)(c.N1,{options:{scales:{x:{type:"linear",position:"bottom"}},elements:{line:{tension:0}}},data:r})};var f=n(2007),A=n(9800),p=n(1645),u=n(7705),g=n(8223),T=n(8354),y=n(3340);j.t1.register(j.PP,j.kc,j.FN,j.No,j.hE,j.m_,j.s$);const _=e=>{let{n:l,method:n,from:t,to:i}=e;const s=((e,l,n,t)=>{const i=(t-n)/e;let s=[];for(let r=0;r<e;r++){const e=n+r*i;let t;switch(l){case"left":default:t=e;break;case"right":t=e+i;break;case"middle":t=e+i/2;break;case"random":t=e+Math.random()*i}const a=t*t;s.push({x:e,y:a},{x:e+i,y:a})}return s})(l,n,t,i),r=d(t,i),a={datasets:[{label:"Riemann Sum with ".concat(n," equipartition"),data:s,borderColor:"rgba(255,99,132,1)",borderWidth:2,fill:!1,stepped:!0,pointRadius:0},{label:"f(x)",data:r,borderColor:"#CCFFFF",borderWidth:1,pointRadius:0}]};return(0,o.jsx)(c.N1,{options:{scales:{x:{type:"linear",position:"bottom"}},elements:{line:{tension:0}}},data:a})};var b=n(3390);const v=()=>{const[e,l]=(0,t.useState)({NValueDarboux:5,from:0,to:0}),[n,r]=(0,t.useState)({RiemannN:5,TypeOf:"left",from:0,to:0}),[a]=f.A.useForm(),[x]=f.A.useForm();return(0,o.jsxs)(A.A,{gutter:[{xs:8,sm:16,md:24,lg:32},20],justify:"center",align:"top",children:[(0,o.jsxs)(p.A,{span:10,children:[(0,o.jsx)(i.A.Title,{level:3,children:"\u0421\u0442\u0443\u043f\u0435\u043d\u0447\u0430\u0442\u044b\u0435 \u0444\u0438\u0433\u0443\u0440\u044b"}),(0,o.jsx)(s.A,{style:{marginBottom:"20px"},children:(0,o.jsx)(m,{n:e.NValueDarboux,from:e.from,to:e.to})}),(0,o.jsxs)(f.A,{form:x,onFinish:e=>{const n=JSON.parse(e.interval),t=n[0],i=n[1];l({NValueDarboux:e.DarbouxN,to:i,from:t})},initialValues:{DarbouxN:5,interval:"[1,2]"},children:[(0,o.jsx)(f.A.Item,{name:"DarbouxN",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0439",children:(0,o.jsx)(u.A,{})}),(0,o.jsx)(f.A.Item,{name:"interval",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b:",children:(0,o.jsx)(u.A,{})}),(0,o.jsx)(f.A.Item,{children:(0,o.jsx)(g.Ay,{icon:(0,o.jsx)(b.A,{}),type:"primary",htmlType:"submit",children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c"})})]})]}),(0,o.jsx)(T.A,{type:"vertical",style:{height:"550px",marginRight:"30px",marginLeft:"30px"}}),(0,o.jsxs)(p.A,{span:10,children:[(0,o.jsx)(i.A.Title,{level:3,children:"\u0413\u0440\u0430\u0444\u0438\u043a\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0443\u043c\u043c"}),(0,o.jsx)(s.A,{style:{marginBottom:"20px"},children:(0,o.jsx)(_,{n:n.RiemannN,method:n.TypeOf,from:n.from,to:n.to})}),(0,o.jsxs)(f.A,{form:a,onFinish:e=>{const l=JSON.parse(String(e.interval)),n=l[0],t=l[1];r({RiemannN:e.RiemannN,TypeOf:e.TypeOf,from:n,to:t})},initialValues:{RiemannN:5,TypeOf:"left",interval:"[1,2]"},children:[(0,o.jsx)(f.A.Item,{name:"RiemannN",label:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f",children:(0,o.jsx)(u.A,{})}),(0,o.jsx)(f.A.Item,{name:"TypeOf",label:"\u0422\u0438\u043f \u043e\u0441\u043d\u0430\u0449\u0435\u043d\u0438\u044f",children:(0,o.jsxs)(y.Ay.Group,{children:[(0,o.jsx)(y.Ay,{value:"left",children:"\u041b\u0435\u0432\u044b\u0435"}),(0,o.jsx)(y.Ay,{value:"right",children:"\u041f\u0440\u0430\u0432\u044b\u0435"}),(0,o.jsx)(y.Ay,{value:"middle",children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0435"}),(0,o.jsx)(y.Ay,{value:"random",children:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435"})]})}),(0,o.jsx)(f.A.Item,{name:"interval",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b",children:(0,o.jsx)(u.A,{})}),(0,o.jsx)(f.A.Item,{children:(0,o.jsx)(g.Ay,{icon:(0,o.jsx)(b.A,{}),type:"primary",htmlType:"submit",children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c"})})]})]})]})};var M,k,I=n(1765),B=n(9706),P=n(7136),F=(n(119),n(3927)),N=n(7528),R=n(1940);const C=(0,R.Ay)(A.A)(M||(M=(0,N.A)(["\n  padding: 30px;\n  padding-top: 0;\n  padding-right: 0;\n"]))),S=(0,R.Ay)(T.A)(k||(k=(0,N.A)(["\n  height: auto;\n  margin-right: 20px;\n"]))),D=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(C,{gutter:16,children:[(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:2,children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0432\u0435\u0440\u0445\u043d\u044e\u044e \u0438 \u043d\u0438\u0436\u043d\u044e\u044e \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443 \u0434\u043b\u044f \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u043d\u0430 n \u0447\u0430\u0441\u0442\u0435\u0439."}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 1: \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043f\u043e\u0434\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430"}),(0,o.jsxs)(i.A.Text,{children:["\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b ",(0,o.jsx)(F.InlineMath,{math:"[1,2]"})," \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 n \u0440\u0430\u0432\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u0435\u0439, \u0442\u0430\u043a \u0447\u0442\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u043e\u0434\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440:"," ",(0,o.jsx)(F.BlockMath,{math:"\\large\\Delta x = \\frac{b - a}{n} = \\frac{2 - 1}{n} = \\frac{1}{n}\n"})]}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 2: \u0422\u043e\u0447\u043a\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),(0,o.jsxs)(i.A.Text,{children:["\u0422\u043e\u0447\u043a\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a"," ",(0,o.jsx)(F.BlockMath,{math:"\\large x_i = 1 + i \\cdot \\Delta x, \\ \u0433\u0434\u0435 \\ i = 0, 1, \\ldots, n"})]}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 3: \u041d\u0438\u0436\u043d\u044f\u044f \u0438 \u0432\u0435\u0440\u0445\u043d\u044f\u044f \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443"}),(0,o.jsxs)(i.A.Text,{children:["\u0414\u043b\u044f \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443 ",(0,o.jsx)(F.InlineMath,{math:"L(f,p)"})," \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u043e\u0434\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u0431\u0435\u0440\u0435\u0442\u0441\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0447\u0442\u043e \u0434\u043b\u044f"," ",(0,o.jsx)(F.InlineMath,{math:"f(x)=x^2"})," \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u0434\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c"," ",(0,o.jsx)(F.BlockMath,{math:"\\large m_i=f(x_i-1)"})]}),(0,o.jsxs)(i.A.Text,{children:["\u0414\u043b\u044f \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443 ",(0,o.jsx)(F.InlineMath,{math:"U(f,p)"})," \u0447\u0442\u043e \u0434\u043b\u044f"," ",(0,o.jsx)(F.InlineMath,{math:"f(x)=x^2"})," \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u0434\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c"," ",(0,o.jsx)(F.BlockMath,{math:"\\large M_i=f(x_i)=x_i^2"})]}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 4: \u0424\u043e\u0440\u043c\u0443\u043b\u044b \u0434\u043b\u044f \u0441\u0443\u043c\u043c"}),(0,o.jsx)(F.BlockMath,{math:"\\large L(f, P) = \\sum_{i=1}^{n} f(x_{i-1}) \\cdot \\Delta x = \\sum_{i=1}^{n} \\left(1 + (i-1)\\cdot\\frac{1}{n}\\right)^2 \\cdot \\frac{1}{n}\n"}),(0,o.jsx)(F.BlockMath,{math:"\\large U(f, P) = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x = \\sum_{i=1}^{n} \\left(1 + i\\cdot\\frac{1}{n}\\right)^2 \\cdot \\frac{1}{n}\n"})]}),(0,o.jsx)(T.A,{type:"vertical",style:{height:"auto",marginRight:"20px"}}),(0,o.jsxs)(p.A,{span:12,children:[(0,o.jsxs)(i.A.Title,{level:3,children:["\u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0434\u043b\u044f ",(0,o.jsx)(F.InlineMath,{math:"U(f,P)"})," \u0438"," ",(0,o.jsx)(F.InlineMath,{math:"L(f,P)"})]}),(0,o.jsx)(i.A.Title,{level:4,children:"\u0428\u0430\u0433 1: \u041f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435"}),(0,o.jsx)(F.BlockMath,{math:"\\large L(f, P) = \\frac{1}{n^3} \\sum_{i=1}^{n} \\left(n^2 + 2n(i-1) + (i-1)^2\\right)\n"}),(0,o.jsx)(F.BlockMath,{math:"\\large U(f, P) = \\frac{1}{n^3} \\sum_{i=1}^{n} (n^2 + 2in + i^2)"}),(0,o.jsx)(i.A.Title,{level:4,children:"\u0428\u0430\u0433 2: \u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0443\u043b\u044b"}),(0,o.jsx)(F.BlockMath,{math:"\\large L(f, P) = \\frac{1}{n^3} \\left(n^3 + 2n \\sum_{i=1}^{n} (i-1) + \\sum_{i=1}^{n} (i-1)^2\\right)"}),(0,o.jsx)(F.BlockMath,{math:"\\large U(f, P) = \\frac{1}{n^3} \\left( \\sum_{i=1}^{n} n^2 + \\sum_{i=1}^{n} 2in + \\sum_{i=1}^{n} i^2 \\right)\n"}),(0,o.jsx)(i.A.Title,{level:4,children:"\u0428\u0430\u0433 3: \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0443\u043b \u0441\u0443\u043c\u043c"}),(0,o.jsxs)(i.A.Text,{children:["\u0417\u0430\u043c\u0435\u0442\u0438\u043c \u0447\u0442\u043e"," ",(0,o.jsx)(F.InlineMath,{math:"\\sum_{i=1}^{n} (i-1) = \\sum_{i=1}^{n} i - n"})," ","\u0438"," ",(0,o.jsx)(F.InlineMath,{math:"\\sum_{i=1}^{n} (i-1)^2 = \\sum_{i=1}^{n} i^2 - 2\\sum_{i=1}^{n} i + n\n"})," ",", \u0442\u043e\u0433\u0434\u0430"]}),(0,o.jsx)("div",{style:{paddingTop:"15px",paddingBottom:"15px"},children:(0,o.jsx)(F.BlockMath,{math:"\\large L(f, P) = \\frac{1}{n^3} \\left( n^3 + 2n \\cdot \\frac{n(n-1)}{2} + \\frac{n(n-1)(2n-1)}{6} \\right)"})}),(0,o.jsxs)(i.A.Text,{children:["\u0417\u043d\u0430\u044f \u0447\u0442\u043e ",(0,o.jsx)(F.InlineMath,{math:"\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}"})," ","\u0438 ",(0,o.jsx)(F.InlineMath,{math:"\\sum_{i=1}^{n}i^2=\\frac{n(n+1)(2n+1)}{6}"})," ","\u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u043c \u0438\u0445 \u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"," "]}),(0,o.jsx)("div",{style:{paddingTop:"15px"},children:(0,o.jsx)(F.BlockMath,{math:"\\large U(f, P) = \\frac{1}{n^3} \\left( n^3 + 2n \\cdot \\frac{n(n+1)}{2} + \\frac{n(n+1)(2n+1)}{6} \\right)\n"})}),(0,o.jsx)(i.A.Title,{level:4,children:"\u0428\u0430\u0433 4: \u0423\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435"}),(0,o.jsxs)(i.A.Text,{children:[" ","\u041f\u0440\u0438\u0432\u043e\u0434\u044f \u043a \u043e\u0431\u0449\u0435\u043c\u0443 \u0437\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044e \u0438 \u0443\u043f\u0440\u043e\u0449\u0430\u044f, \u043c\u044b \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043c \u043a \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0438 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443"]}),(0,o.jsx)(F.BlockMath,{math:"\\large L(f,P)=\\frac{14n^2 - 9n + 1}{6n^2}"}),(0,o.jsx)(F.BlockMath,{math:"\\large U(f,P)=\\frac{14n^2+9n+1}{6n^2}"})]})]})}),L=()=>(0,o.jsxs)(C,{gutter:16,children:[(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:2,children:"\u0414\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u0430 \u043f\u043e \u0420\u0438\u043c\u0430\u043d\u0443."}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 1: \u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),(0,o.jsxs)(i.A.Text,{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.jsx)(F.InlineMath,{math:"f(x) = x^2"})," \u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u043d\u0430 \u0432\u0441\u0435\u0439 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043f\u0440\u044f\u043c\u043e\u0439, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0442\u0440\u0435\u0437\u043e\u043a"," ",(0,o.jsx)(F.InlineMath,{math:"[1,2]"}),(0,o.jsx)("br",{}),"\u041f\u043e \u0442\u0435\u043e\u0440\u0435\u043c\u0435 \u043e \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445, \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430 \u0437\u0430\u043c\u043a\u043d\u0443\u0442\u043e\u043c \u043e\u0442\u0440\u0435\u0437\u043a\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u044b \u043f\u043e \u0420\u0438\u043c\u0430\u043d\u0443."]}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 2: \u0421\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443"}),(0,o.jsxs)(i.A.Text,{children:["\u0427\u0442\u043e\u0431\u044b \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u043f\u043e \u0420\u0438\u043c\u0430\u043d\u0443, \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0438 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0443\u043c\u043c\u0430\u043c\u0438 \u0414\u0430\u0440\u0431\u0443 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0441\u044f \u043a \u043d\u0443\u043b\u044e \u043f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u0447\u0438\u0441\u043b\u0430 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0439 n, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u0440\u0438"," ",(0,o.jsx)(F.InlineMath,{math:"n\\rightarrow\\infty"})]}),(0,o.jsx)(F.BlockMath,{math:"\\large U(f,P)-L(f,P)=\\frac{14n^2+9n+1}{6n^2}-\\frac{14n^2 - 9n + 1}{6n^2} = \\frac{3}{n}"}),(0,o.jsx)(i.A.Title,{level:4,children:"\u041f\u0440\u0435\u0434\u0435\u043b \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u0438"}),(0,o.jsx)(F.BlockMath,{math:"\\large \\lim_{n\\to\\infty} \\frac{3}{n} = 0"}),(0,o.jsxs)(i.A.Text,{children:["\u0423\u0432\u0438\u0434\u0438\u043c, \u0447\u0442\u043e \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0438 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0443\u043c\u043c\u0430\u043c\u0438 \u0414\u0430\u0440\u0431\u0443 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u0441\u043a\u043e\u043b\u044c \u0443\u0433\u043e\u0434\u043d\u043e \u043c\u0430\u043b\u043e\u0439, \u0438 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0444\u0443\u043d\u043a\u0446\u0438\u044f"," ",(0,o.jsx)(F.InlineMath,{math:"f(x)=x^2"})," \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u0430 \u043f\u043e \u0420\u0438\u043c\u0430\u043d\u0443 \u043d\u0430 \u043e\u0442\u0440\u0435\u0437\u043a\u0435"," ",(0,o.jsx)(F.InlineMath,{math:"[1,2]"})]})]}),(0,o.jsx)(S,{type:"vertical"}),(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:2,children:"\u041d\u0430\u0439\u0442\u0438 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0441\u0443\u043c\u043c \u0414\u0430\u0440\u0431\u0443, \u043d\u0430\u0439\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430."}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,style:{marginBottom:"20px"},children:"\u0428\u0430\u0433 1: \u041f\u0440\u0435\u0434\u0435\u043b\u044b \u0441\u0443\u043c\u043c \u0414\u0430\u0440\u0431\u0443"}),(0,o.jsx)(F.BlockMath,{math:"\\large \\lim_{n\\to\\infty}U(f,P)= \\lim_{n\\to\\infty}\\frac{14n^2+9n+1}{6n^2} = \\frac{1}{6}\\cdot\\lim_{n\\to\\infty}(14+\\frac{9}{x}+\\frac{1}{x^2})=\\frac{7}{3}"}),(0,o.jsx)(F.BlockMath,{math:"\\large \\lim_{n\\to\\infty}L(f,P) = \\lim_{n\\to\\infty}\\frac{14n^2 - 9n + 1}{6n^2}=\\frac{1}{6}\\cdot\\lim_{n\\to\\infty}(14-\\frac{9}{x}+\\frac{1}{x^2})=\\frac{7}{3}"}),(0,o.jsx)(T.A,{style:{marginTop:"30px"}}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 2: \u041d\u0430\u0439\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430"}),(0,o.jsx)(i.A.Text,{children:"\u0422\u0430\u043a \u043a\u0430\u043a \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0441\u0443\u043c\u043c \u0414\u0430\u0440\u0431\u0443 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442 - \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0442\u044c \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430 \u0440\u0430\u0432\u043d\u043e"}),(0,o.jsx)(F.BlockMath,{math:"\\int_{1}^{2} x^2 \\, dx = \\frac{7}{3}"}),(0,o.jsx)(T.A,{}),(0,o.jsx)("pre",{style:{textAlign:"center"},children:"   |\\_._/|        |,\\__/|        |\\__/,|        |\\_._/|\n   | o o |        |  o o|        |o o  |        | 0 0 |\n   (  T  )        (   T )        ( T   )        (  T  )\n  .^`-^-'^.      .^`--^'^.      .^`^--'^.      .^`-^-'^.\n  `.  ;  .'      `.  ;  .'      `.  ;  .'      `.  ;  .'\n  | | | | |      | | | | |      | | | | |      | | | | |\n ((_((|))_))    ((_((|))_))    ((_((|))_))    ((_((|))_))\n"})]})]}),U=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(C,{gutter:16,children:[(0,o.jsxs)(p.A,{span:12,children:[(0,o.jsx)(i.A.Title,{level:2,children:"\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0435 \u041d\u044c\u044e\u0442\u043e\u043d\u0430-\u041b\u0435\u0439\u0431\u043d\u0438\u0446\u0430."}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 1: \u041f\u0435\u0440\u0432\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435"}),(0,o.jsx)(i.A.Text,{children:"\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u041d\u044c\u044e\u0442\u043e\u043d\u0430-\u041b\u0435\u0439\u0431\u043d\u0438\u0446\u0430 \u0433\u043b\u0430\u0441\u0438\u0442:"}),(0,o.jsx)(F.BlockMath,{math:"\\large \\int_{a}^{b} f(x) \\, dx = F(b) - F(a)"}),(0,o.jsxs)(i.A.Text,{children:["\u041d\u0430\u0439\u0434\u0435\u043c \u043f\u0435\u0440\u0432\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u0443\u044e \u0434\u043b\u044f ",(0,o.jsx)(F.InlineMath,{math:"f(x) = x^2"}),". \u041f\u0435\u0440\u0432\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u0430\u044f \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,o.jsx)(F.InlineMath,{math:"x^2"})," \u0435\u0441\u0442\u044c"," ",(0,o.jsx)(F.InlineMath,{math:"\\frac{x^3}{3}"}),(0,o.jsx)("br",{}),"\u041f\u0440\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441:"]}),(0,o.jsx)(F.BlockMath,{math:"\\large F(x) = \\int x^2 \\, dx = \\frac{x^3}{3} + C"})]}),(0,o.jsx)(T.A,{type:"vertical",style:{height:"auto",marginRight:"20px"}}),(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 2: \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0444\u043e\u0440\u043c\u0443\u043b\u0443 \u041d\u044c\u044e\u0442\u043e\u043d\u0430-\u041b\u0435\u0439\u0431\u043d\u0438\u0446\u0430"}),(0,o.jsxs)(i.A.Text,{children:["\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u043c ",(0,o.jsx)(F.InlineMath,{math:"F(x)=\\frac{x^3}{3}"})," \u0438 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f 1 \u0438 2"]}),(0,o.jsx)(F.BlockMath,{math:"\\large \\int_{1}^{2} x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_1^2 = \\frac{2^3}{3} - \\frac{1^3}{3}"}),(0,o.jsx)(i.A.Title,{level:5,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f"}),(0,o.jsx)(F.BlockMath,{math:"\\large \\int_{1}^{2} x^2 \\, dx = \\frac{2^3}{3} - \\frac{1^3}{3} = \\frac{8}{3} - \\frac{1}{3} = \\frac{7}{3}"}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"\u0428\u0430\u0433 3: \u0412\u044b\u0432\u043e\u0434"}),(0,o.jsx)(i.A.Text,{children:"\u0421\u043b\u0435\u0434\u0443\u044f \u0440\u0430\u0441\u0441\u0447\u0435\u0442\u0430\u043c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430 \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0445 \u0447\u0435\u0440\u0435\u0437 \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443 \u0438 \u0447\u0435\u0440\u0435\u0437 \u0444\u043e\u0440\u043c\u0443\u043b\u0443 \u041d\u044c\u044e\u0442\u043e\u043d\u0430-\u041b\u0435\u0439\u0431\u043d\u0438\u0446\u0430 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0442\u044c \u0447\u0442\u043e \u0440\u0430\u0441\u0441\u0447\u0435\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u044b \u0432\u0435\u0440\u043d\u043e"})]})]})}),w=()=>{const e=[{key:"1",label:"\u0421\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443",icon:(0,o.jsx)(I.A,{}),children:(0,o.jsx)(D,{})},{key:"2",label:"\u0414\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u0438",icon:(0,o.jsx)(B.A,{}),children:(0,o.jsx)(L,{})},{key:"3",label:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430",icon:(0,o.jsx)(P.A,{}),children:(0,o.jsx)(U,{})}];return(0,o.jsx)(s.A,{style:{marginTop:"10px"},children:(0,o.jsx)(r.A,{items:e})})},O=()=>(0,o.jsxs)(C,{gutter:16,children:[(0,o.jsxs)(p.A,{span:12,children:[(0,o.jsx)(i.A.Title,{level:2,children:"\u041e\u0442\u0447\u0435\u0442 \u043f\u043e \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u2116 1.01"}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"1. \u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0434\u0430\u0447\u0438"}),(0,o.jsx)(i.A.Text,{children:"\u0426\u0435\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b - \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0438 \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0430\u043d\u0430\u043b\u0438\u0437\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432."}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{style:{marginBottom:"20px"},level:3,children:"2. \u0422\u0435\u043e\u0440\u0438\u044f"}),(0,o.jsxs)(A.A,{children:[(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:5,style:{marginTop:0},children:"\u0421\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443"}),(0,o.jsx)("br",{}),(0,o.jsx)(F.InlineMath,{math:"\\large L(f, P) = \\sum_{i=1}^{n} f(x_{i-1}) \\cdot \\Delta x"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)(F.InlineMath,{math:"\\large U(f, P) = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x"})]}),(0,o.jsx)(S,{type:"vertical"}),(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:5,style:{marginTop:0},children:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u044b"}),(0,o.jsx)("br",{}),(0,o.jsx)(F.InlineMath,{math:"\\large \\int_{a}^{b} f(x) \\, dx = F(b) - F(a)"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(F.InlineMath,{math:"\\large F(x) = \\int f(x) \\, dx + C"})]})]}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:3,children:"3. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"}),(0,o.jsx)("ol",{children:(0,o.jsxs)(i.A.Text,{children:[(0,o.jsx)("li",{children:"React TypeScript - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"}),(0,o.jsx)("li",{children:"Ant Design - \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u043b\u0435\u0433\u043a\u043e\u0432\u0435\u0441\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446"}),(0,o.jsx)("li",{children:"React Router Dom - \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u0430"}),(0,o.jsx)("li",{children:"React ChartJS - \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u0432"}),(0,o.jsx)("li",{children:"React KaTex - \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 TeX \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438"}),(0,o.jsx)("li",{children:"Styled Components - \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u0439"})]})})]}),(0,o.jsx)(S,{type:"vertical"}),(0,o.jsxs)(p.A,{span:11,children:[(0,o.jsx)(i.A.Title,{level:3,children:"4. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"}),(0,o.jsx)(i.A.Title,{level:5,children:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0447\u0430\u0441\u0442\u044c"}),(0,o.jsx)("ol",{children:(0,o.jsxs)(i.A.Text,{children:[(0,o.jsxs)("li",{children:["\u0414\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438",(0,o.jsx)(F.InlineMath,{math:"f(x)"})," \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435",(0,o.jsx)(F.InlineMath,{math:"[1;2]"})," \u0431\u044b\u043b\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0432\u0435\u0440\u0445\u043d\u0438\u0435 \u0438 \u043d\u0438\u0436\u043d\u0438\u0435 \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443 \u043f\u0440\u0438 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u043c \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0438 \u043e\u0442\u0440\u0435\u0437\u043a\u0430 \u043d\u0430 n \u0447\u0430\u0441\u0442\u0435\u0439. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u043b\u043e \u043e\u0446\u0435\u043d\u0438\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b \u0441 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0438 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u044f \u0441 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0439."]}),(0,o.jsxs)("li",{children:["\u0414\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u043f\u043e \u0420\u0438\u043c\u0430\u043d\u0443 \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u043e, \u0447\u0442\u043e \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0438 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0443\u043c\u043c\u0430\u043c\u0438 \u0414\u0430\u0440\u0431\u0443 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0441\u044f \u043a \u043d\u0443\u043b\u044e \u043f\u0440\u0438"," ",(0,o.jsx)(F.InlineMath,{math:"n\\to\\infty"})," \u0447\u0442\u043e \u0434\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u043f\u043e \u0420\u0438\u043c\u0430\u043d\u0443."]}),(0,o.jsx)("li",{children:"\u0411\u044b\u043b\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u044b \u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0432\u0435\u0440\u0445\u043d\u0438\u0445 \u0438 \u043d\u0438\u0436\u043d\u0438\u0445 \u0441\u0443\u043c\u043c \u0414\u0430\u0440\u0431\u0443, \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0438 \u0441 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430, \u0447\u0442\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432."}),(0,o.jsx)("li",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0435 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u043e\u0432\u043f\u0430\u043b\u043e \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c, \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0435 \u041d\u044c\u044e\u0442\u043e\u043d\u0430-\u041b\u0435\u0439\u0431\u043d\u0438\u0446\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044f \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f."})]})}),(0,o.jsx)(i.A.Title,{level:5,children:"\u0427\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434"}),(0,o.jsx)("ol",{children:(0,o.jsxs)(i.A.Text,{children:[(0,o.jsx)("li",{children:"\u0411\u044b\u043b\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u0447\u0430\u0442\u044b\u0435 \u0444\u0438\u0433\u0443\u0440\u044b, \u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0435 \u0441\u0443\u043c\u043c\u044b \u0414\u0430\u0440\u0431\u0443. \u042d\u0442\u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u0430 \u0441 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435\u043c \u0447\u0438\u0441\u043b\u0430 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0439."}),(0,o.jsx)("li",{children:"\u0411\u044b\u043b\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u044b \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0443\u043c\u043c \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 n \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043e\u0441\u043d\u0430\u0449\u0435\u043d\u0438\u0439, \u0447\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u043e \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u0432\u044b\u0431\u043e\u0440\u0430 \u0442\u043e\u0447\u0435\u043a \u043d\u0430 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u044f."})]})}),(0,o.jsx)(T.A,{}),(0,o.jsx)(i.A.Title,{level:4,children:"Credits : \u0410\u0440\u0445\u0438\u043f\u043e\u0432 \u041d\u0438\u043a\u0438\u0442\u0430 \u0413\u043b\u0435\u0431\u043e\u0432\u0438\u0447 N3149"})]})]}),V=()=>{const e=[{key:"1",label:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0447\u0430\u0441\u0442\u044c",icon:(0,o.jsx)(a.A,{}),children:(0,o.jsx)(w,{})},{key:"2",label:"\u0427\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434",icon:(0,o.jsx)(x.A,{}),children:(0,o.jsx)(v,{})},{key:"3",label:"\u041e\u0442\u0447\u0435\u0442",icon:(0,o.jsx)(h.A,{}),children:(0,o.jsx)(O,{})}];return(0,o.jsxs)("div",{style:{margin:"50px"},children:[(0,o.jsx)(i.A.Title,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b \u0420\u0438\u043c\u0430\u043d\u0430 \u222b\u222b\u222b"}),(0,o.jsx)(s.A,{children:(0,o.jsx)(r.A,{items:e})})]})}}}]);
//# sourceMappingURL=329.2aece62d.chunk.js.map