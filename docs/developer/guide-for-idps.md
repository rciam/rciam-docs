---
sidebar_position: 2
---

# Identity Providers

This page contains information about integrating your identity provider (IdP)
with RCIAM in order to allow users
in your community to access RCIAM tools and services.

## Identity Provider integration workflow

To integrate your Identity Provider with the RCIAM service, you need to
contact us at `faai` `[AT]` `grnet.gr` indicating your request.
The integration follows a two-step process:

1. Register your Identity Provider and test integration with the demo
   instance of RCIAM. The demo instance allows for testing
   authentication and authorisation to RCIAM services and resources without
   affecting the production environment of RCIAM. Note that the demo
   instance is not connected to the production service and no information is
   shared between the two systems.
1. Register your Identity Provider with the production instance of RCIAM
   to allow members of your Community to access production RCIAM services and
   resources protected by RCIAM.

The most important URLs for each environment are listed in the table below but
more information can be found in the protocol-specific sections that follow.

<!-- markdownlint-disable line-length -->

| Protocol       | Demo environment                                                           | Production environment                                                |
| -------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| SAML           | <https://rciam-demo.example.org/proxy/module.php/saml/sp/metadata.php/sso> | <https://rciam.example.org/proxy/module.php/saml/sp/metadata.php/sso> |
| OpenID Connect | See [client registration](#client-registration)                            | See [client registration](#client-registration)                       |

<!-- markdownlint-enable line-length -->

## General requirements for integrating identity providers

An institution or a community may connect their IdP with RCIAM to allow their
users to access RCIAM services, or any other services that have enabled RCIAM
as an authentication provider. This section presents the general requirements
for integrating an IdP with RCIAM, while protocol-specific instructions
are provided in the sections that follow.

### Attribute release requirements

As a bare minimum, the IdP of a user's Home Organisation or Community is
expected to release a non-reassignable identifier that uniquely identifies the
user within the scope of that organisation or community. The unique identifier
must be accompanied with a minimum set of attributes which the RCIAM Service
Provider Proxy will attempt to retrieve from the user's IdP. If this is not
possible, the missing user attributes will be acquired and verified through the
user registration process with the RCIAM Account Registry. The following table
describes the data requested from the user's Home Organisation, which are
communicated to the RCIAM SP as either SAML attributes or OIDC claims,
depending on the protocol supported by the authenticating IdP.

<!-- markdownlint-disable line-length no-inline-html -->

| Description                                                                                                                                                                                           | Notes                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| At least one of the following unique user identifiers:<ol><li>pseudonymous, non-targeted identifier;</li><li>name-based, non-targeted identifier;</li><li>pseudonymous, targeted identifier</li></ol> |                                                                  |
| Preferred name for display purposes                                                                                                                                                                   | For example to be used in a greeting or a descriptive listing    |
| First name                                                                                                                                                                                            |                                                                  |
| Surname                                                                                                                                                                                               |                                                                  |
| Email address                                                                                                                                                                                         |                                                                  |
| Affiliation within Home Organisation or Community                                                                                                                                                     | To be released **only** if relevant for accessing RCIAM services |

<!-- markdownlint-enable line-length no-inline-html -->

Note that the above set of requested attributes, particularly the identifier,
name, email and affiliation information, complies with the
[REFEDS R&S attribute bundle](https://refeds.org/category/research-and-scholarship).

Information about group membership and role information released by your IdP
should follow the URN scheme below (see also
[AARC-G002](https://aarc-community.org/guidelines/aarc-g002)):

    <NAMESPACE>:group:<GROUP>[:<SUBGROUP>*][:role=<ROLE>]#<GROUP-AUTHORITY>

where:

- `<NAMESPACE>` is in the form of
  `urn:<NID>:<DELEGATED-NAMESPACE>[:<SUBNAMESPACE>*]`, where
  - `<NID>` is the namespace identifier associated with a URN namespace
    registered with
    [IANA](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml),
    as per RFC8141, ensuring global uniqueness. Implementers can and should use
    one of the existing registered URN namespaces, such as
    [`urn:geant`](https://www.geant.org/Services/Trust_identity_and_security/Pages/NamespaceRegistry.aspx)
    and
    [`urn:mace`](https://www.internet2.edu/products-services/trust-identity/mace-registries/urnmace-namespace/);
  - `<DELEGATED-NAMESPACE>` is a URN sub-namespace delegated from one of the
    IANA registered NIDs

to an organisation representing the e-infrastructure, research infrastructure or
research collaboration.

- `<GROUP>` is the name of a VO, research collaboration or a top level arbitrary
  group. `<GROUP>` names are unique within the `urn:mace:example.org:group`
  namespace;
- zero or more `<SUBGROUP>` components represent the hierarchy of subgroups in
  the `<GROUP>`; specifying sub-groups is optional
- the optional `<ROLE>` component is scoped to the rightmost (sub)group; if no
  group information is specified, the role applies to the VO
- `<GROUP-AUTHORITY>` is a non-empty string that indicates the authoritative
  source for the entitlement value. For example, it can be the FQDN of the group
  management system that is responsible for the identified group membership
  information

**Example entitlement values expressing VO/group membership and role
information:**

    urn:geant:aai-community:group:aai-example-group:role=member#aai-community.example.org
    urn:geant:aai-community:group:aai-example-group:role=vm_operator#aai-community.example.org

### Operational and security requirements

The IdP needs to comply with additional requirements to achieve a higher level
of assurance and allow its users to gain access to a wider set of RCIAM services.
A first group of additional requirements are defined by the
[Sirtfi framework v1.0](https://refeds.org/wp-content/uploads/2016/01/Sirtfi-1.0.pdf).
Adherence to these requirements can be asserted by publishing Sirtfi
compliance in the eduGAIN metadata. These requirements are in the
areas of operational security, incident response, traceability and IdPs and
users responsibility.

### Branding requirements

RCIAM provides a central Discovery Service (or "Where Are You From" - WAYF)
page where users in your Home Organisation or Community will be automatically
redirected when necessary to select to authenticate at your IdP. You can provide
us with a logo of your Organisation or Community (in high-res png or preferably
in svg format) to include a dedicated login button that will allow users to
easily identify your IdP.

## SAML Identity Provider

To allow users in your community to sign into RCIAM applications, you
need to connect to the RCIAM AAI SP Proxy as a SAML Identity Provider (IdP). Users
of the application will be redirected to the central Discovery Service page of
the RCIAM AAI Proxy where they will able to select to authenticate at your IdP.
Once the user is authenticated, the RCIAM AAI Proxy will return a SAML assertion
to the application containing the information returned by your IdP about the
authenticated user.

### Metadata registration

SAML authentication relies on the use of metadata. Both parties (you as an IdP
and the RCIAM AAI SP) need to exchange metadata in order to know and trust each
other. The metadata include information such as the location of the service
endpoints that need to be invoked, as well as the certificates that will be used
to sign SAML messages. The format of the exchanged metadata should be based on
the XML-based
[SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
Usually, you will not need to manually create such an XML document, as this is
automatically generated by all major SAML 2.0 IdP software solutions (e.g.,
Shibboleth, SimpleSAMLphp). It is important that you serve your metadata over
HTTPS using a browser-friendly SSL certificate, i.e. issued by a trusted
certificate authority.

To exchange metadata, please send an email including the following information:

1. **entityID**
1. **Metadata URL**

Depending on the software you are using, the authoritative XML metadata URL for
your IdP might be in the following form:

- `https://your.idp.example.eu/idp/shibboleth` (Shibboleth)
- `https://your.idp.example.eu/simplesaml/module.php/saml2/idp/metadata.php`
  (SimpleSAMLphp)

Note that if your IdP is part of a federation, then it would be preferred to
send us the URL to a signed federation metadata aggregate. We can then cherry
pick the appropriate entityID from that.

You can get the metadata of the RCIAM SP Proxy on a dedicated URL that
depends on the integration environment being used:

<!-- markdownlint-disable line-length -->

| Demo environment                                                           | Production environment                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| <https://rciam-demo.example.org/proxy/module.php/saml/sp/metadata.php/sso> | <https://rciam.example.org/proxy/module.php/saml/sp/metadata.php/sso> |

<!-- markdownlint-enable line-length -->

For the production environment, it is recommended that you get the metadata for
the RCIAM SP (entityID:
<https://rciam.example.org/proxy/module.php/saml/sp/metadata.php/sso>)
from a signed eduGAIN metadata aggregate. For example, the following aggregates
are provided by GRNET:

- [GRNET federation\'s metadata](https://md.aai.grnet.gr/aggregates/grnet-metadata.xml)
- [eduGAIN SP metadata](https://md.aai.grnet.gr/feeds/edugain-sp-samlmd.xml)

### Attribute release

The SAML based Identity Provider of your Home Organisation or Community is
expected to release a non-reassignable identifier that uniquely identifies the
user within the scope of that organisation or community, along with a set of
additional information as described in the following table (see also
[general attribute release requirements](#attribute-release-requirements)):

<!-- markdownlint-disable line-length no-inline-html -->

| Description                                                                                                                                                                                           | SAML attribute                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| At least one of the following unique user identifiers:<ol><li>pseudonymous, non-targeted identifier;</li><li>name-based, non-targeted identifier;</li><li>pseudonymous, targeted identifier</li></ol> | <ol><li>`SubjectID` (public) or `eduPersonUniqueId`</li><li>`eduPersonPrincipalName`</li><li>`SubjectID` (pairwise) or `eduPersonTargetedID` or SAML persistent identifier</li></ol> |
| Preferred name for display purposes                                                                                                                                                                   | `displayName`                                                                                                                                                                        |
| First name                                                                                                                                                                                            | `givenName`                                                                                                                                                                          |
| Surname                                                                                                                                                                                               | `sn`                                                                                                                                                                                 |
| Email address                                                                                                                                                                                         | `mail`                                                                                                                                                                               |
| Affiliation within Home Organisation or Community                                                                                                                                                     | `eduPersonScopedAffiliation`                                                                                                                                                         |
| Group(s)/role(s) within Home Organisation or Community                                                                                                                                                | `eduPersonEntitlement`                                                                                                                                                               |

<!-- markdownlint-enable line-length no-inline-html -->

## OpenID Connect Identity Provider

Users in your community can sign into RCIAM applications through the
RCIAM service using your OpenID Connect or OAuth 2.0 based Identity Provider.

### Client registration

To enable your OIDC Identity Provider for user login, RCIAM needs to be
registered as a client in order to obtain OAuth 2.0 credentials, such as a
client ID and client secret, and to register one or more redirect URIs. Once
RCIAM is registered as a client, your users will be redirected to the central
Discovery Service page of RCIAM when logging into RCIAM applications,
where they will able to select to authenticate at your IdP. Once the user is
authenticated, RCIAM will be responsible for communicating the information
returned by your IdP about the authenticated user to the connected application.
Depending on the protocol, this information will be expressed through a SAML
assertion, a set of OIDC claims or a (proxy) X.509 certificate.

### Provider configuration

RCIAM needs to obtain your OpenID Provider\'s configuration information,
including the location of the Authorisation, Token and UserInfo endpoints. Your
OpenID Provider is expected to make a JSON document available at the path formed
by concatenating the string `/.well-known/openid-configuration` to the Issuer,
following the
[OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig).

### Attribute release

The OpenID Connect or OAuth 2.0 based Identity Provider of your Home
Organisation or Community is expected to release a non-reassignable identifier
that uniquely identifies the user within the scope of that organisation or
community, along with a set of additional information as described in the
following table (see also
[general attribute release requirements](#attribute-release-requirements)):

<!-- markdownlint-disable line-length no-inline-html -->

| Description                                                                                                                                                                                           | OIDC claim                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| At least one of the following unique user identifiers:<ol><li>pseudonymous, non-targeted identifier;</li><li>name-based, non-targeted identifier;</li><li>pseudonymous, targeted identifier</li></ol> | <ol><li>`sub` (public)</li><li>N/A</li><li>`sub` (pairwise)</li></ol> |
| Preferred name for display purposes                                                                                                                                                                   | `name`                                                                |
| First name                                                                                                                                                                                            | `given_name`                                                          |
| Surname                                                                                                                                                                                               | `family_name`                                                         |
| Email address                                                                                                                                                                                         | `email`                                                               |
| Affiliation within Home Organisation or Community                                                                                                                                                     | `eduperson_scoped_affiliation`                                        |
| Group(s)/role(s) within Home Organisation or Community                                                                                                                                                | `eduPerson_entitlement`                                               |

<!-- markdownlint-enable line-length no-inline-html -->
