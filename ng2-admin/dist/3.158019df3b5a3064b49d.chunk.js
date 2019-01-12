webpackJsonp([3],{1e3:function(t,n){t.exports=".status-button{width:60px}\n"},1001:function(t,n){t.exports=".status-button{width:60px}\n"},1002:function(t,n){t.exports=".status-button{width:60px}\n"},1033:function(t,n){t.exports='<div class="horizontal-scroll">\n  <table class="table table-hover">\n    <thead>\n      <tr class="black-muted-bg">\n        <th>#</th>\n        <th>UID</th>\n        <th class="align-left">Email</th>\n        <th class="align-left">Username</th>\n        <th class="align-left">Name</th>\n        <th class="align-right">Role</th>\n        <th class="align-right">Change Role</th>\n        <th class="align-right"># Systems/Clients</th>\n        <th class="align-right"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let user of users; let i=index" class="no-top-border">\n        <td class="align-left">{{ i + 1 }}</td>\n        <td class="align-left">\n          <span>{{ user.$key }}</span>\n        </td>\n        <td class="align-left">\n          <span>{{ user.email }}</span>\n        </td>\n        <td class="align-left">\n          <span>{{ user.user_name }}</span>\n        </td>\n        <td class="align-left">\n          <span>{{ user.first_name }} {{ user.last_name }}</span>\n        </td>\n        <td class="align-right">\n          <span>{{ user.role }}</span>\n        </td>\n        <td class="align-right">\n          <div class="form-group">\n            <select placeholder="Role" (change)="changeRole(user.$key, $event.target.value)">\n             <option *ngFor="let role of roles" [ngValue]="role.value" [selected]="role.value == user.role" >\n                   {{ role.value }}\n             </option>\n          </select>\n          </div>\n        </td>\n        <td class="align-right">\n          <span class="label label-default" *ngIf="user.systems; else admin_template">\n              <span>{{ user.systems?.length || \'0\' }}</span>\n          </span>\n          <ng-template #admin_template>\n            <span class="label label-danger">\n              <span>{{ user.clients?.length || \'0\' }}</span>\n            </span>\n          </ng-template>\n        </td>\n        <td class="align-right">\n          <a class="btn btn-xs btn-info" [routerLink]="[\'/pages/users/view\', user.$key]" role="button">\n            <i class="fa fa-eye"></i> View\n          </a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'},1034:function(t,n){t.exports='<div class="widgets">\n  <div class="row">\n    <div class="col-lg-12 col-md-12">\n      <ba-card title="Systems" baCardClass="with-scroll table-panel">\n        <users-table></users-table>\n      </ba-card>\n    </div>\n  </div>\n</div>\n'},1035:function(t,n){t.exports='<div class="widgets">\n  <div class="row">\n    <div class="col-lg-12 col-md-12">\n      <ba-card title="Overview" baCardClass="with-scroll table-panel">\n\n      </ba-card>\n    </div>\n  </div>\n</div>\n'},1036:function(t,n){t.exports='<div class="horizontal-scroll">\n  <table class="table table-hover">\n    <thead>\n      <tr class="black-muted-bg">\n        <th></th>\n        <th class="align-left">Detail</th>\n        <th class="align-left">Value</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class="no-top-border">\n        <td></td>\n        <td class="align-left">UID</td>\n        <td class="align-left">{{ user_id }}</td>\n      </tr>\n      <tr class="no-top-border">\n        <td></td>\n        <td class="align-left">Username</td>\n        <td class="align-left">{{ user.user_name }}</td>\n      </tr>\n      <tr class="no-top-border">\n        <td></td>\n        <td class="align-left">Name</td>\n        <td class="align-left">{{ user.first_name }} {{ user.last_name }}</td>\n      </tr>\n      <tr class="no-top-border">\n        <td></td>\n        <td class="align-left">Email</td>\n        <td class="align-left">{{ user.email }}</td>\n      </tr>\n      <tr class="no-top-border">\n        <td></td>\n        <td class="align-left">Role</td>\n        <td class="align-left">{{ user.role }}</td>\n      </tr>\n      <tr class="no-top-border">\n        <td></td>\n        <td class="align-left">Number of systems</td>\n        <td class="align-left">\n          <span *ngIf="user.systems; else admin_template">\n            {{ user.systems?.length || \'0\' }}\n          </span>\n          <ng-template #admin_template>\n            <span>\n            {{ user.clients?.length || \'0\' }}\n            </span>\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'},1037:function(t,n){t.exports='<div class="widgets">\n  <div class="row">\n    <div class="col-lg-6 col-md-6">\n      <ba-card title="User Details" baCardClass="with-scroll table-panel">\n        <user-details></user-details>\n      </ba-card>\n    </div>\n  </div>\n</div>\n'},1056:function(t,n,e){var s=e(1e3);"string"==typeof s&&(s=[[t.i,s,""]]);e(30)(s,{});s.locals&&(t.exports=s.locals)},1057:function(t,n,e){var s=e(1001);"string"==typeof s&&(s=[[t.i,s,""]]);e(30)(s,{});s.locals&&(t.exports=s.locals)},1058:function(t,n,e){var s=e(1002);"string"==typeof s&&(s=[[t.i,s,""]]);e(30)(s,{});s.locals&&(t.exports=s.locals)},881:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"UsersModule",(function(){return b}));var s=e(0),a=e(16),r=e(21),l=e(195),i=e(194),o=e(483),c=e(969),u=e(918),d=e(964),p=e(962),f=e(965),g=e(917),h=e(966),b=(function(){function t(){}return t})();b=__decorate([e.i(s.z)({imports:[a.d,r.a,l.a,i.a,o.b,o.c,c.a,r.a,r.b,o.f],declarations:[u.a,d.a,p.a,g.a,h.a,f.a],entryComponents:[],providers:[]})],b)},915:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var s=e(0),a=e(1056),r=(e.n(a),e(57)),l=(e.n(r),e(485)),i=(e.n(l),(function(){function t(){}return t})());i=__decorate([e.i(s._10)({selector:"user-manager",template:e(1034)}),__metadata("design:paramtypes",[])],i)},916:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var s=e(0),a=e(1057),r=(e.n(a),e(57)),l=(e.n(r),e(485)),i=(e.n(l),(function(){function t(){}return t})());i=__decorate([e.i(s._10)({selector:"user-overview",template:e(1035)}),__metadata("design:paramtypes",[])],i)},917:function(t,n,e){"use strict";var s=e(968);e.d(n,"a",(function(){return s.a}))},918:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var s=e(0),a=(function(){function t(){}return t})();a=__decorate([e.i(s._10)({selector:"users",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],a)},962:function(t,n,e){"use strict";var s=e(963);e.d(n,"a",(function(){return s.a}))},963:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var s=e(0),a=e(196),r=(function(){function t(t){this.userService=t,this.roles=[{value:"client"},{value:"installer"},{value:"admin"}]}return t.prototype.ngOnInit=function(){var t=this;this.users=[],this.userService.getUsers().subscribe((function(n){t.users=n}))},t.prototype.changeRole=function(t,n){this.userService.updateUserRole(t,n.toLowerCase())},t})();r=__decorate([e.i(s._10)({selector:"users-table",styles:[e(999)],template:e(1033)}),__metadata("design:paramtypes",[a.a])],r)},964:function(t,n,e){"use strict";var s=e(915);e.d(n,"a",(function(){return s.a}))},965:function(t,n,e){"use strict";var s=e(916);e.d(n,"a",(function(){return s.a}))},966:function(t,n,e){"use strict";var s=e(967);e.d(n,"a",(function(){return s.a}))},967:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var s=e(0),a=e(484),r=e(196),l=e(33),i=(function(){function t(t,n,e){this.firebaseService=t,this.userService=n,this.route=e}return t.prototype.ngOnInit=function(){var t=this;this.routerSub=this.route.params.subscribe((function(n){t.user_id=n.id,t.userSub=t.userService.getUserObject(t.user_id).subscribe((function(n){t.user=n}))}))},t.prototype.ngOnDestroy=function(){this.routerSub.unsubscribe(),this.userSub.unsubscribe()},t})();i=__decorate([e.i(s._10)({selector:"user-details",template:e(1036)}),__metadata("design:paramtypes",[a.a,r.a,l.c])],i)},968:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var s=e(0),a=e(1058),r=(e.n(a),e(57)),l=(e.n(r),e(485)),i=(e.n(l),(function(){function t(){}return t})());i=__decorate([e.i(s._10)({selector:"view-user",template:e(1037)}),__metadata("design:paramtypes",[])],i)},969:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var s=e(33),a=e(918),r=e(916),l=e(915),i=e(917),o=[{path:"",component:a.a,children:[{path:"overview",component:r.a},{path:"manager",component:l.a},{path:"view/:id",component:i.a}]}],c=s.a.forChild(o)},999:function(t,n){t.exports=".label{padding-top:3px;padding-bottom:3px;padding-left:10px;padding-right:10px;border-radius:5px}\n"}});