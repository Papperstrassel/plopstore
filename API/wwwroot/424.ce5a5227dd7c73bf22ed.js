"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[424],{9424:(U,m,s)=>{s.r(m),s.d(m,{AccountModule:()=>F});var g=s(8583),i=s(3679),t=s(3018),c=s(4878),l=s(15),p=s(4015);let f=(()=>{class e{constructor(n,r,a){this.accountService=n,this.router=r,this.activatedRoute=a}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new i.NI("",i.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.B),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:41,vars:5,consts:[[1,"sign-in-container"],[1,"content-grid"],[1,"login-window-main"],[1,"window-size-box"],[1,"form-signin"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"Sign-in-text"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],[1,"checkbox","mb-2","mt-2"],[1,"remember-check"],["type","checkbox","value","remember-me"],[1,"remember-text"],["type","submit",1,"w-100","btn","btn-lg","btn-primary",3,"disabled"],[1,"benefit-info-pane"],[1,"info-pane"],[1,"user-reg-info"],[1,"titleSignUp"],[1,"member-benefits"],[1,"benefits-list"],[1,"member-benefits-item"],[1,"signup-btn-holder"],[1,"signup-btn"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"main",4),t.TgZ(5,"form",5),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(6,"div",6),t.TgZ(7,"h1",7),t._uU(8,"Sign In"),t.qZA(),t.qZA(),t._UZ(9,"app-text-input",8),t._UZ(10,"app-text-input",9),t.TgZ(11,"div",10),t.TgZ(12,"label",11),t._UZ(13,"input",12),t.TgZ(14,"p",13),t._uU(15,"Remember me"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"button",14),t._uU(17,"Sign in"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"div",17),t.TgZ(21,"p",18),t._uU(22,"Not a member yet?"),t.qZA(),t.TgZ(23,"p",19),t._uU(24,"Unlock access to:"),t.qZA(),t.TgZ(25,"ul",20),t.TgZ(26,"li"),t.TgZ(27,"p",21),t._uU(28,"Special Deals"),t.qZA(),t.qZA(),t.TgZ(29,"li"),t.TgZ(30,"p",21),t._uU(31,"Order History"),t.qZA(),t.qZA(),t.TgZ(32,"li"),t.TgZ(33,"p",21),t._uU(34,"Faster checkout"),t.qZA(),t.qZA(),t.TgZ(35,"li"),t.TgZ(36,"p",21),t._uU(37,"And more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",22),t.TgZ(39,"button",23),t._uU(40,"Register"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("formGroup",r.loginForm),t.xp6(4),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(6),t.Q6J("disabled",r.loginForm.invalid))},directives:[i._Y,i.JL,i.sg,p.t,i.JJ,i.u],styles:['@import\'https://fonts.googleapis.com/css2?family=Lexend:wght@500&family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet\';.bg-image[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;object-fit:cover}.bg-img-holder[_ngcontent-%COMP%]{position:absolute;top:7vh;left:0;width:100%;height:93vh;background-repeat:no-repeat;background-position:center}.Sign-in-text[_ngcontent-%COMP%]{color:#000;font-family:"Montserrat",sans-serif;font-weight:600}.remember-check[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;color:#575757;font-weight:400;font-size:.9em;display:flex;justify-content:left}.remember-text[_ngcontent-%COMP%]{margin:0;padding-left:.3em}.sign-in-form-holder-grid[_ngcontent-%COMP%]{display:grid;grid-column:repeat(2,1fr)}.sign-in-window[_ngcontent-%COMP%]{border:2px solid red}.sign-in-form-holder[_ngcontent-%COMP%]{position:absolute;min-width:20em;padding-right:15px;padding-left:15px}.info-pane[_ngcontent-%COMP%]{display:flex;justify-content:center;background:#FFFDFA}.user-reg-info[_ngcontent-%COMP%]{margin-top:1.5em;margin-bottom:1.5em;padding-top:1em;background:white;width:100%;text-align:center;border-radius:3px}.titleSignUp[_ngcontent-%COMP%]{padding-top:.5em;font-family:"Montserrat",sans-serif;color:#1f80bf;font-weight:700;font-size:1.8em}.member-benefits[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;color:#717171}.benefits-list[_ngcontent-%COMP%]{list-style:none;text-decoration:none;padding:0;margin:0}.member-benefits-item[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;margin:0 0 .25em}.signup-btn-holder[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:1em}.signup-btn[_ngcontent-%COMP%]{align-items:center;background-color:#e81d88;border:2px solid #E81D88;border-radius:.2em;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:1em;font-weight:600;height:3.65em;justify-content:center;letter-spacing:-.8px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.signup-btn[_ngcontent-%COMP%]:active{background-color:#3385ff;border-color:#3385ff;fill:#06f}@media screen and (min-width: 700px){.content-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.login-window-main[_ngcontent-%COMP%]{flex-grow:0}.content-grid[_ngcontent-%COMP%]{padding:3em}}.sign-in-container[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.content-grid[_ngcontent-%COMP%]{width:100%;display:grid;grid-gap:2rem;gap:2rem;padding:1.5em}.login-window-main[_ngcontent-%COMP%]{padding-top:1.5em}.benefit-info-pane[_ngcontent-%COMP%]{border:2px solid #1F80BF;border-radius:.2em}.window-size-box[_ngcontent-%COMP%]{flex-grow:0;max-width:100%;flex-basis:100%}']}),e})();var b=s(7574),Z=s(3637),h=s(9796);function u(e){return!(0,h.k)(e)&&e-parseFloat(e)+1>=0}var d=s(4869);function y(e){const{index:o,period:n,subscriber:r}=e;if(r.next(o),!r.closed){if(-1===n)return r.complete();e.index=o+1,this.schedule(e,n)}}var v=s(5917),A=s(3190),w=s(8002);function C(e,o){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}function T(e,o){if(1&e&&(t.TgZ(0,"ul",11),t.YNc(1,C,2,1,"li",12),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const M=[{path:"login",component:f},{path:"register",component:(()=>{class e{constructor(n,r,a){this.fb=n,this.accountService=r,this.router=a}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[i.kI.required]],email:[null,[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[i.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>function(e=0,o,n){let r=-1;return u(o)?r=Number(o)<1?1:Number(o):(0,d.K)(o)&&(n=o),(0,d.K)(n)||(n=Z.P),new b.y(a=>{const O=u(e)?e:+e-n.now();return n.schedule(y,O,{index:0,period:r,subscriber:a})})}(500).pipe((0,A.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,w.U)(r=>r?{emailExists:!0}:null)):(0,v.of)(null)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(c.B),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:13,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[1,"form-signin"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-5","fw-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled mt-3",4,"ngIf"],["type","submit",1,"w-100","btn","btn-lg","btn-primary"],[1,"text-danger","list-unstyled","mt-3"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"main",2),t.TgZ(3,"form",3),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(4,"div",4),t.TgZ(5,"h1",5),t._uU(6,"Register"),t.qZA(),t.qZA(),t._UZ(7,"app-text-input",6),t._UZ(8,"app-text-input",7),t._UZ(9,"app-text-input",8),t.YNc(10,T,2,1,"ul",9),t.TgZ(11,"button",10),t._uU(12,"Register"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("formGroup",r.registerForm),t.xp6(4),t.Q6J("label","Display Address"),t.xp6(1),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",r.errors))},directives:[i._Y,i.JL,i.sg,p.t,i.JJ,i.u,g.O5,g.sg],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),e})();var P=s(1531);let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,q,P.m]]}),e})()}}]);