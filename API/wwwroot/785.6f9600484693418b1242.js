"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[785],{7785:(vt,h,s)=>{s.r(h),s.d(h,{AdminModule:()=>Zt});var a=s(8583),C=s(1531),g=s(15),t=s(3018),_=s(4570),P=s(2340),m=s(1841);let u=(()=>{class o{constructor(e){this.http=e,this.baseUrl=P.N.apiUrl}createProduct(e,n){const d=new FormData;return d.append("name",e.name),d.append("shortDescription",e.shortDescription),d.append("description",e.description),d.append("technicalDescription",e.technicalDescription),d.append("Price",String(e.price)),d.append("pictureUrl",e.pictureUrl),d.append("productTypeId",String(e.productTypeId)),d.append("productBrandId",String(e.productBrandId)),d.append("productSKU",String(e.productSKU)),d.append("numberOfRatings",String(e.numberOfRatings)),d.append("productRatingScore",String(e.productRatingScore)),d.append("file",n),this.http.post(this.baseUrl+"products",d)}updateProduct(e,n){return this.http.put(this.baseUrl+"products/"+n,e)}deleteProduct(e){return this.http.delete(this.baseUrl+"products/"+e)}uploadImage(e,n){const d=new FormData;return d.append("photo",e,"image.png"),this.http.put(this.baseUrl+"products/"+n+"/photo",d,{reportProgress:!0,observe:"events"})}deleteProductPhoto(e,n){return this.http.delete(this.baseUrl+"products/"+n+"/photo/"+e)}setMainPhoto(e,n){return this.http.post(this.baseUrl+"products/"+n+"/photo/"+e,{})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=s(1654),M=s(6241);const A=function(o){return["edit",o]};function q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",14),t.TgZ(2,"span",15),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"td",14),t.TgZ(5,"div",16),t._UZ(6,"img",17),t.qZA(),t.qZA(),t.TgZ(7,"td",14),t.TgZ(8,"span",15),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"td",14),t.TgZ(11,"span",15),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.qZA(),t.TgZ(14,"td",14),t.TgZ(15,"button",18),t._uU(16,"Edit"),t.qZA(),t.qZA(),t.TgZ(17,"td",14),t.TgZ(18,"button",19),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).deleteProduct(c.id)}),t._uU(19,"Delete"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit;t.xp6(3),t.Oqu(e.id),t.xp6(3),t.s9C("src",e.pictureUrl||"/assets/images/placeholder.png",t.LSH),t.s9C("alt",e.name),t.xp6(3),t.Oqu(e.name),t.xp6(3),t.Oqu(t.lcZ(13,6,e.price)),t.xp6(3),t.Q6J("routerLink",t.VKq(8,A,e.id))}}function y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",20),t.TgZ(1,"app-pager",21),t.NdJ("pageChanged",function(d){return t.CHM(e),t.oxw(2).onPageChanged(d)}),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)("totalCount",e.totalCount)}}const w=function(){return["/admin/create"]};function F(o,r){if(1&o&&(t.TgZ(0,"section",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"header",6),t._uU(6,"Product List"),t.qZA(),t.TgZ(7,"button",7),t._uU(8,"Add Product"),t.qZA(),t.qZA(),t._UZ(9,"app-paging-header",8),t.TgZ(10,"div",9),t.TgZ(11,"table",10),t.TgZ(12,"thead"),t.TgZ(13,"tr"),t.TgZ(14,"th",11),t.TgZ(15,"div"),t._uU(16,"Id"),t.qZA(),t.qZA(),t.TgZ(17,"th",11),t.TgZ(18,"div"),t._uU(19,"Product"),t.qZA(),t.qZA(),t.TgZ(20,"th",11),t.TgZ(21,"div"),t._uU(22,"Name"),t.qZA(),t.qZA(),t.TgZ(23,"th",11),t.TgZ(24,"div"),t._uU(25,"Price"),t.qZA(),t.qZA(),t.TgZ(26,"th",11),t._UZ(27,"div"),t.qZA(),t.TgZ(28,"th",11),t._UZ(29,"div"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"tbody"),t.YNc(31,q,20,10,"tr",12),t.qZA(),t.qZA(),t.qZA(),t.YNc(32,y,2,3,"div",13),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(7),t.Q6J("routerLink",t.DdM(6,w)),t.xp6(2),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber),t.xp6(22),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.totalCount>0)}}let O=(()=>{class o{constructor(e,n){this.shopService=e,this.adminService=n,this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts()}getProducts(e=!1){this.shopService.getProducts(e).subscribe(n=>{this.products=n.data,this.totalCount=n.count},n=>{console.log(n)})}onPageChanged(e){const n=this.shopService.getShopParams();n.pageNumber!==e&&(n.pageNumber=e,this.shopService.setShopParams(n),this.getProducts(!0))}deleteProduct(e){this.adminService.deleteProduct(e).subscribe(n=>{this.products.splice(this.products.findIndex(d=>d.id===e),1),this.totalCount--})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.d),t.Y36(u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin"]],decls:1,vars:1,consts:[["class","admin-page",4,"ngIf"],[1,"admin-page"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"d-flex","justify-content-between","my-3"],[1,"h2"],[1,"add--btn",3,"routerLink"],[3,"totalCount","pageSize","pageNumber"],[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],["data-label",""],[1,"item-description-text"],[1,"product-list-img"],[1,"custom-img-fluid",3,"src","alt"],[1,"edit--btn",3,"routerLink"],[1,"delete--btn",3,"click"],[1,"d-flex","justify-content-center"],[3,"pageSize","pageNumber","totalCount","pageChanged"]],template:function(e,n){1&e&&t.YNc(0,F,33,7,"section",0),2&e&&t.Q6J("ngIf",n.products)},directives:[a.O5,g.rH,T.U,a.sg,M.P],pipes:[a.H9],styles:['@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap";@import\'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet\';@media screen and (max-width: 600px){table[_ngcontent-%COMP%]{border:0}table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #e4e4e4;display:block;margin-bottom:.75em}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none!important;display:block;font-size:1em;text-align:center}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-family:"Montserrat",sans-serif;font-weight:500}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.product-list-img[_ngcontent-%COMP%]{display:flex;justify-content:center}.custom-img-fluid[_ngcontent-%COMP%]{max-height:100px!important}}.custom-img-fluid[_ngcontent-%COMP%]{max-width:100%;height:auto;vertical-align:middle;border-style:none;max-height:75px}.edit--btn[_ngcontent-%COMP%]{align-items:center;background-color:#1fbfae;border:2px solid #1FBFAE;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.6em;justify-content:center;min-width:120px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation;border-radius:2px}.edit--btn[_ngcontent-%COMP%]:focus{color:#171e29}.edit--btn[_ngcontent-%COMP%]:hover{background-color:#36ddcc;border-color:#36ddcc;fill:#06f}.delete--btn[_ngcontent-%COMP%]{align-items:center;background-color:#bf1f30;border:2px solid #BF1F30;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.6em;justify-content:center;min-width:120px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation;border-radius:2px}.delete--btn[_ngcontent-%COMP%]:focus{color:#171e29}.delete--btn[_ngcontent-%COMP%]:hover{background-color:#e23244;border-color:#e23244;fill:#06f}.add--btn[_ngcontent-%COMP%]{align-items:center;background-color:#1f80bf;border:2px solid #1F80BF;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.6em;justify-content:center;min-width:120px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation;border-radius:2px}.add--btn[_ngcontent-%COMP%]:focus{color:#171e29}.add--btn[_ngcontent-%COMP%]:hover{background-color:#3385ff;border-color:#3385ff;fill:#06f}.container[_ngcontent-%COMP%]{margin-top:2em}.item-description-text[_ngcontent-%COMP%]{font-family:"Roboto",sans-serif;font-weight:600}']}),o})();class U{constructor(r){this.name="",this.shortDescription="",this.description="",this.technicalDescription="",this.price=0,this.pictureUrl="",Object.assign(this,r)}}var E=s(5758),x=s(5690),l=s(3679),J=s(5835),f=s(3877),b=s(1095);function I(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"Upload Image"),t.qZA())}function N(o,r){1&o&&(t.TgZ(0,"span"),t._UZ(1,"i",13),t._uU(2," Image Added"),t.qZA())}function S(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"div",11),t.TgZ(4,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().onUpload()}),t.YNc(5,I,2,0,"span",8),t.YNc(6,N,3,0,"span",8),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("src",e.croppedImage,t.LSH),t.xp6(2),t.Tol(e.imageIsAdded?"img-added-btn":"add-img-btn"),t.xp6(1),t.Q6J("ngIf",!1===e.imageIsAdded),t.xp6(1),t.Q6J("ngIf",e.imageIsAdded)}}let Z=(()=>{class o{constructor(){this.addFile=new t.vpe,this.files=[],this.imageChangedEvent="",this.croppedImage="",this.imageIsAdded=!1}ngOnInit(){}onUpload(){console.log((0,f.Ll)(this.croppedImage)),this.imageIsAdded=!0,this.addFile.emit((0,f.Ll)(this.croppedImage))}fileChangeEvent(e){this.imageChangedEvent=e}imageCropped(e){this.croppedImage=e.base64}onSelect(e){this.files=[],this.files.push(...e.addedFiles),this.fileChangeEvent(this.files[0])}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-photo-widget"]],outputs:{addFile:"addFile"},decls:20,vars:5,consts:[[1,"row-custom"],[1,"col-custom"],[1,"step-holder-info"],[1,"divider-preview"],["ngx-dropzone","",1,"custom-dropzone",3,"change"],["src","/assets/images/image-alt.svg","width","46px","alt","img-alt-icon",1,"img-fluid"],[1,"step-holder-info-drop"],["format","png",1,"img-fluid",3,"imageChangedEvent","imageFile","maintainAspectRatio","aspectRatio","imageCropped"],[4,"ngIf"],[1,"croppedImagePreview"],[1,"img-fluid",3,"src"],[1,"btn-holder"],[3,"click"],["aria-hidden","true",1,"fa","fa-check"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3,"Add Photo"),t.qZA(),t._UZ(4,"div",3),t.TgZ(5,"div",4),t.NdJ("change",function(c){return n.onSelect(c)}),t.TgZ(6,"ngx-dropzone-label"),t._UZ(7,"img",5),t.TgZ(8,"div",6),t._uU(9,"Drop Image here"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",1),t.TgZ(11,"div",2),t._uU(12,"Resize Image"),t.qZA(),t._UZ(13,"div",3),t.TgZ(14,"image-cropper",7),t.NdJ("imageCropped",function(c){return n.imageCropped(c)}),t.qZA(),t.qZA(),t.TgZ(15,"div",1),t.TgZ(16,"div",2),t._uU(17,"Preview"),t.qZA(),t._UZ(18,"div",3),t.YNc(19,S,7,6,"ng-container",8),t.qZA(),t.qZA()),2&e&&(t.xp6(14),t.Q6J("imageChangedEvent",n.imageChangedEvent)("imageFile",n.files[0])("maintainAspectRatio",!0)("aspectRatio",1),t.xp6(5),t.Q6J("ngIf",n.croppedImage))},directives:[b._f,b.NP,f.ap,a.O5],styles:['@import\'https://fonts.googleapis.com/css2?family=Lexend:wght@500&family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet\';@media screen and (min-width: 1968px){.row-custom[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-right:-15px;margin-left:-15px}.col-custom[_ngcontent-%COMP%]{min-width:25%!important;max-width:21em!important;margin-bottom:1em!important}}@media screen and (max-width: 870px){.col-custom[_ngcontent-%COMP%]{max-width:75%!important;min-width:20em!important}}.step-holder-info[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;font-weight:500;font-size:1.2em;margin-bottom:1em}.step-holder-info-drop[_ngcontent-%COMP%]{margin-top:.5em;font-family:"Montserrat",sans-serif;font-weight:500;font-size:1.2em;margin-bottom:1em}.divider-preview[_ngcontent-%COMP%]{border-bottom:1.5px solid #dee2e6;margin-bottom:1em}.croppedImagePreview[_ngcontent-%COMP%]{display:flex;justify-content:center}.custom-dropzone[_ngcontent-%COMP%]{border:2.5px dashed #eee;border-radius:3px;padding-top:30px;text-align:center;height:200px;margin-bottom:1.25em}.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%]{border:3px solid green}.btn-holder[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:1.85em}.add-img-btn[_ngcontent-%COMP%]{align-items:center;background-color:#1f80bf;border:2px solid #1F80BF;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:3.2em;justify-content:center;letter-spacing:-.3px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.add-img-btn[_ngcontent-%COMP%]:hover{background-color:#3385ff;border-color:#3385ff;fill:#06f}.img-added-btn[_ngcontent-%COMP%]{align-items:center;background-color:#1fbfaf00;border:2px solid #1fbfaf00;box-sizing:border-box;color:#1fbfae;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:1.25em;font-weight:600;height:3.2em;justify-content:center;letter-spacing:-.3px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.img-added-btn[_ngcontent-%COMP%]:hover{cursor:default}']}),o})();function Q(o,r){1&o&&(t.TgZ(0,"div",38),t._uU(1," Create new Product "),t._UZ(2,"div",39),t.qZA())}function k(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product Name is required "),t.qZA())}function Y(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,k,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(12);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function z(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product price is required "),t.qZA())}function j(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product price needs to be decimal value "),t.qZA())}function B(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product price must be greater than zero "),t.qZA())}function D(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,z,2,0,"div",37),t.YNc(2,j,2,0,"div",37),t.YNc(3,B,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(18);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.pattern),t.xp6(1),t.Q6J("ngIf",e.errors.min)}}function R(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," ProductSKU required. "),t.qZA())}function K(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,R,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function L(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product rating required. "),t.qZA())}function V(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,L,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function H(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Please provide a product picture. "),t.qZA())}function W(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,H,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function $(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Number of ratings required. "),t.qZA())}function X(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,$,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function G(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product Description is required "),t.qZA())}function tt(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,G,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function et(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product Short Description is required "),t.qZA())}function ot(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,et,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function nt(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Product Description is required "),t.qZA())}function it(o,r){if(1&o&&(t.TgZ(0,"div",40),t.YNc(1,nt,2,0,"div",37),t.qZA()),2&o){t.oxw();const e=t.MAs(26);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function rt(o,r){if(1&o&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&o){const e=r.$implicit,n=t.oxw();t.Q6J("selected",n.product.productBrandId===e.id)("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}function dt(o,r){if(1&o&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&o){const e=r.$implicit,n=t.oxw();t.Q6J("selected",n.product.productTypeId===e.id)("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}function ct(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"button",42),t._uU(2,"Submit"),t.qZA(),t.BQk()),2&o){const e=t.oxw(),n=t.MAs(6);t.xp6(1),t.Q6J("disabled",!n.valid||!1===e.imageAdded)}}function st(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"button",42),t._uU(2,"Submit"),t.qZA(),t.BQk()),2&o){t.oxw();const e=t.MAs(6);t.xp6(1),t.Q6J("disabled",!e.valid)}}function at(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-photo-widget",43),t.NdJ("addFile",function(d){return t.CHM(e),t.oxw().storeFile(d)}),t.qZA(),t.qZA()}}const p=function(o){return{"is-invalid":o}};let lt=(()=>{class o{constructor(e,n,d){this.route=e,this.adminService=n,this.router=d,this.isEditMode=!1,this.imageAdded=!1}ngOnInit(){this.checkIfEditMode()}updatePrice(e){this.product.price=e}onChange(e){this.file=e.target.files[0],console.log(this.file)}storeFile(e){this.imageAdded=!0,this.file=e}checkIfEditMode(){"edit"===this.route.snapshot.url[0].path&&(this.isEditMode=!0)}onSubmit(e,n){if("edit"===this.route.snapshot.url[0].path){const d=Object.assign(Object.assign(Object.assign({},this.product),e),{price:+e.price});this.adminService.updateProduct(d,+this.route.snapshot.paramMap.get("id")).subscribe(c=>{this.router.navigate(["/admin"])})}else{const d=Object.assign(Object.assign({},e),{price:+e.price});this.adminService.createProduct(d,this.file).subscribe(c=>{this.router.navigate(["/admin"])})}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.gz),t.Y36(u),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-product-form"]],inputs:{product:"product",brands:"brands",types:"types"},decls:84,vars:56,consts:[[1,"product-edit","mt-5"],[1,"container"],["class","create-title",4,"ngIf"],[1,"row"],[1,"col-lg-8"],["enctype","multipart/form-data",3,"ngSubmit"],["productForm","ngForm"],[1,"form-row"],[1,"form-group","col-md-6"],["for","name"],["required","","type","text","id","name","placeholder","Product Name","name","name",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["name","ngModel"],["class","invalid-feedback",4,"ngIf"],["for","price"],["required","","type","text","id","price","placeholder","Price","currencyMask","","name","price","pattern","^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9][0-9])?$",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["price","ngModel"],["for","productSKU"],["required","","id","productSKU","name","productSKU","rows","1",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["description","ngModel"],["for","productRatingScore"],["required","","id","productRatingScore","name","productRatingScore","rows","1",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"form-group","col-md-12"],["for","pictureUrl"],["required","","id","pictureUrl","name","pictureUrl","rows","1",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["for","numberOfRatings"],["required","","id","numberOfRatings","name","numberOfRatings","rows","1",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["for","technicalDescription"],["required","","id","technicalDescription","name","technicalDescription","rows","1",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["for","description"],["required","","id","shortdescription","name","shortDescription","rows","1",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["required","","id","description","name","description","rows","3",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["for","brand"],["id","brand","name","productBrandId","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"selected","ngValue",4,"ngFor","ngForOf"],["for","type"],["id","type","name","productTypeId","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn-holder-form"],[4,"ngIf"],[1,"create-title"],[1,"divider-line"],[1,"invalid-feedback"],[3,"selected","ngValue"],["type","submit",1,"add-now-btn",3,"disabled"],[3,"addFile"]],template:function(e,n){if(1&e){const d=t.EpF();t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.YNc(2,Q,3,0,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"form",5,6),t.NdJ("ngSubmit",function(){t.CHM(d);const i=t.MAs(6);return n.onSubmit(i.valid&&i.value)}),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.TgZ(9,"label",9),t._uU(10,"Product Name"),t.qZA(),t.TgZ(11,"input",10,11),t.NdJ("ngModelChange",function(i){return n.product.name=i}),t.qZA(),t.YNc(13,Y,2,1,"div",12),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"label",13),t._uU(16,"Price"),t.qZA(),t.TgZ(17,"input",14,15),t.NdJ("ngModelChange",function(i){return n.updatePrice(+i)}),t.ALo(19,"number"),t.qZA(),t.YNc(20,D,4,3,"div",12),t.qZA(),t.qZA(),t.TgZ(21,"div",7),t.TgZ(22,"div",8),t.TgZ(23,"label",16),t._uU(24,"ProductSKU"),t.qZA(),t.TgZ(25,"textarea",17,18),t.NdJ("ngModelChange",function(i){return n.product.productSKU=i}),t.qZA(),t.YNc(27,K,2,1,"div",12),t.qZA(),t.TgZ(28,"div",8),t.TgZ(29,"label",19),t._uU(30,"Product Rating Score (0-5)"),t.qZA(),t.TgZ(31,"textarea",20,18),t.NdJ("ngModelChange",function(i){return n.product.productRatingScore=i}),t.qZA(),t.YNc(33,V,2,1,"div",12),t.qZA(),t.qZA(),t.TgZ(34,"div",3),t.TgZ(35,"div",21),t.TgZ(36,"label",22),t._uU(37,"Picture URL"),t.qZA(),t.TgZ(38,"textarea",23,18),t.NdJ("ngModelChange",function(i){return n.product.pictureUrl=i}),t.qZA(),t.YNc(40,W,2,1,"div",12),t.qZA(),t.qZA(),t.TgZ(41,"div",7),t.TgZ(42,"div",21),t.TgZ(43,"label",24),t._uU(44,"Number of product ratings"),t.qZA(),t.TgZ(45,"textarea",25,18),t.NdJ("ngModelChange",function(i){return n.product.numberOfRatings=i}),t.qZA(),t.YNc(47,X,2,1,"div",12),t.qZA(),t.qZA(),t.TgZ(48,"div",7),t.TgZ(49,"div",21),t.TgZ(50,"label",26),t._uU(51,"Technical Description"),t.qZA(),t.TgZ(52,"textarea",27,18),t.NdJ("ngModelChange",function(i){return n.product.technicalDescription=i}),t.qZA(),t.YNc(54,tt,2,1,"div",12),t.qZA(),t.qZA(),t.TgZ(55,"div",7),t.TgZ(56,"div",21),t.TgZ(57,"label",28),t._uU(58,"Short Description"),t.qZA(),t.TgZ(59,"textarea",29,18),t.NdJ("ngModelChange",function(i){return n.product.shortDescription=i}),t.qZA(),t.YNc(61,ot,2,1,"div",12),t.qZA(),t.qZA(),t.TgZ(62,"div",7),t.TgZ(63,"div",21),t.TgZ(64,"label",28),t._uU(65,"Description"),t.qZA(),t.TgZ(66,"textarea",30,18),t.NdJ("ngModelChange",function(i){return n.product.description=i}),t.qZA(),t.YNc(68,it,2,1,"div",12),t.qZA(),t.qZA(),t.TgZ(69,"div",7),t.TgZ(70,"div",8),t.TgZ(71,"label",31),t._uU(72,"Brand"),t.qZA(),t.TgZ(73,"select",32),t.NdJ("ngModelChange",function(i){return n.product.productBrandId=i}),t.YNc(74,rt,2,3,"option",33),t.qZA(),t.qZA(),t.TgZ(75,"div",8),t.TgZ(76,"label",34),t._uU(77,"Type"),t.qZA(),t.TgZ(78,"select",35),t.NdJ("ngModelChange",function(i){return n.product.productTypeId=i}),t.YNc(79,dt,2,3,"option",33),t.qZA(),t.qZA(),t.qZA(),t.TgZ(80,"div",36),t.YNc(81,ct,3,1,"ng-container",37),t.YNc(82,st,3,1,"ng-container",37),t.qZA(),t.qZA(),t.YNc(83,at,2,0,"div",37),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const d=t.MAs(12),c=t.MAs(18),i=t.MAs(26);t.xp6(2),t.Q6J("ngIf",!n.isEditMode),t.xp6(9),t.Q6J("ngClass",t.VKq(38,p,d.invalid&&(d.dirty||d.touched)))("ngModel",n.product.name),t.xp6(2),t.Q6J("ngIf",d.invalid&&(d.dirty||d.touched)),t.xp6(4),t.Q6J("ngClass",t.VKq(40,p,c.invalid&&(c.dirty||c.touched)))("ngModel",t.xi3(19,35,+n.product.price,"1.2-2")),t.xp6(3),t.Q6J("ngIf",c.invalid&&(c.dirty||c.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(42,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.productSKU),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(4),t.Q6J("ngClass",t.VKq(44,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.productRatingScore),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(46,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.pictureUrl),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(48,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.numberOfRatings),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(50,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.technicalDescription),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(52,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.shortDescription),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(54,p,i.invalid&&(i.dirty||i.touched)))("ngModel",n.product.description),t.xp6(2),t.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),t.xp6(5),t.Q6J("ngModel",n.product.productBrandId),t.xp6(1),t.Q6J("ngForOf",n.brands),t.xp6(4),t.Q6J("ngModel",n.product.productTypeId),t.xp6(1),t.Q6J("ngForOf",n.types),t.xp6(2),t.Q6J("ngIf",!n.isEditMode),t.xp6(1),t.Q6J("ngIf",n.isEditMode),t.xp6(1),t.Q6J("ngIf",!n.isEditMode)}},directives:[a.O5,l._Y,l.JL,l.F,l.Fj,l.Q7,a.mk,l.JJ,l.On,J.g1,l.c5,l.EJ,a.sg,l.YN,l.Kr,Z],pipes:[a.JJ],styles:['@import\'https://fonts.googleapis.com/css2?family=Lexend:wght@500&family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet\';.create-title[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;font-weight:600;font-size:1.32em;margin-top:-.85em;margin-bottom:1.3em}.divider-line[_ngcontent-%COMP%]{margin-top:.3em;border-bottom:1.5px solid #dee2e6}.btn-holder-form[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:1.1em}.add-now-btn[_ngcontent-%COMP%]{align-items:center;background-color:#1f80bf;border:2px solid #1F80BF;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:3em;justify-content:center;letter-spacing:-.3px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.add-now-btn[_ngcontent-%COMP%]:disabled{background-color:#1f7fbf4b;border:2px solid #1f7fbf4b}.add-now-btn[_ngcontent-%COMP%]:disabled:hover{background-color:#1f7fbf4b;border:2px solid #1f7fbf4b;cursor:default}.add-now-btn[_ngcontent-%COMP%]:focus{color:#171e29}.add-now-btn[_ngcontent-%COMP%]:hover{background-color:#3385ff;border-color:#3385ff;fill:#06f}']}),o})();var pt=s(2290);function gt(o,r){1&o&&(t.ynx(0),t._uU(1,"Set"),t.BQk())}function ut(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",8),t.TgZ(1,"div",9),t._UZ(2,"img",10),t.TgZ(3,"div",11),t.TgZ(4,"button",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).setMainPhoto(c.id)}),t.YNc(5,gt,2,0,"ng-container",2),t._uU(6," Main image "),t.qZA(),t.TgZ(7,"button",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).deletePhoto(c.id)}),t._UZ(8,"i",13),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit;t.xp6(2),t.s9C("src",e.pictureUrl,t.LSH),t.s9C("alt",e.fileName),t.xp6(2),t.Tol(e.isMain?"img-controll-btn":"img-hollow-controll-btn"),t.Q6J("disabled",e.isMain),t.xp6(1),t.Q6J("ngIf",!1===e.isMain),t.xp6(2),t.Tol(e.isMain?"img-delete-controll-btn":"img-delete-hollow-controll-btn"),t.Q6J("disabled",e.isMain)}}function mt(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",3),t.TgZ(2,"span",4),t._uU(3,"Product Photos"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw().addPhotoModeToggle()}),t._uU(5," Add New Photo "),t.qZA(),t.qZA(),t.TgZ(6,"div",6),t.YNc(7,ut,9,11,"div",7),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(7),t.Q6J("ngForOf",null==e.product?null:e.product.photos)}}function ft(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",3),t.TgZ(2,"span",14),t._uU(3,"Add new product image"),t.qZA(),t.TgZ(4,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().addPhotoModeToggle()}),t._uU(5,"Cancel"),t.qZA(),t.qZA(),t.TgZ(6,"div",16),t.TgZ(7,"app-photo-widget",17),t.NdJ("addFile",function(d){return t.CHM(e),t.oxw().uploadFile(d)}),t.qZA(),t.qZA(),t.BQk()}}let ht=(()=>{class o{constructor(e,n){this.adminService=e,this.toast=n,this.progress=0,this.addPhotoMode=!1}ngOnInit(){}addPhotoModeToggle(){this.addPhotoMode=0==this.addPhotoMode}uploadFile(e){this.adminService.uploadImage(e,this.product.id).subscribe(n=>{switch(n.type){case m.dt.UploadProgress:this.progress=Math.round(n.loaded/n.total*100);break;case m.dt.Response:this.product=n.body,setTimeout(()=>{this.progress=0,this.addPhotoMode=!1},1500)}},n=>{this.toast.error(n.errors?n.errors[0]:"Problem uploading image"),this.progress=0})}deletePhoto(e){this.adminService.deleteProductPhoto(e,this.product.id).subscribe(()=>{const n=this.product.photos.findIndex(d=>d.id===e);this.product.photos.splice(n,1)},n=>{this.toast.error("Problem deleting photo"),console.log(n)})}setMainPhoto(e){this.adminService.setMainPhoto(e,this.product.id).subscribe(n=>{this.product=n})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u),t.Y36(pt._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-product-photos"]],inputs:{product:"product"},decls:4,vars:2,consts:[[1,"py-5"],[1,"container"],[4,"ngIf"],[1,"d-flex","justify-content-between","mb-3"],[1,"product-photo-title"],[1,"add-now-btn",3,"click"],[1,"row-custom"],["class","col-custom",4,"ngFor","ngForOf"],[1,"col-custom"],[1,"card"],["width","100%","height","225",1,"card-img-top",3,"src","alt"],[1,"btn-group-custom",2,"width","100%"],["type","button",2,"width","50%",3,"disabled","click"],[1,"fa","fa-trash"],[1,"product-photo-title-large"],[1,"img-delete-hollow-controll-btn",3,"click"],[1,"app-widget-container"],[3,"addFile"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,mt,8,1,"ng-container",2),t.YNc(3,ft,8,0,"ng-container",2),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",!n.addPhotoMode),t.xp6(1),t.Q6J("ngIf",n.addPhotoMode))},directives:[a.O5,a.sg,Z],styles:['@import\'https://fonts.googleapis.com/css2?family=Lexend:wght@500&family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet\';@media screen and (max-width: 870px){.col-custom[_ngcontent-%COMP%]{max-width:75%!important;min-width:20em!important}}@media screen and (min-width: 871px){.row-custom[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-custom[_ngcontent-%COMP%]{min-width:25%!important}}.app-widget-container[_ngcontent-%COMP%]{margin-top:2em}.product-photo-title[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;font-weight:500;font-size:1.25em}.product-photo-title-large[_ngcontent-%COMP%]{font-family:"Montserrat",sans-serif;font-weight:600;font-size:1.35em}.btn-group-custom[_ngcontent-%COMP%]{position:relative;display:inline-flex;vertical-align:middle;margin-top:.65em}.add-now-btn[_ngcontent-%COMP%]{align-items:center;background-color:#1f80bf;border:2px solid #1F80BF;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:3.2em;justify-content:center;letter-spacing:-.3px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.add-now-btn[_ngcontent-%COMP%]:focus{color:#171e29}.add-now-btn[_ngcontent-%COMP%]:hover{background-color:#3385ff;border-color:#3385ff;fill:#06f}.img-controll-btn[_ngcontent-%COMP%]{align-items:center;background-color:#1f7fbf6c;border:2px solid #1f7fbf2d;box-sizing:border-box;color:#fff;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.85em;justify-content:center;letter-spacing:-.3px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.img-hollow-controll-btn[_ngcontent-%COMP%]{align-items:center;background-color:#1f80bf;border:3px solid #1F80BF;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.85em;justify-content:center;letter-spacing:-.3px;line-height:18px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.img-hollow-controll-btn[_ngcontent-%COMP%]:focus{color:#171e29}.img-hollow-controll-btn[_ngcontent-%COMP%]:hover{background-color:#3385ff;border-color:#3385ff;color:#fff;fill:#06f}.img-delete-controll-btn[_ngcontent-%COMP%]{align-items:center;background-color:#bf1f2f69;border:2px solid #bf1f2f13;box-sizing:border-box;color:#ffffff8a;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.85em;justify-content:center;letter-spacing:-.3px;line-height:24px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.img-delete-hollow-controll-btn[_ngcontent-%COMP%]{align-items:center;background-color:#bf1f30;border:3px solid #BF1F30;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;fill:#000;font-family:"Montserrat",sans-serif;font-size:16px;font-weight:600;height:2.85em;justify-content:center;letter-spacing:-.3px;line-height:18px;min-width:140px;outline:0;padding:0 17px;text-align:center;text-decoration:none;transition:all .3s;user-select:none;-webkit-user-select:none;touch-action:manipulation}.img-delete-hollow-controll-btn[_ngcontent-%COMP%]:focus{color:#171e29}.img-delete-hollow-controll-btn[_ngcontent-%COMP%]:hover{background-color:#de3345;border-color:#de3345;color:#fff;fill:#06f}']}),o})();function _t(o,r){if(1&o&&(t.TgZ(0,"tab",10),t._UZ(1,"app-edit-product-photos",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("product",e.product)}}let v=(()=>{class o{constructor(e,n,d,c){this.adminService=e,this.shopService=n,this.route=d,this.router=c,this.showEditPhotos=!1,this.productFormValues=new U}ngOnInit(){const e=this.getBrands(),n=this.getProductTypes();(0,E.D)([n,e]).subscribe(d=>{this.types=d[0],this.brands=d[1]},d=>{console.log(d)},()=>{"edit"===this.route.snapshot.url[0].path&&(this.loadProduct(),this.showEditPhotos=!0)})}loadProduct(){this.shopService.getProduct(+this.route.snapshot.paramMap.get("id")).subscribe(e=>{const n=this.brands&&this.brands.find(c=>c.name===e.productBrand).id,d=this.types&&this.types.find(c=>c.name===e.productType).id;this.product=e,this.productFormValues=Object.assign(Object.assign({},e),{productBrandId:n,productTypeId:d})})}getBrands(){return this.shopService.getBrands()}getProductTypes(){return this.shopService.getProductTypes()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u),t.Y36(_.d),t.Y36(g.gz),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-product"]],decls:10,vars:4,consts:[[1,"product-edit","mt-5"],[1,"container"],[1,"row"],[1,"col-12"],[1,"tab-panel"],[1,"product-tabset"],["heading","Edit Product"],[1,"col-lg-8"],[3,"product","brands","types"],["heading","Edit Photos",4,"ngIf"],["heading","Edit Photos"],[3,"product"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"tabset",5),t.TgZ(6,"tab",6),t.TgZ(7,"div",7),t._UZ(8,"app-edit-product-form",8),t.qZA(),t.qZA(),t.YNc(9,_t,2,1,"tab",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("product",n.productFormValues)("brands",n.brands)("types",n.types),t.xp6(1),t.Q6J("ngIf",!0===n.showEditPhotos))},directives:[x.AH,x.wW,lt,a.O5,ht],styles:[""]}),o})();const xt=[{path:"",component:O},{path:"create",component:v,data:{breadcrumb:"Create"}},{path:"edit/:id",component:v,data:{breadcrumb:"Edit"}}];let bt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(xt)],g.Bz]}),o})(),Zt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.ez,C.m,bt]]}),o})()}}]);