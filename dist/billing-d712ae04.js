(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[5],{1612:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(3),i=s(0),a=s.n(i),o=s(1602),d=s(1483),l=s(536),u=s(1433),c=s(1404),g=s(1506),m=s(1437),h=s(1427),p=(s(543),s(78)),b=s(41),A=s(1603),f=s(1604),C=s(1610),_=s(533),v=s(531),y=s(234),E=s(1605),S=s(1426),k=s(1435),w=s(1436),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isResettingAddress:!1},t.addressFormRef=Object(i.createRef)(),t.handleSelectAddress=function(e){return n.__awaiter(t,void 0,void 0,(function(){var t,s,r,i;return n.__generator(this,(function(n){switch(n.label){case 0:t=this.props,s=t.updateAddress,r=t.onUnhandledError,this.setState({isResettingAddress:!0}),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,s(e)];case 2:return n.sent(),[3,5];case 3:return i=n.sent(),r(i),[3,5];case 4:return this.setState({isResettingAddress:!1}),[7];case 5:return[2]}}))}))},t.handleUseNewAddress=function(){t.handleSelectAddress({})},t}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.googleMapsApiKey,s=e.billingAddress,n=e.countriesWithAutocomplete,r=e.customer.addresses,i=e.getFields,o=e.countries,d=e.isUpdating,l=e.setFieldValue,u=e.shouldShowOrderComments,g=e.values,m=this.state.isResettingAddress,p=r&&r.length>0,b=s&&Object(A.a)(s,r,i(s.countryCode));return a.a.createElement(k.a,{autoComplete:"on"},a.a.createElement(w.a,{id:"checkoutBillingAddress",ref:this.addressFormRef},p&&a.a.createElement(w.a,{id:"billingAddresses"},a.a.createElement(h.a,{isLoading:m},a.a.createElement(f.a,{addresses:r,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:b?s:void 0}))),!b&&a.a.createElement(h.a,{isLoading:m},a.a.createElement(C.a,{countries:o,countriesWithAutocomplete:n,countryCode:g.countryCode,formFields:i(g.countryCode),googleMapsApiKey:t,setFieldValue:l}))),u&&a.a.createElement(E.a,null),a.a.createElement("div",{className:"form-actions"},a.a.createElement(S.c,{disabled:d||m,id:"checkout-billing-continue",isLoading:d||m,type:"submit",variant:S.b.Primary},a.a.createElement(c.a,{id:"common.continue_action"}))))},t}(i.PureComponent),F=Object(y.a)(Object(p.withFormik)({handleSubmit:function(e,t){(0,t.props.onSubmit)(e)},mapPropsToValues:function(e){var t=e.getFields,s=e.customerMessage,r=e.billingAddress;return n.__assign({},Object(_.a)(t(r&&r.countryCode),r),{orderComment:s})},isInitialValid:function(e){var t=e.billingAddress,s=e.getFields,n=e.language;return!!t&&Object(v.a)({language:n,formFields:s(t.countryCode)}).isValidSync(t)},validationSchema:function(e){var t=e.language,s=e.getFields;return Object(b.lazy)((function(e){return Object(v.a)({language:t,formFields:s(e&&e.countryCode)})}))},enableReinitialize:!0})(O)),U=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return n.__awaiter(t,void 0,void 0,(function(){var t,s,r,i,a,l,u,c,g,m,h=e.orderComment,p=n.__rest(e,["orderComment"]);return n.__generator(this,(function(e){switch(e.label){case 0:t=this.props,s=t.updateAddress,r=t.updateCheckout,i=t.customerMessage,a=t.billingAddress,l=t.navigateNextStep,u=t.onUnhandledError,c=[],(g=Object(o.a)(p))&&!Object(d.a)(g,a)&&c.push(s(g)),i!==h&&c.push(r({customerMessage:h})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Promise.all(c)];case 2:return e.sent(),l(),[3,4];case 3:return m=e.sent(),u(m),[3,4];case 4:return[2]}}))}))},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){return n.__awaiter(this,void 0,Promise,(function(){var e,t,s,i,a,o;return n.__generator(this,(function(n){switch(n.label){case 0:e=this.props,t=e.initialize,s=e.onReady,i=void 0===s?r.noop:s,a=e.onUnhandledError,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t()];case 2:return n.sent(),i(),[3,4];case 3:return o=n.sent(),a(o),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props,t=e.updateAddress,s=e.isInitializing,r=n.__rest(e,["updateAddress","isInitializing"]);return a.a.createElement("div",{className:"checkout-form"},a.a.createElement("div",{className:"form-legend-container"},a.a.createElement(m.a,{testId:"billing-address-heading"},a.a.createElement(c.a,{id:"billing.billing_address_heading"}))),a.a.createElement(h.a,{isLoading:s,unmountContentWhenLoading:!0},a.a.createElement(F,n.__assign({},r,{onSubmit:this.handleSubmit,updateAddress:t}))))},t}(i.Component);t.default=Object(l.a)((function(e){var t=e.checkoutService,s=e.checkoutState,n=s.data,r=n.getCheckout,i=n.getConfig,a=n.getCart,o=n.getCustomer,d=n.getBillingAddress,l=n.getBillingAddressFields,c=n.getBillingCountries,m=s.statuses,h=m.isLoadingBillingCountries,p=m.isUpdatingBillingAddress,b=m.isUpdatingCheckout,A=i(),f=o(),C=r(),_=a();if(!(A&&f&&C&&_))return null;var v=A.checkoutSettings,y=v.enableOrderComments,E=v.googleMapsApiKey,S=["US","CA","AU","NZ"];return v.features["CHECKOUT-4183.checkout_google_address_autocomplete_uk"]&&S.push("GB"),{billingAddress:d(),countries:c()||u.a,countriesWithAutocomplete:S,customer:f,customerMessage:C.customerMessage,getFields:l,googleMapsApiKey:E,initialize:t.loadBillingAddressFields,isInitializing:h(),isUpdating:p()||b(),shouldShowOrderComments:y&&Object(g.a)(_)<1,updateAddress:t.updateBillingAddress,updateCheckout:t.updateCheckout}}))(U)}}]);
//# sourceMappingURL=billing-d712ae04.js.map