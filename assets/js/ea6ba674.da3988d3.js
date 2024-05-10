"use strict";(self.webpackChunkrciam_docs=self.webpackChunkrciam_docs||[]).push([[62],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6563:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="VOMS",c={unversionedId:"manager/voms",id:"manager/voms",isDocsHomePage:!1,title:"VOMS",description:"Authentication",source:"@site/docs/manager/voms.md",sourceDirName:"manager",slug:"/manager/voms",permalink:"/rciam-docs/docs/manager/voms",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/manager/voms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"VO group/role information",permalink:"/rciam-docs/docs/manager/expressing-vo-information"},next:{title:"Groups",permalink:"/rciam-docs/docs/manager/group-management"}},p=[{value:"Authentication",id:"authentication",children:[{value:"Get a Certificate",id:"get-a-certificate",children:[]},{value:"Install a Certificate",id:"install-a-certificate",children:[]},{value:"Renewing the Certificate",id:"renewing-the-certificate",children:[]},{value:"Taking Care of Private Keys",id:"taking-care-of-private-keys",children:[]}]},{value:"Authorisation",id:"authorisation",children:[{value:"VOMS",id:"voms-1",children:[]},{value:"Register to a VO",id:"register-to-a-vo",children:[]}]},{value:"Creating a proxy",id:"creating-a-proxy",children:[{value:"VOMS configuration",id:"voms-configuration",children:[]},{value:"Proxy creation",id:"proxy-creation",children:[]}]}],u={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"voms"},"VOMS"),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Some RCIAM services authentication is based on\n",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5280"},"X.509")," certificates. The certificates are\nissued by Certification Authorities (CAs) part of the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.eugridpma.org/"},"EUGridPMA")," federation which is also part of\n",(0,i.kt)("a",{parentName:"p",href:"https://www.igtf.net/"},"IGTF")," (International Global Trust Federation)."),(0,i.kt)("p",null,"The role of a Certification Authority (CA) is to guarantee that users are who\nthey claim to be and are entitled to own their certificate. It is up to the\nusers to discover which CA they should contact. In general, CAs are organised\ngeographically and by research institutes. Each CA has its own procedure to\nrelease certificates."),(0,i.kt)("p",null,"RCIAM sites, endpoints and tools accept certificates part of the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.eugridpma.org/"},"EUGridPMA")," distribution. If your community VO is\nenabled on that site, your certificate will be accepted by that site since all\ncertificates are recognized at site level."),(0,i.kt)("p",null,"Usually, a certificate can be installed by command line tools, but they can also\nbe stored in the web browser to access RCIAM web tools and services."),(0,i.kt)("h3",{id:"get-a-certificate"},"Get a Certificate"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"http://www.eugridpma.org/members/worldmap/"},"list of RCIAM recognised CAs"),"\nprovides a clickable map to find your nearby CA. Several of these offer the\noption to get an 'eScience Personal' certificate online from the Terena\nCertificate Service CA.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.terena.org/activities/tcs/participants.html"},"Check the countries where this is available"),"."),(0,i.kt)("p",null,"If eScience Personal certificate is not available in your country, then request\na certificate from a regular ",(0,i.kt)("a",{parentName:"p",href:"https://www.igtf.net/pmamap"},"IGTF CA"),". The request\nis normally generated using either a web-based interface or console commands.\nDetails of which type of request a particular CA accepts can be found on each\nCA's website."),(0,i.kt)("p",null,"For a web-based certificate request, a form must usually be filled in with\ninformation such as the name of the user, home institute, etc. After submission,\na pair of private and public keys are generated, together with a request for the\ncertificate containing the public key and the user data. The request is then\nsent to the CA, while the private key stays in the browser, hence the same\nbrowser must be used to retrieve the certificate once it is issued."),(0,i.kt)("p",null,"Users must usually install the CA root certificate in their browser first. This\nis because the CA has to sign the user certificate using its private key, and\nthe user's browser must be able to validate the signature."),(0,i.kt)("p",null,"For some CAs, the certificate requests are generated using a command line\ninterface. The details of the exact command and the requirements of each CA will\nvary and can be found on the CA's website."),(0,i.kt)("p",null,"Once received the request, the CA will have to confirm your authenticity through\nyour certificate. This usually involves a physical meeting or a phone call with\na Registration Authority (RA). A RA is delegated by the CA to verify the\nlegitimacy of a request, and approve it if it is valid. The RA is usually\nsomeone at your home institute, and will generally need some kind of ID to prove\nyour identity."),(0,i.kt)("h3",{id:"install-a-certificate"},"Install a Certificate"),(0,i.kt)("p",null,"After approval, the certificate is generated and delivered to you. This can be\ndone via e-mail, or by giving instructions to you to download it from a web\npage."),(0,i.kt)("h4",{id:"browser-installation"},"Browser installation"),(0,i.kt)("p",null,"Install the certificate in your browser. If you don\u2019t know how to upload your\ncertificate in your browser have a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://ca.cern.ch/ca/Help/"},"examples"),"."),(0,i.kt)("h4",{id:"host-installation"},"Host installation"),(0,i.kt)("p",null,"To use RCIAM services with your certificate, you must first save your certificate\nto disk."),(0,i.kt)("p",null,"The received certificate will usually be in one of two formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Privacy Enhanced Mail Security Certificate (PEM)")," with extension ",(0,i.kt)("inlineCode",{parentName:"li"},".pem")," or"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Personal Information Exchange File (PKCS12)")," with extensions ",(0,i.kt)("inlineCode",{parentName:"li"},".p12")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},".pfx"),".")),(0,i.kt)("p",null,"The latter is the most common for certificates exported from a browser (e.g.\nInternet Explorer, Mozilla and Firefox), but the ",(0,i.kt)("inlineCode",{parentName:"p"},"PEM")," format is currently\nneeded on RCIAM user interface. The certificates can be converted from one format\nto the other using the ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl")," command."),(0,i.kt)("p",null,"If the certificate is in ",(0,i.kt)("inlineCode",{parentName:"p"},"PKCS12")," format, then it can be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"PEM"),"\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"pkcs12"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First you will need to create the private key, use ",(0,i.kt)("inlineCode",{parentName:"p"},"-nocerts"),". Open your\nterminal, enter the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl pkcs12 -nocerts -in my_cert.p12 -out userkey.pem\n")),(0,i.kt)("p",{parentName:"li"},"where:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"File Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"my_cert.p12")),(0,i.kt)("td",{parentName:"tr",align:null},"is the input PKCS12 format file;")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userkey.pem")),(0,i.kt)("td",{parentName:"tr",align:null},"is the output private key file;")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"usercert.pem")),(0,i.kt)("td",{parentName:"tr",align:null},"is the output PEM certificate file.")))),(0,i.kt)("p",{parentName:"li"},"When prompted to ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cEnter Import Password\u201d"),", simply press enter since no\npassword should have been given when exporting from keychain. When prompted\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cEnter PEM pass phrase\u201d"),", enter the pass phrase of your choice, e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"1234"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you can create the certificate, use ",(0,i.kt)("inlineCode",{parentName:"p"},"-clcerts"),", (use ",(0,i.kt)("inlineCode",{parentName:"p"},"-nokeys")," hereu will\nnot output private key), and the command is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl pkcs12 -clcerts -nokeys -in my_cert.p12 -out usercert.pem\n")),(0,i.kt)("p",{parentName:"li"},"When prompted to ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cEnter Import Password\u201d"),", simply press enter since no\npassword should have been given when exporting from keychain."),(0,i.kt)("p",{parentName:"li"},"For further information on the options of the pkcs12 command, consult\n",(0,i.kt)("inlineCode",{parentName:"p"},"man pkcs12")))),(0,i.kt)("p",null,"It is strongly recommended that the names of all these files are kept as shown.\nOnce in PEM format, the two files, ",(0,i.kt)("inlineCode",{parentName:"p"},"userkey.pem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usercert.pem"),", should be\ncopied to a ",(0,i.kt)("em",{parentName:"p"},"User Interface (UI)"),". For example, the \u2018standard\u2019 location for Mac\nwould be ",(0,i.kt)("inlineCode",{parentName:"p"},".globus")," directory in your ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME"),". I.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.globus/")),(0,i.kt)("h3",{id:"renewing-the-certificate"},"Renewing the Certificate"),(0,i.kt)("p",null,"CAs issue certificates with a limited duration (usually one year); this implies\nthe need to renew them periodically. The renewal procedure usually requires that\nthe certificate holder sends a request for renewal signed with the old\ncertificate and/or that the request is confirmed by a phone call; the details\ndepend on the policy of the CA. The certificate usually needs to be renewed\nbefore the old certificate expires; CAs may send an email to remind users that\nrenewal is necessary, but users should try to be aware of the renewal date, and\ntake appropriate action if they are away for extended periods of time."),(0,i.kt)("h3",{id:"taking-care-of-private-keys"},"Taking Care of Private Keys"),(0,i.kt)("p",null,"A private key is the essence of your identity. Anyone who steals it can\nimpersonate the owner and if it is lost, it is no longer possible to do\nanything. Certificates are issued personally to individuals, and must never be\nshared with other users. To use RCIAM services, users must agree to an Acceptable\nUse Policy, which among other things requires them to keep their private key\nsecure."),(0,i.kt)("p",null,"On a UNIX UI, the certificate and private key are stored in two files. Typically\nthey are in a directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.globus")," and are named ",(0,i.kt)("inlineCode",{parentName:"p"},"usercert.pem")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"userkey.pem"),", and it is strongly recommended that they are not changed. The\ncertificate is public and world-readable, but the key must only be readable by\nthe owner. The key should be stored on a disk local to the user's UI rather\nthan, for example, an NFS-mounted disk. If a certificate has been exported from\na browser, a PKCS12-format file (",(0,i.kt)("inlineCode",{parentName:"p"},".p12")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".pfx"),"), which contains the private\nkey, will have been locally stored and this file must be either encrypted,\nhidden or have its access rights restricted to only the owner."),(0,i.kt)("p",null,"If a private key is stored under the Andrew File System (AFS), access is\ncontrolled by the AFS Access Control Lists (ACL) rather than the normal file\npermissions, so users must ensure that the key is not in a publicly-readable\narea."),(0,i.kt)("p",null,"Web browsers also store private keys internally, and these also need to be\nprotected. The details vary depending on the browser, but password protection\nshould be used if available; this may not be the default (it is not with\nInternet Explorer). The most secure mode is one in which every use of the\nprivate key needs the password to be entered, but this can cause problems as\nsome web sites ask for the certificate many times. Reaching a compromise between\nsecurity and convenience is vital here, so that neither come too short."),(0,i.kt)("p",null,"It is important not to lose the private key, as this implies loss of all access\nto the services, and registration will have to be started again from scratch.\nHaving several securely protected copies in different places is strongly\nadvised, so the certificate can be used from a web browser and several UI\nmachines."),(0,i.kt)("p",null,"A private key stored on a UI must be encrypted, meaning that a passphrase must\nbe typed whenever it is used. A key must never be stored without a passphrase.\nThe passphrase should follow similar rules to any computer password. Users\nshould be aware of the usual risks, like people watching them type or\ntransmitting the passphrase over an insecure link."),(0,i.kt)("h2",{id:"authorisation"},"Authorisation"),(0,i.kt)("p",null,"The sites authorise the access to their resources to a VO according to their own\naccess policies, resource location, how many resources is the VO allowed to use.\nThere are finer authorization policies, including groups, roles, in this way,\nthe users can be structured in a VO. So, it is not a 0/1 authorization policy."),(0,i.kt)("p",null,"The community has full control of the access to the VO according to community\nauthorization policies. The VO membership, groups and roles are managed by VO\nmanagers (Privileged VO members) independently by using the Virtual Organization\nMembership Service (VOMS)."),(0,i.kt)("h3",{id:"voms-1"},"VOMS"),(0,i.kt)("p",null,"The Virtual Organization Membership Service (VOMS) is an attribute authority\nwhich serves as central repository for VO user authorization information,\nproviding support for sorting users into group hierarchies, keeping track ofu\ntheir roles and other attributes in order to issue trusted attribute\ncertificates and SAML assertions used in the Grid environment for authorization\npurposes. VOMS is composed of two main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the VOMS core service, which issues attribute certificates to authenticated\nclients"),(0,i.kt)("li",{parentName:"ul"},"the VOMS Admin service, which is used by VO manager to administer VOs and\nmanage user membership details.")),(0,i.kt)("p",null,"How does it work? Usually, users submit tasks/jobs to the infrastructure that\nare attached with their own credential, and the credential is attached with a\nproxy certificate that is a short-term credential signed with the user\ncertificate and is extended with the VO attributes. In general speaking, a user\ncredential is just an ID, and a proxy contains the VO details, so a resource\nsite by receiving the proxy can recognize that the user is part of such a VO\nwith such a role from such a group. A user can be part of multiple VO, thus can\ngenerate multiple proxies."),(0,i.kt)("h3",{id:"register-to-a-vo"},"Register to a VO"),(0,i.kt)("p",null,"Visit the VOMS server that you are interested in and request your VO membership\nat VO VOMS page. You will have to enter required information and then wait for\napproval."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Register to enmr.eu vo",src:n(8984).Z})),(0,i.kt)("h2",{id:"creating-a-proxy"},"Creating a proxy"),(0,i.kt)("h3",{id:"voms-configuration"},"VOMS configuration"),(0,i.kt)("p",null,"Every VO needs two different pieces of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"vomses")," configuration files, where the details of the VO are stored (e.g.\nname, server, ports). These are stored by default at ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/vomses")," and are\nnormally named following this convention: ",(0,i.kt)("inlineCode",{parentName:"li"},"<vo name>.<server name>")," (e.g. for\nvo.example.org VO, you would have ",(0,i.kt)("inlineCode",{parentName:"li"},"vo.example.org.voms1.example.org")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"vo.example.org.voms2.example.org"),"."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},".lsc")," files that describe the trust chain of the VOMS server. These are\nstored at ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/grid-security/vomsdir/<vo name>")," and there should be one file\nfor each of the VOMS server of the VO.")),(0,i.kt)("h3",{id:"proxy-creation"},"Proxy creation"),(0,i.kt)("p",null,"Once you have the VO information configured (",(0,i.kt)("inlineCode",{parentName:"p"},"vomses")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".lsc"),") and your\ncertificate available in your ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.globus")," directory you can create a VOMS\nproxy to be used with clients with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"voms-proxy-init --voms <name of the vo> --rfc\n")),(0,i.kt)("p",null,"See for example, using ",(0,i.kt)("inlineCode",{parentName:"p"},"vo.example.org")," VO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'voms-proxy-init --voms vo.example.org --rfc\nEnter GRID pass phrase:\nYour identity: /DC=org/DC=terena/DC=tcs/C=NL/O=XXX/OU=UCST/CN=YYY ZZZ\nCreating temporary proxy ......................................................... Done\nContacting  voms1.example.org:15002 [/DC=cz/DC=AAA/O=BBB/CN=voms1.example.org] "vo.example.org" Done\nCreating proxy ................................................................... Done\n\nYour proxy is valid until Mon Feb  4 23:37:21 2019\n')))}h.isMDXComponent=!0},8984:function(e,t,n){t.Z=n.p+"assets/images/register_enmr_vo-df5bc5df2a5da2eb9c4b2d25e6f22629.png"}}]);