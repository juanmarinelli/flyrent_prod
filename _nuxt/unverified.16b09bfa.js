import{$ as r,Z as i}from"./entry.3ff8f04e.js";import{u as a}from"./useAuth.45bc59ba.js";const o=r(()=>{const e=a();if(!e.value)return i("/login");if(e.value.email_verified_at||e.value.is_verified)return i("/dashboard")});export{o as default};
