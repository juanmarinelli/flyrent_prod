import{$ as r,Z as i}from"./entry.661b2081.js";import{u as a}from"./useAuth.1202eab9.js";const o=r(()=>{const e=a();if(!e.value)return i("/login");if(e.value.email_verified_at||e.value.is_verified)return i("/dashboard")});export{o as default};
