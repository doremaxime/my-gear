"use strict";define("my-gear/adapters/application",["exports","my-gear/config/environment","active-model-adapter","ember"],function(e,t,n,a){e.default=n.default.extend({host:t.default.apiHost,auth:a.default.inject.service(),headers:a.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token");return t&&(e.Authorization="Token token="+t),e}})})}),define("my-gear/app",["exports","ember","my-gear/resolver","ember-load-initializers","my-gear/config/environment"],function(e,t,n,a,s){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:s.default.modulePrefix,podModulePrefix:s.default.podModulePrefix,Resolver:n.default}),(0,a.default)(l,s.default.modulePrefix),e.default=l}),define("my-gear/components/change-password-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],passwords:{},actions:{submit:function(){this.sendAction("submit",this.get("passwords"))},reset:function(){this.set("passwords",{})}}})}),define("my-gear/components/email-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("my-gear/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("my-gear/components/hamburger-menu",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"button",classNames:["navbar-toggle","collapsed"],attributeBindings:["toggle:data-toggle","target:data-target","expanded:aria-expanded"],toggle:"collapse",target:"#navigation",expanded:!1})}),define("my-gear/components/my-application",["exports","ember"],function(e,t){e.default=t.default.Component.extend({auth:t.default.inject.service(),user:t.default.computed.alias("auth.credentials.email"),isAuthenticated:t.default.computed.alias("auth.isAuthenticated"),actions:{signOut:function(){this.sendAction("signOut")}}})}),define("my-gear/components/navbar-header",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["navbar-header"]})}),define("my-gear/components/password-confirmation-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("my-gear/components/password-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("my-gear/components/sign-in-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("my-gear/components/sign-up-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],credentials:{},actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("my-gear/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("my-gear/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("my-gear/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("my-gear/helpers/app-version",["exports","ember","my-gear/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,a){function s(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?l.match(a.versionRegExp)[0]:t.hideVersion?l.match(a.shaRegExp)[0]:l}e.appVersion=s;var l=n.default.APP.version;e.default=t.default.Helper.helper(s)}),define("my-gear/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("my-gear/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("my-gear/initializers/active-model-adapter",["exports","active-model-adapter","active-model-adapter/active-model-serializer"],function(e,t,n){e.default={name:"active-model-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("adapter:-active-model",t.default),e.register("serializer:-active-model",n.default)}}}),define("my-gear/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","my-gear/config/environment"],function(e,t,n){var a=n.default.APP,s=a.name,l=a.version;e.default={name:"App Version",initialize:(0,t.default)(s,l)}}),define("my-gear/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("my-gear/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("my-gear/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("my-gear/initializers/export-application-global",["exports","ember","my-gear/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var s,l=n.default.exportApplicationGlobal;s="string"==typeof l?l:t.default.String.classify(n.default.modulePrefix),a[s]||(a[s]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[s]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("my-gear/initializers/flash-messages",["exports","ember","my-gear/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0],t=n.default||{},a=t.flashMessageDefaults,r=a||[],m=r.injectionFactories,u=l(o,a),c=!(m&&m.length);e.register("config:flash-messages",u,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),s(i,c,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),u.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=a;var s=t.default.deprecate,l=t.default.assign||t.default.merge,i="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",o={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1};e.default={name:"flash-messages",initialize:a}}),define("my-gear/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("my-gear/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("my-gear/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("my-gear/initializers/text-field",["exports","ember"],function(e,t){function n(){t.default.TextField.reopen({classNames:["form-control"]})}e.initialize=n,e.default={name:"text-field",initialize:n}}),define("my-gear/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("my-gear/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("my-gear/models/user",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({email:t.default.attr("string")})}),define("my-gear/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("my-gear/router",["exports","ember","my-gear/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType});a.map(function(){this.route("sign-up"),this.route("sign-in"),this.route("change-password"),this.route("users")}),e.default=a}),define("my-gear/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signOut:function(){var e=this;this.get("auth").signOut().then(function(){return e.get("store").unloadAll()}).then(function(){return e.transitionTo("sign-in")}).then(function(){e.get("flashMessages").warning("You have been signed out.")}).catch(function(){e.get("flashMessages").danger("There was a problem. Are you sure you're signed-in?")})},error:function(e){return e.errors&&e.errors.some(function(e){return"401"===e.status})?(this.get("flashMessages").danger("You must be authenticated to access this page."),this.transitionTo("/sign-in")):this.get("flashMessages").danger("There was a problem. Please try again."),!1}}})}),define("my-gear/routes/change-password",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{changePassword:function(e){var t=this;this.get("auth").changePassword(e).then(function(){return t.get("auth").signOut()}).then(function(){return t.transitionTo("sign-in")}).then(function(){t.get("flashMessages").success("Successfully changed your password!")}).then(function(){t.get("flashMessages").warning("You have been signed out.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("my-gear/routes/sign-in",["exports","ember","rsvp"],function(e,t,n){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),model:function(){return n.default.Promise.resolve({})},actions:{signIn:function(e){var t=this;return this.get("auth").signIn(e).then(function(){return t.transitionTo("application")}).then(function(){return t.get("flashMessages").success("Thanks for signing in!")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("my-gear/routes/sign-up",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signUp:function(e){var t=this;this.get("auth").signUp(e).then(function(){return t.get("auth").signIn(e)}).then(function(){return t.transitionTo("application")}).then(function(){t.get("flashMessages").success("Successfully signed-up! You have also been signed-in.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("my-gear/routes/users",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("user")}})}),define("my-gear/serializers/application",["exports","active-model-adapter"],function(e,t){e.default=t.ActiveModelSerializer.extend({})}),define("my-gear/services/ajax",["exports","ember","ember-ajax/services/ajax","my-gear/config/environment"],function(e,t,n,a){e.default=n.default.extend({host:a.default.apiHost,auth:t.default.inject.service(),headers:t.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token");return t&&(e.Authorization="Token token="+t),e}})})}),define("my-gear/services/auth",["exports","ember","ember-local-storage"],function(e,t,n){e.default=t.default.Service.extend({ajax:t.default.inject.service(),credentials:(0,n.storageFor)("auth"),isAuthenticated:t.default.computed.bool("credentials.token"),signUp:function(e){return this.get("ajax").post("/sign-up",{data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})},signIn:function(e){var t=this;return this.get("ajax").post("/sign-in",{data:{credentials:{email:e.email,password:e.password}}}).then(function(e){t.get("credentials").set("id",e.user.id),t.get("credentials").set("email",e.user.email),t.get("credentials").set("token",e.user.token)})},changePassword:function(e){return this.get("ajax").patch("/change-password/"+this.get("credentials.id"),{data:{passwords:{old:e.previous,new:e.next}}})},signOut:function(){var e=this;return this.get("ajax").del("/sign-out/"+this.get("credentials.id")).finally(function(){return e.get("credentials").reset()})}})}),define("my-gear/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("my-gear/storages/auth",["exports","ember-local-storage/local/object"],function(e,t){e.default=t.default.extend({})}),define("my-gear/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8S608pwy",block:'{"statements":[["append",["helper",["my-application"],null,[["signOut"],["signOut"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/application.hbs"}})}),define("my-gear/templates/change-password",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"tCiS/6fv",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Change Password"],["close-element"],["text","\\n\\n"],["append",["helper",["change-password-form"],null,[["submit"],["changePassword"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/change-password.hbs"}})}),define("my-gear/templates/components/change-password-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ln+/YmlI",block:'{"statements":[["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","previous"],["flush-element"],["text","Old Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","previous","Old password",["get",["passwords","previous"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","next"],["flush-element"],["text","New Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","next","New password",["get",["passwords","next"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Change Password\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/change-password-form.hbs"}})}),define("my-gear/templates/components/email-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"dXPnPn/7",block:'{"statements":[["open-element","label",[]],["static-attr","for","email"],["flush-element"],["text","Email"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["email","email","Email",["get",["email"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/email-input.hbs"}})}),define("my-gear/templates/components/hamburger-menu",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"n90t6Xbw",block:'{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","sr-only"],["flush-element"],["text","Toggle navigation"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/hamburger-menu.hbs"}})}),define("my-gear/templates/components/my-application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ed899FLE",block:'{"statements":[["open-element","nav",[]],["static-attr","class","navbar navbar-default"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","container-fluid"],["flush-element"],["text","\\n    "],["append",["unknown",["navbar-header"]],false],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","collapse navbar-collapse"],["static-attr","id","navigation"],["flush-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,7],["text","      "],["close-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav navbar-right"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,5,3],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","h1",[]],["flush-element"],["text","Welcome to Ember!"],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["flashMessages","queue"]]],null,0],["text","\\n"],["open-element","div",[]],["static-attr","class","col-md-8 col-md-offset-2"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["append",["helper",["flash-message"],null,[["flash"],[["get",["flash"]]]]],false],["text","\\n"]],"locals":["flash"]},{"statements":[["text","Sign In"]],"locals":[]},{"statements":[["text","Sign Up"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-up"],null,2],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-in"],null,1],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Change Password"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["change-password"],null,4],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","a",[]],["static-attr","href","#"],["modifier",["action"],[["get",[null]],"signOut"]],["flush-element"],["text","Sign Out"],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Users"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["users"],null,6],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/my-application.hbs"}})}),define("my-gear/templates/components/navbar-header",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"1oPZ1THR",block:'{"statements":[["append",["unknown",["hamburger-menu"]],false],["text","\\n"],["block",["link-to"],["application"],[["class"],["navbar-brand"]],0],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Home"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/navbar-header.hbs"}})}),define("my-gear/templates/components/password-confirmation-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8QrRqjXg",block:'{"statements":[["open-element","label",[]],["static-attr","for","password-confirmation"],["flush-element"],["text","Password Confirmation"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password-confirmation","Password Confirmation",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/password-confirmation-input.hbs"}})}),define("my-gear/templates/components/password-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"s+XBmfgC",block:'{"statements":[["open-element","label",[]],["static-attr","for","kind"],["flush-element"],["text","Password"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password","Password",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/password-input.hbs"}})}),define("my-gear/templates/components/sign-in-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"zMwmDrJq",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign In\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/sign-in-form.hbs"}})}),define("my-gear/templates/components/sign-up-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mmjuGL9d",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n"],["append",["helper",["password-confirmation-input"],null,[["password"],[["get",["credentials","passwordConfirmation"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign Up\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/components/sign-up-form.hbs"}})}),define("my-gear/templates/sign-in",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"p3JTQEtl",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign In"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-in-form"],null,[["submit","reset","credentials"],["signIn","reset",["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/sign-in.hbs"}})}),define("my-gear/templates/sign-up",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"QrSPWPfT",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign Up"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-up-form"],null,[["submit"],["signUp"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"my-gear/templates/sign-up.hbs"}})}),define("my-gear/templates/users",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"csIwsXo5",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Users"],["close-element"],["text","\\n\\n"],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["model"]]],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","li",[]],["flush-element"],["append",["unknown",["user","email"]],false],["close-element"],["text","\\n"]],"locals":["user"]}],"hasPartials":false}',meta:{moduleName:"my-gear/templates/users.hbs"}})}),define("my-gear/config/environment",["ember"],function(e){try{var t="my-gear/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),a=JSON.parse(unescape(n)),s={default:a};return Object.defineProperty(s,"__esModule",{value:!0}),s}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("my-gear/app").default.create({name:"my-gear",version:"0.0.0+c8fc95f0"});