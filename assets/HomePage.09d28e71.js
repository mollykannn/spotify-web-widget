import{_ as d,u as p,r as _,o as u,c as m,a as t,b as f,F as h,d as r}from"./index.16b69857.js";import{S as g}from"./spotifyWidget.e8974238.js";const b={components:{SpotifyWidget:g},setup(){const n=p();return{Login:()=>{let i=`https://accounts.spotify.com/authorize?client_id=04215351afb246e0aba60199b1c46747&redirect_uri=${encodeURIComponent("https://mollykannn.github.io/spotify-web-widget/#/vertify")}&scope=user-library-read&response_type=token`;window.addEventListener("message",function(a){let e=JSON.parse(a.data);e.type==="access_token"&&(sessionStorage.setItem("access_token",e.access_token),n.push("/details"))},!1),window.open(i,"Spotify","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=750, height=730, top=0, left=0")}}}},y={class:"title-column"},I=t("h1",{class:"title mb-2"},"Spotify Web Widget",-1),k={class:"title-description mb-6",id:"title-description"},E=r(" To use search tools, Please "),L=r(" first. ");function R(n,o,c,s,i,a){const e=_("SpotifyWidget");return u(),m(h,null,[t("div",y,[I,t("h2",k,[E,t("button",{class:"primary",onClick:o[0]||(o[0]=(...l)=>s.Login&&s.Login(...l))},"Login"),L])]),f(e,{class:"mb-6"})],64)}var C=d(b,[["render",R]]);export{C as default};
