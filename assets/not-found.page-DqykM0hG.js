import{a2 as e,j as t,M as n,N as s,a3 as i,s as a,a4 as r}from"./index-oXr36wYE.js";import{B as l}from"./Button-Czc2TSs4.js";const x=r`
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
`,c=a("text")(({theme:o})=>({animation:`${x} 1.5s infinite ease-in-out`,fill:o.palette.error.main,fontWeight:"bold",fontSize:"48px"})),d=()=>t.jsx(n,{sx:{width:120,height:120,margin:"auto",mb:2},children:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("polygon",{points:"50,10 95,90 5,90",fill:"#f8d7da",stroke:"#d9534f",strokeWidth:"5"}),t.jsx(c,{x:"43",y:"75",children:"!"})]})});function m(){const o=e();return t.jsxs(n,{sx:{textAlign:"center",mt:5},children:[t.jsx(d,{}),t.jsx(s,{variant:"h3",color:"error",gutterBottom:!0,children:i.title}),t.jsx(l,{variant:"contained",color:"primary",onClick:()=>o("/"),children:i.button})]})}export{m as default};
