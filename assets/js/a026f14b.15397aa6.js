"use strict";(self.webpackChunkrciam_docs=self.webpackChunkrciam_docs||[]).push([[760],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,g=c["".concat(m,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},m="Groups",s={unversionedId:"manager/group-management",id:"manager/group-management",isDocsHomePage:!1,title:"Groups",description:"Membership Managment",source:"@site/docs/manager/group-management.md",sourceDirName:"manager",slug:"/manager/group-management",permalink:"/rciam-docs/docs/manager/group-management",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/manager/group-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"VOMS",permalink:"/rciam-docs/docs/manager/voms"},next:{title:"Service Providers",permalink:"/rciam-docs/docs/developer/guide-for-sps"}},p=[{value:"Membership Managment",id:"membership-managment",children:[{value:"View Group Members",id:"view-group-members",children:[]},{value:"Add Group Members",id:"add-group-members",children:[]},{value:"Remove Member from Group",id:"remove-member-from-group",children:[]},{value:"Manage Group Member Roles",id:"manage-group-member-roles",children:[]},{value:"Suspend or Activate Group Member",id:"suspend-or-activate-group-member",children:[]}]},{value:"Admin Management",id:"admin-management",children:[{value:"View Group Admins",id:"view-group-admins",children:[]},{value:"Add Group Admin",id:"add-group-admin",children:[]},{value:"Remove Group Admin",id:"remove-group-admin",children:[]}]},{value:"Manage Enrollment Configurations",id:"manage-enrollment-configurations",children:[{value:"Create Enrollment Configuration",id:"create-enrollment-configuration",children:[]},{value:"Update Enrollment Configuration",id:"update-enrollment-configuration",children:[]},{value:"Delete Enrollment Configuration",id:"delete-enrollment-configuration",children:[]}]},{value:"Review Enrollment Request",id:"review-enrollment-request",children:[]},{value:"Enrollment Request Details",id:"enrollment-request-details",children:[{value:"General Details",id:"general-details",children:[]},{value:"User Details",id:"user-details",children:[]},{value:"Membership Details",id:"membership-details",children:[]}]}],u={toc:p};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"groups"},"Groups"),(0,r.kt)("h2",{id:"membership-managment"},"Membership Managment"),(0,r.kt)("h3",{id:"view-group-members"},"View Group Members"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"To view the existing members, select the Group Members tab.\n",(0,r.kt)("img",{alt:"Admin Group View",src:n(2617).Z}),(0,r.kt)("img",{alt:"Admin Group Members",src:n(7508).Z}))),(0,r.kt)("h3",{id:"add-group-members"},"Add Group Members"),(0,r.kt)("h4",{id:"by-invitation"},"By Invitation"),(0,r.kt)("p",null,"Users can be added to a group by sending an email invitation. Users receiving the invitation can login to Keycloak Account Console with their RCIAM account and accept or reject the invitation to the group."),(0,r.kt)("p",null,"Sending an email invitation to a User to join a group can be achieved by: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Members tab.\n",(0,r.kt)("img",{alt:"Admin Group Members",src:n(2617).Z})),(0,r.kt)("li",{parentName:"ol"},"Click the Invite User button that opens the invitation pop-up window.\n",(0,r.kt)("img",{alt:"Admin Group Members Invite",src:n(6225).Z})),(0,r.kt)("li",{parentName:"ol"},"Select an Enrollment Configuration\n",(0,r.kt)("img",{alt:"Admin Group Members Invite Step 1",src:n(8413).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the role(s) that you want the user have in the Group and click Next\n",(0,r.kt)("img",{alt:"Admin Group Members Invite Step 2",src:n(4156).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the user from the drop down selection input or enter an email address and click Send Invitation.\n",(0,r.kt)("img",{alt:"Admin Group Members Invite Step 3",src:n(5938).Z}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),"  Once a user accepts or reject an invitation email notification will be sent to admins of the group")),(0,r.kt)("h4",{id:"by-enrollment-url"},"By Enrollment URL"),(0,r.kt)("p",null,"Users can be added to a group by creating an Enrollment Request through an enrollment url. There are two types of enrollment url, one that contains all public/visible group Enrollments and one that is tied to a specific Enrollment. "),(0,r.kt)("p",null,"\u0391) Sharing an Enrollment URL that contains all the public/visible group Enrollments following these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the more options and from the available options select the \u201cCopy enrollment link to this group\u201d.\n",(0,r.kt)("img",{alt:"Admin Group Invite Url",src:n(3386).Z})),(0,r.kt)("li",{parentName:"ol"},"Share the copied Enrollment URL with the User. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," Once a user submits an enrollment request admins of the group will receive an email notification.")),(0,r.kt)("p",null,"B) Sharing an Enrollment URL for a specific Enrollment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Enrollment Tab\n",(0,r.kt)("img",{alt:"Admin Group Enrollment Tab",src:n(4766).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the desired Enrollment making sure it is active"),(0,r.kt)("li",{parentName:"ol"},"Select the more options and from the available options select the \u201cCopy enrollment link to this group\u201d.\n",(0,r.kt)("img",{alt:"Admin Group Enrollment Invite Url",src:n(2377).Z})),(0,r.kt)("li",{parentName:"ol"},"Share the copied Enrollment URL with the User. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," Once a user submits an enrollment request admins of the group will receive an email notification.")),(0,r.kt)("h3",{id:"remove-member-from-group"},"Remove Member from Group"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Members tab.\n",(0,r.kt)("img",{alt:"Admin Group Members",src:n(2617).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the User you want to remove from the group"),(0,r.kt)("li",{parentName:"ol"},"Click the X button and then the Yes button at the confirmation pop-up window\n",(0,r.kt)("img",{alt:"Admin Group Remove Member",src:n(1551).Z}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),"  Once a group member is removed admins of the group and the removed user will receive an email notification")),(0,r.kt)("h3",{id:"manage-group-member-roles"},"Manage Group Member Roles"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Members tab.\n",(0,r.kt)("img",{alt:"Admin Group Members",src:n(2617).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the User you want to alter their roles."),(0,r.kt)("li",{parentName:"ol"},"Click the edit button next to their assigned roles.\n",(0,r.kt)("img",{alt:"Admin Group Edit Member Roles",src:n(3222).Z})),(0,r.kt)("li",{parentName:"ol"},"Alter their roles by selecting the desired ones from the available options.\n",(0,r.kt)("img",{alt:"Admin Group Edit Member Roles Window",src:n(7829).Z})),(0,r.kt)("li",{parentName:"ol"},"To save edited member roles click the OK button.")),(0,r.kt)("h3",{id:"suspend-or-activate-group-member"},"Suspend or Activate Group Member"),(0,r.kt)("p",null,"User memberships can be suspended or activated by a group admin by following these steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Members tab.\n",(0,r.kt)("img",{alt:"Admin Group Members",src:n(2617).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the User you want to suspend or activate their membership."),(0,r.kt)("li",{parentName:"ol"},"Click the suspend/activate button to open the confirmation pop-up window.\n",(0,r.kt)("img",{alt:"Admin Group Member Action",src:n(153).Z})),(0,r.kt)("li",{parentName:"ol"},"Optionally provide a justification for your action that will be included in the notification sent to the User and the group Admins.\n",(0,r.kt)("img",{alt:"Admin Group Member Action Confirmation",src:n(9303).Z})),(0,r.kt)("li",{parentName:"ol"},"Click the YES button to submit your action")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),"  Once a group member is activated/suspended, admins of the group and the user will receive an email notification.")),(0,r.kt)("h2",{id:"admin-management"},"Admin Management"),(0,r.kt)("h3",{id:"view-group-admins"},"View Group Admins"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Admins Tab.\n",(0,r.kt)("img",{alt:"Admin Groups Admin Tab",src:n(6816).Z})),(0,r.kt)("li",{parentName:"ol"},"Group Admin details are available in list form.\n",(0,r.kt)("img",{alt:"Admin Groups Admin Details",src:n(8659).Z}))),(0,r.kt)("h3",{id:"add-group-admin"},"Add Group Admin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Admins Tab.\n",(0,r.kt)("img",{alt:"Admin Groups Admin Tab",src:n(6816).Z})),(0,r.kt)("li",{parentName:"ol"},"Use the input located in the Add New Group Admin section to search for a user to add as a group admin, or type a valid email address to send an invitation.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"Admin Groups Admin Discovery",src:n(456).Z}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),"   Selecting a user discovered in the select input and will add the user immediately.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),"  Once a User accepts or rejects an invitation and when a user is added directly to a group group admins receive email notification")),(0,r.kt)("h3",{id:"remove-group-admin"},"Remove Group Admin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Admins Tab.\n",(0,r.kt)("img",{alt:"Admin Groups Admin Tab",src:n(6816).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate User you want to remove from being an admin and click the X button\n",(0,r.kt)("img",{alt:"Admin Groups Admin Remove",src:n(3933).Z})),(0,r.kt)("li",{parentName:"ol"},"Click the YES button in the confirmation pop-up window")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," Once a group admin is removed from a group he and all other admins are sent an email notification")),(0,r.kt)("h2",{id:"manage-enrollment-configurations"},"Manage Enrollment Configurations"),(0,r.kt)("p",null,"User enrols to a group using a specific enrollment configuration, each enrollment has a configuration that defines the following things:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enrollment Name:")," The identifying name of the enrollment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Membership Expiration:")," The duration of the memberships of users enrolled with this enrollment. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Membership Expiration can also be indefinite is configuration allows it.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start Date:")," Allows for memberships to be activated in future time and not directly after an enrollment is completed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires Approval:")," If true enrollment requests submitted by user need to be approved by an administrator."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comments:")," If activated Users that are submitting an enrollment request need to also provide additional information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Acceptable Use Policy (AUP):")," Acceptable Use Policy in the form of a URL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available Roles:"),"  Available roles to users using this enrollment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiselect Roles:")," If activated users using this enrollment can select multiple roles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visible to non-members:")," If activated the enrollment will be available in the Group Enrollment discovery page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Is Active:")," Only active enrollments can be used for user enrollments."),(0,r.kt)("h3",{id:"create-enrollment-configuration"},"Create Enrollment Configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Enrollment Tab\n",(0,r.kt)("img",{alt:"Admin Group Enrollment Tab",src:n(4766).Z})),(0,r.kt)("li",{parentName:"ol"},"Click on the + button located in the table header to open the creation window\n",(0,r.kt)("img",{alt:"Admin Group Create Enrollment",src:n(1025).Z})),(0,r.kt)("li",{parentName:"ol"},"Fill the form with the necessary information and click the Create button to create the Enrollment Configuration\n",(0,r.kt)("img",{alt:"Admin Group Create Enrollment Form",src:n(2383).Z}))),(0,r.kt)("h3",{id:"update-enrollment-configuration"},"Update Enrollment Configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Enrollment Tab\n",(0,r.kt)("img",{alt:"Admin Group Enrollment Tab",src:n(4766).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the Enrollment Configuration you want to update in the list."),(0,r.kt)("li",{parentName:"ol"},"Select the Enrollment Configuration you want to update by clicking on it.\n",(0,r.kt)("img",{alt:"Admin Group Select Enrollment",src:n(8778).Z})),(0,r.kt)("li",{parentName:"ol"},"Edit the fields you want to update and click the SAVE button to update the Enrollment Configuration\n",(0,r.kt)("img",{alt:"Admin Group Update Enrollment Form",src:n(4813).Z}))),(0,r.kt)("h3",{id:"delete-enrollment-configuration"},"Delete Enrollment Configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Locate your group in the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/admingroups"},"Group Management Page")," and access the Group Configuration Page by clicking it.\n",(0,r.kt)("img",{alt:"Admin Groups View",src:n(3426).Z})),(0,r.kt)("li",{parentName:"ol"},"Select the Group Enrollment Tab\n",(0,r.kt)("img",{alt:"Admin Group Enrollment Tab",src:n(4766).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the Enrollment Configuration you want to delete in the list."),(0,r.kt)("li",{parentName:"ol"},"Select the Enrollment Configuration you want to delete by clicking on it.\n",(0,r.kt)("img",{alt:"Admin Group Select Enrollment",src:n(8778).Z})),(0,r.kt)("li",{parentName:"ol"},"Click the trash icon next to the Enrollment Configuration name.\n",(0,r.kt)("img",{alt:"Admin Group Delete Enrollment",src:n(4359).Z})," "),(0,r.kt)("li",{parentName:"ol"},"Click the YES button to delete the Enrollment Configuration in the confirmation pop-up window. ")),(0,r.kt)("h2",{id:"review-enrollment-request"},"Review Enrollment Request"),(0,r.kt)("p",null,"Once a enrollment request to join a group is submitted admins of the group are notified to review the request if that request requires approval."),(0,r.kt)("p",null,"To review an enrollment request follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/"},"Keycloak Account Console")," using any of the login credentials already linked to your RCIAM account."),(0,r.kt)("li",{parentName:"ol"},"Access the ",(0,r.kt)("a",{parentName:"li",href:"https://kc-example/account/#/groups/groupenrollments"},"Review Enrollment Requests")," page available in the Group Management Section.\n",(0,r.kt)("img",{alt:"Admin Groups View Enrollment Requests",src:n(2084).Z})),(0,r.kt)("li",{parentName:"ol"},"Locate the enrollment request In the list of all pending requests and click on the Review Button to open the Review Page.\n",(0,r.kt)("img",{alt:"Admin Groups Review Select Enrollment Requests",src:n(7639).Z})),(0,r.kt)("li",{parentName:"ol"},"Check all the information about the User and his Membership."),(0,r.kt)("li",{parentName:"ol"},"Optionally Leave a justification comment for your Review Action."),(0,r.kt)("li",{parentName:"ol"},"Approve the request by clicking the green Approve button or reject it by clicking the red Reject button.\n",(0,r.kt)("img",{alt:"Admin Groups Review Enrollment Requests Action",src:n(4234).Z}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," After approving or denying an enrollment request email notifications are sent to the requesting user and other administrators of the group")),(0,r.kt)("h2",{id:"enrollment-request-details"},"Enrollment Request Details"),(0,r.kt)("p",null,"Information Available when reviewing an enrollment request:"),(0,r.kt)("h3",{id:"general-details"},"General Details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Submission Date:")," Date and time of the submission of the request by the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enrollment Request Status:")," Status of the request. (Pending Approval, Approved, Rejected)"),(0,r.kt)("h3",{id:"user-details"},"User Details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Name:"),"  Full name of the user submitting the request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Email:")," Email address of the user submitting the request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Identity Assurance:")," ????"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linked Identity Providers:")," "),(0,r.kt)("h3",{id:"membership-details"},"Membership Details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group Name:")," Name of the group"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enrollment Name:")," Name of the enrollment configuration used "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group Roles:")," List of the roles that the user will acquire from this enrollment request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Acceptable User Policy (AUP):")," Link of the AUP that the user has approved"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Membership Expiration Days:")," The duration of the membership in days "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comments (or custom name):")," Additional information from the user submitting the request."))}c.isMDXComponent=!0},456:function(e,t,n){t.Z=n.p+"assets/images/admin-group-admin-discovery-30169cbe9f02d44e25471506db15ffee.png"},3933:function(e,t,n){t.Z=n.p+"assets/images/admin-group-admin-remove-0fb93f8cb448876f3b8d666e5be86639.png"},6816:function(e,t,n){t.Z=n.p+"assets/images/admin-group-admin-tab-9b50996bfff7d05cce27c84cc3395ddf.png"},2383:function(e,t,n){t.Z=n.p+"assets/images/admin-group-create-enrollment-form-b00f3ade15827c2a1ecfadf1d426076b.png"},1025:function(e,t,n){t.Z=n.p+"assets/images/admin-group-create-enrollment-4726b1a52c2b6982319696a1457a0660.png"},4359:function(e,t,n){t.Z=n.p+"assets/images/admin-group-delete-enrollment-fafd6797d1af795aa79ea28b208ce7c8.png"},8659:function(e,t,n){t.Z=n.p+"assets/images/admin-group-details-145a6d6279a30cf7333891b6f688a12c.png"},7829:function(e,t,n){t.Z=n.p+"assets/images/admin-group-edit-member-roles-window-36438010032ea9958ec1accb068b5ed3.png"},3222:function(e,t,n){t.Z=n.p+"assets/images/admin-group-edit-member-roles-d1cda461b7fbe0d33b40019c8f4297ce.png"},4766:function(e,t,n){t.Z=n.p+"assets/images/admin-group-enrollments-tab-e3bd237f60cbad70924f5ce2ddd3a172.png"},2377:function(e,t,n){t.Z=n.p+"assets/images/admin-group-invite-url-specific-183ea179cf8302ec26c477d02627e4cb.png"},3386:function(e,t,n){t.Z=n.p+"assets/images/admin-group-invite-url-e644476efb3d2c54310cb770a83ce4b9.png"},9303:function(e,t,n){t.Z=n.p+"assets/images/admin-group-member-action-confirmation-0eb646b22cd4d9427d4bd8375c280f86.png"},153:function(e,t,n){t.Z=n.p+"assets/images/admin-group-member-action-f6286df6b59d3109243ffa8bbedb113e.png"},8413:function(e,t,n){t.Z=n.p+"assets/images/admin-group-members-invite-step1-0ca27aba42eb2d4e09edcb701593d566.png"},4156:function(e,t,n){t.Z=n.p+"assets/images/admin-group-members-invite-step2-0ad691d5e5dcb07f416f238d25980be5.png"},5938:function(e,t,n){t.Z=n.p+"assets/images/admin-group-members-invite-step3-b13c4da9e957a4f03da0f4cf930856db.png"},6225:function(e,t,n){t.Z=n.p+"assets/images/admin-group-members-invite-1f19b38a89e9445b85f0dcd6a0924d19.png"},7508:function(e,t,n){t.Z=n.p+"assets/images/admin-group-members-ad25b62c4836c425b2bdd5ea4eedaa81.png"},1551:function(e,t,n){t.Z=n.p+"assets/images/admin-group-remove-member-f4dd0a1410022bd822b205d7720e316b.png"},4234:function(e,t,n){t.Z=n.p+"assets/images/admin-group-review-enrollment-action-180f95924e5fd7dfdd061188eb28b13d.png"},7639:function(e,t,n){t.Z=n.p+"assets/images/admin-group-review-enrollment-select-c47b2ed86b13a94ee776980e944fb47d.png"},2084:function(e,t,n){t.Z=n.p+"assets/images/admin-group-review-enrollment-sidebar-5cb430fcbf5fbb5023e31ea8559a2a46.png"},8778:function(e,t,n){t.Z=n.p+"assets/images/admin-group-select-enrollment-510d572ca25a37b7f9d940e8d43703b5.png"},4813:function(e,t,n){t.Z=n.p+"assets/images/admin-group-update-enrollment-form-f68cb33687b1b8a64542d541f0c085f1.png"},2617:function(e,t,n){t.Z=n.p+"assets/images/admin-group-view-members-tab-60bddedc21c8c0256bedc50e97e0f3e5.png"},3426:function(e,t,n){t.Z=n.p+"assets/images/admin-groups-9af086c540e2b9bb3ccd26511bb2211d.png"}}]);