(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{155:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){},177:function(e,t,c){},285:function(e,t,c){},287:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(15),i=c.n(n),r=(c(155),c(47)),o=c(28),u=c(17),l=(c(156),c(157),c(336)),j=c(323),d=c(8),b=c(7);function O(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(l.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var m=c(94),h=c.n(m),f=c(132),x=(c(164),c(165),c(327)),p=c(133),v=c.n(p),g=c(134),N=c.n(g),A=c.p+"static/media/couverture.2dc9ece9.webp";c(166);function D(e){return Object(b.jsx)(j.a,{children:e.texteBtn})}function y(e){e.id;var t=e.nom,c=e.couleur,a=e.datemodif,n=e.couverture,i=Object(s.useState)(!1),r=Object(u.a)(i,2),o=r[0],l=r[1];return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:c},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(x.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(v.a,{})}),Object(b.jsx)("img",{src:n||A,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",C(a)]})]}),Object(b.jsx)(x.a,{className:"modifier","aria-label":"modifier",size:"small",ongClick:function(){l(!0)},children:Object(b.jsx)(N.a,{})}),o&&Object(b.jsxs)("div",{className:"DossierBoutons",children:[Object(b.jsx)(D,{onClick:function(){l(!1)},texteBtn:"Modifier"}),Object(b.jsx)(D,{onClick:function(){l(!1)},texteBtn:"Supprimer"})]})]})}function C(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var I=c(135);c(289);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyCifly0rAzwthiJ8UMq-LcqcdbpWI3TUQw",authDomain:"pvt-h21-bd564.firebaseapp.com",projectId:"pvt-h21-bd564",storageBucket:"pvt-h21-bd564.appspot.com",messagingSenderId:"428836185358",appId:"1:428836185358:web:66055485ec8145998fa35f",measurementId:"G-DWMZGEFZMX"});var w,S=new I.a.AuthUI(d.a.auth()),k=d.a.firestore();function E(e){var t=e.utilisateur,c=e.etatDossiers,a=Object(u.a)(c,2),n=a[0],i=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=3,k.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:s=e.sent,w=!s.empty,s.forEach((function(e){c.push(Object(r.a)({id:e.id},e.data()))})),i(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("ul",{className:"ListeDossiers",children:w?Object(b.jsx)(b.Fragment,{children:n.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(y,Object(r.a)({},e))},e.id)}))}):Object(b.jsx)("div",{className:"dossierVide",children:Object(b.jsx)("h2",{children:"Votre liste de dossiers est vide :c"})})})}var F=c(331),R=c(141),V=c.n(R);c(177),c(178);function M(){return Object(s.useEffect)((function(){return S.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var z=c(332),B=c(334),P=c(330),W=c(329),G=c(335),U=c(142);c(285);function q(e){var t=e.ouvert,c=e.setOuvert,a=e.gererAjout,n=Object(s.useState)(""),i=Object(u.a)(n,2),r=i[0],o=i[1],l=Object(s.useState)(""),d=Object(u.a)(l,2),O=d[0],m=d[1],h=Object(s.useState)("#537169"),f=Object(u.a)(h,2),x=f[0],p=f[1];function v(){!function(){O.length<=0&&m("src/images/couverture.webp");console.log(O)}(),o(""),m(""),p("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(B.a,{className:"dialogueDossier",open:t,onClose:function(){return c(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(G.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(z.a,{autoFocus:!0,margin:"dense",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r,className:"texteDossier"}),Object(b.jsx)(z.a,{margin:"dense",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return m(e.target.value)},defaultValue:O}),Object(b.jsx)(U.a,{width:"100%",triangle:"hide",onChangeComplete:function(e,t){return p(e.hex)},colors:["#264653","#2A9D8F","#E9C46A","#F4A261","#E76F51","#293241"],color:x})]}),Object(b.jsxs)(P.a,{className:"boutonsActions",children:[Object(b.jsx)(j.a,{className:"boutonAnnuler",onClick:function(){c(!1),v()},color:"primary",children:"Annuler"}),Object(b.jsx)(j.a,{className:"boutonAjouter",onClick:function(){""!==r&&a(r,O,x),v()},color:"primary",children:"Ajouter"})]})]})})}function J(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(u.a)(n,2),l=i[0],j=i[1],m=Object(s.useState)(!1),h=Object(u.a)(m,2),f=h[0],x=h[1];return Object(s.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){a(e),e&&k.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{utilisateur:c}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(E,{utilisateur:c,etatDossiers:n}),Object(b.jsx)(q,{ouvert:f,setOuvert:x,gererAjout:function(e,t,s){var a={nom:e,couverture:t,couleur:s,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};k.collection("utilisateurs-ex4").doc(c.uid).collection("dossiers").add(a).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(l),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),x(!1)}))}}),Object(b.jsx)(F.a,{onClick:function(){return x(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(V.a,{})})]})]}):Object(b.jsx)(M,{})})}i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("racine"))}},[[287,1,2]]]);
//# sourceMappingURL=main.ce2f1068.chunk.js.map