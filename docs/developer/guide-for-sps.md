---
sidebar_position: 1
---

# Service Providers

This page contains information about using the OpenAIRE AAI for securing access
to your service. The OpenAIRE AAI supports both OpenID Connect (an extension to
OAuth 2.0) and SAML 2.0. So the first thing you need to decide is which of the
two you are going to use. If you want you can also choose to secure some with
OpenID Connect and others with SAML. To secure your services you are also going
to need a library for the protocol you’ve selected. Once your service is
connected to the OpenAIRE AAI, users will be able to choose from a wide range of
academic and social Identity Providers in order to access your service.

## Service Provider integration workflow

To integrate your Service Provider with the OpenAIRE AAI, you need to send us an
email to `aai` `<AT>` `openaire.eu` indicating your request.

The integration follows a two-step process:

1. Register your Service Provider and test integration with the **BETA**
   instance of the OpenAIRE AAI. The BETA instance allows for testing
   authentication and authorisation through the available academic and social
   Identity Providers but shares no information (e.g. users, groups or roles)
   with the production instance of the OpenAIRE AAI.
1. Register your Service Provider with the **production** instance of the
   OpenAIRE AAI. The production instance enables access to your service through
   any of the available academic and social Identity Providers. Moving to
   production requires that your service integration has been thoroughly tested
   during Step 1.

The most important URLs for each environment are listed in the table below but
more information can be found in the protocol-specific sections that follow.

<!-- markdownlint-disable line-length -->

| Protocol       | Production environment                                          | BETA environment                                                     |
| -------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| SAML           | <https://aai.openaire.eu/proxy/saml2/idp/metadata.php>          | <https://beta.aai.openaire.eu/proxy/saml2/idp/metadata.php>          |
| OpenID Connect | <ul><li><https://aai.openaire.eu/oidc/.well-known/openid-configuration> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/.well-known/openid-configuration> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/.well-known/openid-configuration> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/.well-known/openid-configuration> (Keycloak)</li></ul> |

<!-- markdownlint-enable line-length -->

## General Information

OpenAIRE AAI supports two authentication and authorisation protocols that you
can choose from:

1. [Security Assertion Markup Language (SAML) 2.0](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
1. [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) - an
   extension to [OAuth 2.0](https://tools.ietf.org/html/rfc6749)

Regardless of which of the two protocols you are going to use, you need to
provide the following information to connect your service to OpenAIRE AAI:

1. Name of the service (in English and optionally in other languages supported
   by the service)
1. Short description of the service
1. Website (URL) for localised information about the service; the content found
   at the URL SHOULD provide more complete information than what provided by the
   description
1. Contact information of the following types:
   - Helpdesk/Support contact information (for redirecting user)
   - Administrative
   - Technical
   - Security/incident response
1. Privacy statement URL: The privacy policy is used to document the data
   collected and processed by the service. You can use the
   [Privacy Policy template](https://docs.google.com/document/d/1ZU7VjH3g7qcfWcz0Z8TTv-vQiVoRA_wOsuMyJaz28Og/edit)
1. Acceptable Use Policy / Terms of Use URL (see
   [WISE AUP Baseline template](https://wise-community.org/wise-baseline-aup/))
1. Logo URL (optional for showing in catalogues); if provided, logos SHOULD:
   - use a transparent background where appropriate to facilitate the usage of
     logos within a user interface
   - use PNG, or GIF (less preferred), images
   - use HTTPS URLs in order to avoid mixed-content warnings within browsers
   - have a size larger than 40000 and smaller than 50000 characters when
     encoded in base64
1. Country of the service

## SAML Service Provider

To enable federated access to a web-based application, you can connect to the
OpenAIRE AAI IdP as a SAML Service Provider (SP). Users of the application will
be redirected to OpenAIRE AAI in order to log in, and OpenAIRE AAI can
authenticate them using any of the supported backend authentication mechanisms,
such as institutional IdPs registered with eduGAIN or Social Providers. Once the
user is authenticated, OpenAIRE AAI will return a SAML assertion to the
application containing information about the authenticated user.

### Metadata registration

SAML authentication relies on the use of metadata. Both parties (you as a SP and
the OpenAIRE AAI IdP) need to exchange metadata in order to know and trust each
other. The metadata include information such as the location of the service
endpoints that need to be invoked, as well as the certificates that will be used
to sign SAML messages. The format of the exchanged metadata should be based on
the XML-based
[SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
Usually, you will not need to manually create such an XML document, as this is
automatically generated by all major SAML 2.0 SP software solutions (e.g.,
Shibboleth, SimpleSAMLphp, and `mod_auth_mellon`). It is important that you
serve your metadata over HTTPS using a browser-friendly SSL certificate, i.e.
issued by a trusted certificate authority.

You can get the metadata of the OpenAIRE AAI IdP Proxy on a dedicated URL that
depends on the integration environment being used:

<!-- markdownlint-disable line-length -->

| Production environment                                 | BETA environment                                            |
| ------------------------------------------------------ | ----------------------------------------------------------- |
| <https://aai.openaire.eu/proxy/saml2/idp/metadata.php> | <https://beta.aai.openaire.eu/proxy/saml2/idp/metadata.php> |

<!-- markdownlint-enable line-length -->

To register your SAML SP, you need to send an email to `aai` `<AT>`
`openaire.eu`. Your message should include the general information about your
service (see [General Information](#general-information)) and the SP's metadata
URL and `entityID`.

### Metadata

Metadata provided by your SP should contain a descriptive name of the service
that your SP represents in at least English. It is recommended to also provide
the name in other languages which are commonly used in the geographic scope of
the deployment. The name should be placed in the `<md:ServiceName>` in the
`<md:AttributeConsumingService>` container.

It is recommended that your SP metadata contains:

- an <md:SPSSODescriptor> role element containing
  - at least one <md:AssertionConsumerService> endpoint element
  - at least one <md:KeyDescriptor> element whose use attribute is omitted or
    set to encryption
  - an <md:Extensions> element at the role level containing
    - an <mdui:UIInfo> extension element containing the child elements
      <mdui:DisplayName>, <mdui:Logo>, and <mdui:PrivacyStatementURL>
    - an <mdattr:EntityAttributes> extension element for signaling Subject
      Identifier requirements with previously prescribed content
  - an <md:ContactPerson> element with a contactType of support and/or a
    <md:ContactPerson> element with a contactType of technical. The
    <md:ContactPerson> element(s) should contain at least one <md:EmailAddress>.
    The support address may be used for generic support questions about the
    service, while the technical contact may be contacted regarding technical
    interoperability problems. The technical contact must be responsible for the
    technical operation of the service represented by your SP.

If the SP supports the Single Logout profile, then its metadata MUST contain
(within its <md:SPSSODescriptor> role element):

- at least one <md:KeyDescriptor> element whose use attribute is omitted or set
  to signing
- at least one <md:SingleLogoutService> endpoint element (this MAY be omitted if
  the SP solely issues <samlp:LogoutRequest> messages containing the
  <aslo:Asynchronous> extension
  [[SAML2ASLO](http://docs.oasis-open.org/security/saml/Post2.0/saml-async-slo/v1.0/cs01/saml-async-slo-v1.0-cs01.pdf)])

### Attributes

The OpenAIRE AAI IdP is guaranteed to release a minimal subset of the
[REFEDS R&S](https://refeds.org/category/research-and-scholarship) attribute
bundle to connected Service Providers without administrative involvement,
subject to user consent. The following attributes constitute a minimal subset of
the R&S attribute bundle:

- Persistent, non-reassignable, non-targeted, opaque, globally unique OpenAIRE
  Login user ID (`eduPersonUniqueId`); this is always scoped `@aai.openaire.eu`
- Email address (`mail`)
- Display name (`displayName`) OR (`givenName` AND `sn`)

A more extensive list of all the attributes that may be made available to
Service Providers is included in the [User Attribute](#user-attributes) section.

### Attribute-based authorisation

OpenAIRE AAI provides information about the authenticated user that may be used
by Service Providers in order to control user access to resources. This
information is provided by the OpenAIRE AAI IdP in the
[SAML attribute assertion](#attributes). The table below lists the SAML
attributes that are relevant for user authorisation:

<!-- markdownlint-disable line-length -->

| Description                                                                                     | SAML Attribute         |
| ----------------------------------------------------------------------------------------------- | ---------------------- |
| [VO/group membership/roles of the authenticated user](#vogroup-membership-and-role-information) | `eduPersonEntitlement` |

<!-- markdownlint-enable line-length -->

### References

- [Shibboleth Service Provider Documentation](https://shibboleth.atlassian.net/wiki/spaces/SP3/overview)
- [SimpleSAMLphp Service Provider QuickStart](https://simplesamlphp.org/docs/stable/simplesamlphp-sp)
- [Simple SAML 2.0 service provider with mod_auth_mellon Apache module](https://github.com/latchset/mod_auth_mellon)

## OpenID Connect Service Provider

Service Providers can be integrated with OpenAIRE AAI using OpenID Connect
(OIDC) as an alternative to the SAML2 protocol. To allow this, the OpenAIRE
Login IdP provides an OpenID Connect (OAuth2) API based on
[MITREid Connect](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server),
which has been
[certified by the OpenID Foundation](http://openid.net/certification/).
Interconnection with the OpenAIRE AAI OpenID Provider allows users to sign in
using any of the supported backend authentication mechanisms, such as
institutional IdPs registered with eduGAIN or Social Providers. Once the user
has signed in, OpenAIRE AAI can return OIDC Claims containing information about
the authenticated user.

:::caution

The OpenAIRE AAI OpenID Provider is being migrated to Keycloak. Please check
[OIDC Client Migration to Keycloak](#client-migration-to-keycloak) for more
details

:::

### Client registration

Before your service can use the OpenAIRE AAI OpenID Provider for user login, you
must register a client and obtain OAuth 2.0 client credentials by contacting
`aai` `<AT>` `openaire.eu`. OAuth2 credentials typically include a client ID and
client secret. You also need to specify:

- One or more Redirection URI(s) to indicate where the OpenAIRE OIDC Provider
  sends responses to your authentication requests. Note that the Redirection
  URI(s) MUST use the https scheme.
- One or more scopes to indicate the requested Claims about the End-User (see
  [Claims](#claims) section)
- The OpenID Connect/OAuth2 grant type (see [Grant Types](#grant-types) section)
- One or more Post Logout Redirection URI(s) to indicate the URLs allowed to
  request that the End-User's browser be redirected after a logout has been
  performed using the `post_logout_redirect_uri` parameter.

#### Setting additional information about the client

It is strongly suggested that you add a short **description** and a **logo** for
the client. Lastly, you need to set the **email addresses** of one or more
contacts.

### Claims

The OpenAIRE AAI UserInfo Endpoint is an OAuth 2.0 Protected Resource that
returns specific information about the authenticated End-User as Claim Values.
To obtain the requested Claims about the End-User, the Client makes a request to
the UserInfo Endpoint using an Access Token obtained through OpenID Connect
Authentication. The scopes associated with the Access Token used to access the
OpenAIRE AAI UserInfo Endpoint will determine what Claims will be released.
These Claims are represented by a JSON object that contains a collection of name
and value pairs for the Claims.

The following scope values can be used to request Claims from the OpenAIRE AAI
UserInfo Endpoint:

<!-- markdownlint-disable line-length no-inline-html -->

| Scope                   | Claims                                                              |
| ----------------------- | ------------------------------------------------------------------- |
| `openid`                | `sub`                                                               |
| `voperson_id`           | `voperson_id`                                                       |
| `profile`               | <ul><li>`name`</li><li>`given_name`</li><li>`family_name`</li></ul> |
| `email`                 | <ul><li>`email`</li><li>`email_verified`</li></ul>                  |
| `eduperson_entitlement` | `eduperson_entitlement`                                             |
| `orcid`                 | `orcid`                                                             |

<!-- markdownlint-enable line-length no-inline-html -->

A more extensive list of all the attributes that may be made available to
Service Providers is included in the [User Attribute](#user-attributes) section.

### Grant Types

OpenAIRE AAI supports the following OpenID Connect/OAuth2 grant types:

- Authorization Code: used by Web Apps executing on a server.
- Token Exchange: used by clients to request and obtain security tokens in
  support of delegated access to resources.
- Device Code: used by devices that lack a browser to perform a user-agent based
  OAuth flow.

### Endpoints

The most important OIDC/OAuth2 endpoints are listed below:

<!-- markdownlint-disable line-length -->

| Endpoint               | Production environment                                          | BETA environment                                                     |
| ---------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| Provider configuration | <ul><li><https://aai.openaire.eu/oidc/.well-known/openid-configuration> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/.well-known/openid-configuration> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/.well-known/openid-configuration> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/.well-known/openid-configuration> (Keycloak)</li></ul>                                                           |
| Client registration    | _Contact us at `aai` `<AT>` `openaire.eu`_                      | _Contact us at `aai` `<AT>` `openaire.eu`_                                                                                                                                                                       |
| Issuer                 | <ul><li>`https://aai.openaire.eu/oidc/` (MITREid Connect)</li><li>`https://aai.openaire.eu/auth/realms/openaire` (Keycloak)</li></ul> | <ul><li>`https://beta.aai.openaire.eu/oidc/` (MITREid Connect)</li><li>`https://beta.aai.openaire.eu/auth/realms/openaire` (Keycloak)</li></ul>                                                                                                                                                                                             |
| Authorisation          | <ul><li><https://aai.openaire.eu/oidc/authorize> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/auth> (Keycloak)</li></ul>                        | <ul><li><https://beta.aai.openaire.eu/oidc/authorize> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/auth> (Keycloak)</li></ul>                                                                                          |
| Token                  | <ul><li><https://aai.openaire.eu/oidc/token> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/token> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/token> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/token> (Keycloak)</li></ul>                                                                                                                       |
| Device Code            | <ul><li><https://aai.openaire.eu/oidc/devicecode> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/auth/device> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/devicecode> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/auth/device> (Keycloak)</li></ul>                                                                                                 |
| JSON Web Key(jwt)      | <ul><li><https://aai.openaire.eu/oidc/jwk> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/certs> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/jwk> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/certs> (Keycloak)</li></ul>                                                                                                                           |
| User Info              | <ul><li><https://aai.openaire.eu/oidc/userinfo> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/userinfo> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/userinfo> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/userinfo> (Keycloak)</li></ul>                                                                                                           |
| Introspection          | <ul><li><https://aai.openaire.eu/oidc/introspect> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/token/introspect> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/introspect> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/token/introspect> (Keycloak)</li></ul>                                                                                       |
| Logout                 | <ul><li><https://aai.openaire.eu/oidc/saml/logout> (MITREid Connect)</li><li><https://aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/logout> (Keycloak)</li></ul> | <ul><li><https://beta.aai.openaire.eu/oidc/saml/logout> (MITREid Connect)</li><li><https://beta.aai.openaire.eu/auth/realms/openaire/protocol/openid-connect/logout> (Keycloak)</li></ul>                                                                                                         |

<!-- markdownlint-enable line-length -->

#### Authorization Endpoint

The Authorization Endpoint performs Authentication of the End-User. This is done
by sending the User Agent to the Authorization Server\'s Authorization Endpoint
for Authentication and Authorization, using request parameters defined by OAuth
2.0 and additional parameters and parameter values defined by OpenID Connect.

The request parameters of the Authorization endpoint are:

- `client_id`: id of the client that ask for authentication to the Authorization
  Server.
- `redirect_uri`: URI to which the response will be sent.
- `scope`: A list of attributes that the application requires.
- `state`: Opaque value used to maintain state between the request and the
  callback.
- `response_type`: value that determines the authorization processing flow to be
  used. For **Authorization Code** grant set `response_type=code`. This way the
  response will include an authorization code.

#### Token Endpoint

To obtain an Access Token, an ID Token, and optionally a Refresh Token, the
Client sends a Token Request to the Token Endpoint.

Depending on the grant type, the following parameters are required:

##### Authorization Code

<!-- markdownlint-disable line-length -->

| Parameter      | Presence | Values                                                                                             |
| -------------- | -------- | -------------------------------------------------------------------------------------------------- |
| `grant_type`   | Required | `authorization_code`                                                                               |
| `code`         | Required | The value of the code in the response from authorization endpoint.                                 |
| `redirect_uri` | Required | URI to which the response will be sent (must be the same as the request to authorization endpoint) |

<!-- markdownlint-enable line-length -->

##### Proof Key for Code Exchange (PKCE)

The Proof Key for Code Exchange (PKCE, pronounced pixie) extension
([RFC 7636](https://tools.ietf.org/html/rfc7636)) describes a technique for
public clients (clients without `client_secret`) to mitigate the threat of
having the authorization code intercepted. The technique involves the client
first creating a secret, and then using that secret again when exchanging the
authorization code for an access token. This way if the code is intercepted, it
will not be useful since the token request relies on the initial secret.

###### Client configuration

To enable PKCE you need to send an email to `aai` `<AT>` `openaire.eu`,
indicating the `client_id` of the client, and request to enable PKCE.

###### Protocol Flow

Because the PKCE-enhanced Authorization Code Flow builds upon the standard
Authorization Code Flow, the steps are very similar.

First, the client creates and records a secret named the `code_verifier`. The
`code_verifier` is a high-entropy cryptographic random STRING using the
unreserved characters [A-Z] / [a-z] / [0-9] / "-" / "." / "\_" / "~", with a
minimum length of 43 characters and a maximum length of 128 characters. Then the
client creates a `code_challenge` derived from the `code_verifier` by using one
of the following transformations on the code verifier:

- `plain` code_challenge = code_verifier
- `S256` code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))

If the client is capable of using `S256`, it MUST use `S256`. Clients are
permitted to use `plain` only if they cannot support `S256` for some technical
reason.

:::tip

There are various tools that generate these values such as
<https://tonyxu-io.github.io/pkce-generator/>

:::

Then the `code_challenge` is sent in the Authorization Request along with the
transformation method (`code_challenge_method`).

Example request:

```shell
GET "${AUTHORISATION_ENDPOINT}?
      client_id=${CLIENT_ID}
      &scope=openid%20profile%20email
      &redirect_uri=${REDIRECT_URI}
      &response_type=code
      &code_challenge=${CODE_CHALLENGE}
      &code_challenge_method=S256"
```

:::info

You can find the _Authorisation Endpoint_ in the [Endpoints](#endpoints) table.

:::

The Authorization Endpoint responds as usual but records `code_challenge` and
the `code_challenge_method`.

Example response:

```shell
HTTP/1.1 302 Found
  Location: ${REDIRECT_URI}?
    code=fgtLHT
```

The client then sends the authorization code in the Access Token Request as
usual but includes the `code_verifier` secret generated in the first request.

Example request:

```shell
curl -X POST "${TOKEN_ENDPOINT}" \
  -d "grant_type=authorization_code" \
  -d "code=${CODE}" \
  -d "client_id=${CLIENT_ID}" \
  -d "redirect_uri=${REDIRECT_URI}" \
  -d "code_verifier=${CODE_VERIFIER}" | python -m json.tool
```

:::info

You can find the _Token Endpoint_ in the [Endpoints](#endpoints) table.

:::

The authorization server transforms `code_verifier` and compares it to
`code_challenge` from the first request. Access is denied if they are not equal.

Example response:

```json
{
  "access_token": "eyJraWQiOiJvaWRjIiwiYWxnIjoiUlMyNTYifQ...",
  "expires_in": 3599,
  "id_token": "eyJraWQiOiJvaWRjIiwiYWxnIjoiUlMyNTYifQ...",
  "scope": "openid email profile",
  "token_type": "Bearer"
}
```

##### Refresh request

The following request allows obtaining an access token from a refresh token
using the `grant_type` value `refresh_token`:

| Parameter       | Presence | Values                                        |
| --------------- | -------- | --------------------------------------------- |
| `client_id`     | Required | The identifier of the client.                 |
| `client_secret` | Required | The secret value of the client.               |
| `grant_type`    | Required | `refresh_token`                               |
| `refresh_token` | Required | `The value of the refresh token`              |
| `scope`         | Required | This parameter should contain openid at least |

Example request:

```shell
curl -X POST "${TOKEN_ENDPOINT}" \
  -u "${CLIENT_ID}":"${CLIENT_SECRET}" \
  -d "grant_type=refresh_token" \
  -d "refresh_token=${REFRESH_TOKEN}" \
  -d "scope=openid%20email%20profile" | python -m json.tool;
```

:::info

You can find the _Token Endpoint_ in the [Endpoints](#endpoints) table.

:::

Example response:

```json
{
  "access_token": "eyJraWQiOiJvaWRjIiwiYWx...",
  "expires_in": 3599,
  "id_token": "eyJraWQiOiJvaWRjIiwiYW...",
  "refresh_token": "eyJhbGciOiJub25...",
  "scope": "openid profile email",
  "token_type": "Bearer"
}
```

###### Refresh Request with PKCE

To combine the refresh token grant type with PKCE you need to make the following
request:

```shell
curl -X POST "${TOKEN_ENDPOINT}" \
  -d "client_id=${CLIENT_ID}" \
  -d "grant_type=refresh_token" \
  -d "refresh_token=${REFRESH_TOKEN}" \
  -d "scope=openid%20email%20profile" | python -m json.tool;
```

:::info

You can find the _Token Endpoint_ in the [Endpoints](#endpoints) table.

:::

##### Token Exchange

To get a token from client B using a token issued for client A, the parameters
of the request are:

<!-- markdownlint-disable line-length -->

| Parameter            | Presence | Values                                                                                                    |
| -------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `grant_type`         | Required | `urn:ietf:params:oauth:grant-type:token-exchange`                                                         |
| `audience`           | Optional | Define the logical name of the service that the token will be used for                                    |
| `subject_token`      | Required | The value of the access token                                                                             |
| `subject_token_type` | Required | `urn:ietf:params:oauth:token-type:access_token` (because this feature accepts access tokens only)         |
| `scope`              | Optional | Define one or more scopes that are contained in the original token; otherwise all scopes will be selected |

<!-- markdownlint-enable line-length -->

Example request:

```shell
curl -X POST "${TOKEN_ENDPOINT}" \
  -u "${CLIENT_B_ID}":"${CLIENT_B_SECRET}" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:token-exchange" \
  -d "audience=tokenExchange" \
  -d "subject_token=${ACCESS_TOKEN_A}" \
  -d "subject_token_type=urn:ietf:params:oauth:token-type:access_token" \
  -d "scope=openid%20profile%20offline_access" | python -m json.tool;
```

:::info

You can find the _Token Endpoint_ in the [Endpoints](#endpoints) table.

:::

Example response:

```json
{
  "access_token": "eyJraWQiOiJvaWRjIiwiYWxnIjoiUl...",
  "expires_in": 3599,
  "id_token": "eyJraWQiOiJvaWRjIiwiYWxnIjoiUl...",
  "refresh_token": "eyJhbGciOiJub25lIn0.eyJleHAiO...",
  "scope": "openid profile offline_access",
  "token_type": "Bearer"
}
```

##### Device Code

The device code flow enables OAuth clients on (input-constrained) devices to
obtain user authorization for accessing protected resources without using an
on-device user-agent, provided that they have an Internet connection.

###### 1. Device Authorization Request

The client initiates the authorization flow by requesting a set of
verification codes from the authorization server by making an HTTP "POST"
request to the device authorization endpoint. The client constructs the request
with the following parameters:

<!-- markdownlint-disable line-length -->

| Parameter   | Presence | Values                                                                                                    |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `client_id` | Required | The identifier of the client                                                                              |
| `scope`     | Optional | Define one or more scopes that are contained in the original token; otherwise all scopes will be selected |

<!-- markdownlint-enable line-length -->

Example request:

```shell
curl -X POST "${DEVICE_CODE_ENDPOINT}" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=${CLIENT_ID}" \
  -d "scope=openid%20email%20profile" | python -m json.tool
```

:::info

You can find the _Device Code Endpoint_ in the [Endpoints](#endpoints) table.

:::

Example response:

```json
{
  "device_code": "c4341bd6-5e82-4f9c-9f6f-5842409d48db",
  "expires_in": 600,
  "user_code": "IEJSJB",
  "verification_uri": "https://aai.openaire.eu/oidc/device"
}
```

###### 2. User Interaction

After receiving a successful Authorization Response, the client displays or
otherwise communicates the `user_code` and the `verification_uri` to the end
user and instructs them to visit the URI in a user agent on a secondary
device (for example, in a browser on their mobile phone), and enter the
user code.

###### 3. Device Access Token Request

After displaying instructions to the user, the client makes an Access Token
Request to the token endpoint. The request contains the following parameters:

<!-- markdownlint-disable line-length -->

| Parameter       | Presence | Values                                                                                                    |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `grant_type`    | Required | `urn:ietf:params:oauth:grant-type:device_code`                                                            |
| `device_code`   | Required | The device verification code, `device_code` from the Device Authorization Response                        |
| `client_id`     | Required | The identifier of the client                                                                              |
| `client_secret` | Required | The secret value of the client                                                                            |
| `scope`         | Optional | Define one or more scopes that are contained in the original token; otherwise all scopes will be selected |

<!-- markdownlint-enable line-length -->

Example request:

```shell
curl -X POST "${TOKEN_ENDPOINT}" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Adevice_code" \
  -d "device_code=${DEVICE_CODE}" \
  -d "client_id=${CLIENT_ID}" \
  -d "client_secret=${CLIENT_SECRET}" \
  -d "scope=openid%20profile" | python -m json.tool
```

:::info

You can find the _Token Endpoint_ in the [Endpoints](#endpoints) table.

:::

Example response:

```json
{
  "access_token": "eyJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZG1pbiIs...",
  "expires_in": 3599,
  "id_token": "eyJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5MDM0Mi...",
  "scope": "openid profile",
  "token_type": "Bearer"
}
```

###### Device Code with PKCE

To combine Device Code flow with PKCE you need to make the following requests:

1 - Device Authorization Request:

```shell
curl -X POST "${DEVICE_CODE_ENDPOINT}" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=${CLIENT_ID}" \
  -d "scope=openid%20email%20profile" \
  -d "code_challenge=${CODE_CHALLENGE}" \
  -d "code_challenge_method=S256" | python -m json.tool
```

:::info

You can find the _Device Code Endpoint_ in the [Endpoints](#endpoints) table.

:::

2 - Device Access Token Request

```shell
curl -X POST "${TOKEN_ENDPOINT}" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Adevice_code" \
  -d "device_code=${DEVICE_CODE}" \
  -d "client_id=${CLIENT_ID}" \
  -d "code_verifier=${CODE_VERIFIER}" | python -m json.tool
```

:::info

You can find the _Token Endpoint_ in the [Endpoints](#endpoints) table.

:::

#### Logout Endpoint

The OpenAIRE AAI OpenID Provider supports the
[OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html)
specification where the logout starts by redirecting the user to a specific
endpoint at the OpenID Provider.

This endpoint is normally obtained via the `end_session_endpoint` element of the
OP's Configuration page and the parameters that are used in the logout request
at the Logout Endpoint are defined below:

- `id_token_hint`: ID Token previously issued by the OP to the Relying Party
  passed to the Logout Endpoint as a hint about the end user's current
  authenticated session with the Client. This is used as an indication of the
  identity of the end user that the RP is requesting be logged out by the OP.
- `client_id`: OAuth 2.0 Client Identifier valid at the Authorization Server.
  This parameter is needed to specify the Client Identifier when
  `post_logout_redirect_uri` is used but `id_token_hint` is not. Using this
  parameter, a confirmation dialog will be presented to the end user.
- `post_logout_redirect_uri`: URI to which the RP is requesting that the end
  user's browser be redirected after a logout has been performed. This URI
  should use the HTTPS scheme and the value must have been previously registered
  in the client configuration. Note that you need
  to include either the `client_id` or `id_token_hint` parameter in case the
  `post_logout_redirect_uri` is included.

##### Example Requests

```http
  HTTP/1.1 302 Found
  Location: ${LOGOUT_ENDPOINT}?
    id_token_hint=${ID_TOKEN}
```

```http
  HTTP/1.1 302 Found
  Location: ${LOGOUT_ENDPOINT}?
    client_id=${CLIENT_ID}
```

:::info

You can find the `LOGOUT_ENDPOINT` in the [Endpoints](#endpoints) table.

:::

### Claims-based authorisation

OpenAIRE AAI provides information about the authenticated user that may be used
by Service Providers in order to control user access to resources. This
information is provided by the OpenAIRE AAI OpenID Provider in the form of
[OIDC claims](#claims). The table below lists the claims that are relevant for
user authorisation:

<!-- markdownlint-disable line-length -->

| Description                                                                                     | OIDC Claim              |
| ----------------------------------------------------------------------------------------------- | ----------------------- |
| [VO/group membership/roles of the authenticated user](#vogroup-membership-and-role-information) | `eduperson_entitlement` |

<!-- markdownlint-enable line-length -->

### Example OIDC Client

In this guide we will demonstrate how to install and configure a
[Simple OIDC Client](https://github.com/rciam/simple-oidc-client-php).

#### Install simple-oidc-client-php

This guide assumes the Apache HTTP server has been installed and the document
root is `/var/www/html`

Move to the apache document root and download and extract
[simple-oidc-client-php-v2.3.1.zip](https://github.com/rciam/simple-oidc-client-php/releases/download/v2.3.1/simple-oidc-client-php-v2.3.1.zip).

#### Configure Client

To register the Client in the BETA instance of OpenAIRE AAI you need to send as
an email as described in [Client registration](#client-registration) section and
include a `Redirect URI` (e.g.
`http://localhost/simple-oidc-client-php/refreshtoken.php`), the needed Grant
Type and Scopes. The Redirect URI must link to `refreshtoken.php` which is
located in simple-oidc-client-php directory.

A member of the OpenAIRE AAI Support team will take care of your request and
they will send you the `Client ID` and `Client Secret`.

#### Configure simple-oidc-client-php

Now that you have everything you need, you can configure your login settings. Go
to your terminal and open `config.php` with your favourite text editor.

Example:

```shell
vi simple-oidc-client-php/config.php
```

Let's go quickly through the settings:

- `title` required, the title on the navigation bar
- `img` required, the source of the logo
- `scope_info` optional, a message that informs the user for the application
  requirements
- `issuer` required, the base URL of our IdentityServer instance. This will
  allow oidc-client to query the metadata endpoint so it can validate the tokens
- `client_id` required, the id of the client we want to use when hitting the
  authorization endpoint
- `client_secret` optional, a value the offers better security to the message
  flow
- `pkceCodeChallengeMethod` optional, a string that defines the code challenge
  method for PKCE. Choose between `plain` or `S256`.
- `redirect_url` required, the redirect URL where the client and the browser
  agree to send and receive correspondingly the code
- `scopesDefine` required, defines the scopes the client supports
- `refresh_token_note` optional, info for the refresh token
- `access_token_note` optional, info for the access token
- `manage_token_note` optional, message the informs the user where can manage
  his tokens
- `manageTokens` optional, URL of the manage tokens service
- `sessionName` required, define the name of the cookie session
- `sessionLifetime` required, define the duration of the session. This must be
  equal to the validity time of the access token.

You must change the followings options based on your Service configuration you
setup earlier:

- `issuer`
- `client_id`
- `client_secret`
- `redirect_url`
- `scopesDefine`
- `sessionName` (based on the installation path of the portal)

An example configuration follows:

```php
<?php
// index.php interface configuration
$title = "Generate Tokens";
$img = "https://clickhelp.co/images/feeds/blog/2016.05/keys.jpg";
$scope_info = "This service requires the following permissions for your account:";

// Client configuration
$issuer = "https://beta.aai.openaire.eu/oidc/";
$client_id = "CHANGE_ME";
$client_secret = "CHANGE_ME";  // comment if you are using PKCE
// $pkceCodeChallengeMethod = "S256";   // uncomment to use PKCE
$redirect_url = "http://localhost/simple-oidc-client-php/refreshtoken.php";
// add scopes as keys and a friendly message of the scope as value
$scopesDefine = array(
    'openid' => 'log in using your identity',
    'email' => 'read your email address',
    'profile' => 'read your basic profile info',
);
// refreshtoken.php interface configuration
$refresh_token_note = "NOTE: New refresh tokens expire in 12 months.";
$access_token_note = "NOTE: New access tokens expire in 1 hour.";
$manage_token_note = "You can manage your refresh tokens in the following link: ";
$manageTokens = $issuer . "manage/user/services";
$sessionName = "simple-oidc-client-php";
$sessionLifetime = 60*60;  // must be equal to access token validation time in seconds
```

### Client Migration to Keycloak

The migration guide below applies to OIDC clients registered in the
MITREid Connect based OpenID Provider of the OpenAIRE AAI.

:::danger

Beginning **May 2, 2023**, clients using the legacy OIDC endpoints
in the **BETA** environment will no longer be supported.

:::

#### How to Migrate your Service to Keycloak

All the clients that were registered in MITREid Connect have been moved to
Keycloak preserving all the options (Client ID, Client Secret, Redirect URIs
etc.), so you do not need to re-register your client.

##### New Endpoints

The first thing you need to do is to update the OIDC endpoints according to the
[Endpoints](#endpoints) table. If your OIDC Application/Library supports
[OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html),
then you only need to update the `issuer`. Otherwise, you need to update all
the Endpoints separately, most notably the Authorization Endpoint, the Token
Endpoint and the UserInfo Endpoint.

##### Size of the Tokens

The size of the Access/Refresh Tokens issued by Keycloak is larger compared to
the respective Tokens issued by MITREid Connect. For example, the size of an
Access Token is around 1400 characters, depending on the information that is
included in the payload of the JWT. So make sure that your OIDC implementation
can handle larger Tokens.

##### Logout

The Redirection URI query parameter in the logout request has been changed from
`redirect` to `post_logout_redirect_uri` and MUST be URL encoded. Also, the
allowed value(s) for the `post_logout_redirect_uri` parameter MUST be
pre-registered in the client configuration on the OpenAIRE AAI. See
[Logout Endpoint](#logout-endpoint) for additional parameters that
need to be specified in the logout request.

##### Token Introspection

The Token Introspection is available to all the clients that are using any
authentication method (`client_secret_basic`, `client_secret_post`,
`client_secret_jwt` or `private_key_jwt`) (Confidential Clients) to the Token
Endpoint. Public Clients (clients that do not use any authentication method)
will not be able to get a successful response from the Introspection Endpoint.

##### PKCE

Enabling Proof Key for Code Exchange (PKCE) is highly recommended to avoid code
injection and code replay attacks. If your client **cannot** use PKCE, please
make sure that PKCE is **disabled** in the client configuration on the OpenAIRE
AAI. Otherwise, you will get the following HTTP response during authentication:

```http
error=invalid_request&error_description=Missing parameter: code_challenge_method
```

To enable/disable PKCE for your client, you need to send your request via email
to `aai` `<AT>` `openaire.eu`, indicating the `client_id` of the client.

##### Device Code Grant

If you are using a confidential client with the Device Code grant, please make
sure that the `client_secret` is present in the request to the Device Code
Endpoint either as HTTP Basic or HTTP POST parameter (see
[Device Authorization Request](#1-device-authorization-request)).

##### Token Exchange Grant

If you are using the Token Exchange grant, please make sure that the `audience`
(optional parameter) defines the logical name of the service that the token will
be used for; when specified, it MUST match the client ID of a client registered in the OpenAIRE AAI otherwise an `invalid_client` error is returned
(`"description": "audience not found"`).

##### Client Credentials Grant

If you are using the Client Credentials grant, there is a minor change in the
responses from UserInfo and Introspection Endpoints. The **Client ID** of the
client is released through the `client_id` Claim instead of the `sub` Claim.
The `sub` Claim is still present in the response but contains a unique, opaque,
non-reassignable identifier of the client, typically scoped `@openaire.eu`.

#### Common issues

##### Error messages referring to missing `code_challenge`, `code_challenge_method` or `code_verifier` HTTP parameter

If you get error messages containing the PKCE HTTP parameters, probably the PKCE
mode is enabled in your Client Configuration but your OIDC Client library is not
using PKCE. To fix this, refer to the [PKCE section](#pkce) of the migration
guide.

##### Error messages referring to `invalid_code`

If you try to perform the Authorization Code flow and you get an `invalid_code`
error message, probably your OIDC Client sends the Authorization Request to the
Authorization Endpoint of the Keycloak based OpenAIRE OP and then sends the
`code` to the Token Endpoint of the MITREid Connect based OpenAIRE OP or
vice versa.

To fix this you need to verify that you have updated all the OIDC Endpoints with
the Keycloak ones. You can find all the OIDC Endpoints of Keycloak in the
[Endpoint](#endpoints) table.

##### Error messages referring to the `redirect_uri`

If you try to perform the Authorization Code flow and you get an
`invalid_redirect_uri` error, probably the `redirect_uri` in the Authorization
Request does not match any of the allowed Redirection URIs in the Client
Configuration.

To solve this, you need to send the updated list of allowed Redirection URIs via
email to `aai` `<AT>` `openaire.eu`, indicating the `client_id` of the client.

##### UserInfo `invalid_token` or `401 Unauthorized` error response

If you are trying to make a request to the UserInfo Endpoint and the response
contains the `invalid_token` error message, probably you are using an invalid
Token or the UserInfo Endpoint is wrong.

To solve this, please make sure the that:

1. You have obtained an Keycloak issued Access Token and you make a request to
   the Keycloak based UserInfo Endpoint
1. You have added the Access Token to the Authorization header of the request

##### `502 Bad Gateway` error after redirecting back to the Service

If you are using NGINX as a Reverse Proxy, and you are getting the following
error message in the logs:

> upstream sent too big header while reading response header from upstream

Then you need to increase the size of the buffer by adding the following options
in the vhost configuration:

```nginx
proxy_buffers 4 256k;
proxy_buffer_size 128k;
proxy_busy_buffers_size 256k;
```

## User attributes

This section defines the attributes that can be made available to services
connected to OpenAIRE AAI.

### 1. User Identifier

<!-- markdownlint-disable line-length no-inline-html -->

|          attribute name | User Identifier
| ----------------------: | :---------------------------------------------------------------------------------------- |
|         **description** | A globally unique, opaque, persistent and non-reassignable identifier for the user. For users whose community identity is managed by the OpenAIRE AAI, this identifier is of the form `<uniqueID>@openaire.eu`. The `<uniqueID>` portion is an opaque identifier issued by the OpenAIRE AAI. |
|   **SAML Attribute(s)** | <ul><li>`urn:oid:1.3.6.1.4.1.25178.4.1.6` (voPersonID)</li><li>`1.3.6.1.4.1.5923.1.1.1.13` (eduPersonUniqueId)</li></ul> |
|          **OIDC scope** | <ul><li>`voperson_id`</li><li>`openid`</li></ul>                                          |
|       **OIDC claim(s)** | <ul><li>`voperson_id`</li><li>`sub`</li></ul>                                             |
| **OIDC claim location** | <ul><li>ID token</li><li>Userinfo endpoint</li><li>Introspection endpoint</li></ul>       |
|              **origin** | The User Identifier is assigned by the OpenAIRE AAI or an external AAI service managing the community identity of the user |
|             **changes** | No                                                                                        |
|        **multiplicity** | No                                                                                        |
|        **availability** | Always                                                                                    |
|             **example** | _ef72285491ffe53c39b75bdcef46689f5d26ddfa00312365cc4fb5ce97e9ca87@aai.openaire.eu_        |
|               **notes** | Use the User Identifier within your application as the unique identifier key for the user |
|              **status** | Stable                                                                                    |

<!-- markdownlint-enable line-length no-inline-html -->

### 2. Display Name

|          attribute name | Display Name                                      |
| ----------------------: | :------------------------------------------------ |
|         **description** | The user's full name, in a displayable form       |
|   **SAML Attribute(s)** | `urn:oid:2.16.840.1.113730.3.1.241` (displayName) |
|          **OIDC scope** | `profile`                                         |
|       **OIDC claim(s)** | `name`                                            |
| **OIDC claim location** | Userinfo endpoint                                 |
|              **origin** | Provided by user's Identity Provider              |
|             **changes** | Yes                                               |
|        **multiplicity** | Single-valued                                     |
|        **availability** | Always                                            |
|             **example** | _John Doe_                                        |
|               **notes** | -                                                 |
|              **status** | Stable                                            |

### 3. Given Name

|          attribute name | Given Name                           |
| ----------------------: | :----------------------------------- |
|         **description** | The user's first name                |
|   **SAML Attribute(s)** | `urn:oid:2.5.4.42` (givenName)       |
|          **OIDC scope** | `profile`                            |
|       **OIDC claim(s)** | `given_name`                         |
| **OIDC claim location** | Userinfo endpoint                    |
|              **origin** | Provided by user's Identity Provider |
|             **changes** | Yes                                  |
|        **multiplicity** | Single-valued                        |
|        **availability** | Always                               |
|             **example** | _John_                               |
|               **notes** | -                                    |
|              **status** | Stable                               |

### 4. Family Name

|          attribute name | Family Name                          |
| ----------------------: | :----------------------------------- |
|         **description** | The user's last name                 |
|   **SAML Attribute(s)** | `urn:oid:2.5.4.4` (sn)               |
|          **OIDC scope** | `profile`                            |
|       **OIDC claim(s)** | `family_name`                        |
| **OIDC claim location** | Userinfo endpoint                    |
|              **origin** | Provided by user's Identity Provider |
|             **changes** | Yes                                  |
|        **multiplicity** | Single-valued                        |
|        **availability** | Always                               |
|             **example** | _Doe_                                |
|               **notes** | -                                    |
|              **status** | Stable                               |

### 5. Email Address

<!-- markdownlint-disable line-length no-inline-html -->

|          attribute name | Email Address                                                               |
| ----------------------: | :-------------------------------------------------------------------------- |
|         **description** | The user's email address                                                    |
|   **SAML Attribute(s)** | `urn:oid:0.9.2342.19200300.100.1.3` (mail)                                  |
|          **OIDC scope** | `email`                                                                     |
|       **OIDC claim(s)** | `email`                                                                     |
| **OIDC claim location** | <ul><li>Userinfo endpoint</li><li>Introspection endpoint</li></ul>          |
|              **origin** | Provided by user's Identity Provider                                        |
|             **changes** | Yes                                                                         |
|        **multiplicity** | Single-valued                                                               |
|        **availability** | Always                                                                      |
|             **example** | _john.doe@example.org_                                                      |
|               **notes** | This **MAY NOT** be unique and is **NOT** suitable for use as a primary key |
|              **status** | Stable                                                                      |

<!-- markdownlint-enable line-length no-inline-html -->

### 6. Verified email flag

<!-- markdownlint-disable line-length no-inline-html -->

|          attribute name | Verified email flag                                                 |
| ----------------------: | :------------------------------------------------------------------ |
|         **description** | True if the user's email address has been verified; otherwise false |
|   **SAML Attribute(s)** | -                                                                   |
|          **OIDC scope** | `email`                                                             |
|       **OIDC claim(s)** | `email_verified`                                                    |
| **OIDC claim location** | <ul><li>Userinfo endpoint</li><li>Introspection endpoint</li></ul>  |
|              **origin** | OpenAIRE AAI assigns this attribute on user registration            |
|             **changes** | Yes                                                                 |
|        **multiplicity** | Single-valued                                                       |
|        **availability** | Always                                                              |
|             **example** | _true_                                                              |
|               **notes** | This claim is available only in OpenID Connect                      |
|              **status** | Stable                                                              |

<!-- markdownlint-enable line-length no-inline-html -->

### 8. Affiliation

<!-- markdownlint-disable line-length no-inline-html -->

|          attribute name | Affiliation                                                              |
| ----------------------: | :----------------------------------------------------------------------- |
|         **description** | The user's affiliation within a particular security domain (scope)       |
|   **SAML Attribute(s)** | `urn:oid:1.3.6.1.4.1.5923.1.1.1.9` (eduPersonScopedAffiliation)          |
|          **OIDC scope** | -                                                                        |
|       **OIDC claim(s)** | -                                                                        |
| **OIDC claim location** | <ul><li>Userinfo endpoint</li><li>Introspection endpoint</li></ul>       |
|              **origin** | OpenAIRE AAI assigns this attribute on user registration                 |
|             **changes** | Yes                                                                      |
|        **multiplicity** | Multi-valued                                                             |
|        **availability** | Always                                                                   |
|             **example** | _member@example.org_                                                     |
|               **notes** | Service Providers are encouraged to validate the scope of this attribute |
|              **status** | Stable                                                                   |

<!-- markdownlint-enable line-length no-inline-html -->

### 9. Groups

<!-- markdownlint-disable line-length no-inline-html -->

|          attribute name | Groups                                                                       |
| ----------------------: | :--------------------------------------------------------------------------- |
|         **description** | The user's group/VO membership/role information expressed as entitlements    |
|   **SAML Attribute(s)** | `urn:oid:1.3.6.1.4.1.5923.1.1.1.7` (eduPersonEntitlement)                    |
|          **OIDC scope** | `eduperson_entitlement`                                                      |
|       **OIDC claim(s)** | `eduperson_entitlement`                                                      |
| **OIDC claim location** | <ul><li>Userinfo endpoint</li><li>Introspection endpoint</li></ul>           |
|              **origin** | Group memberships are managed by group administrators                        |
|             **changes** | Yes                                                                          |
|        **multiplicity** | Multi-valued                                                                 |
|        **availability** | Not always                                                                   |
|             **example** | _urn:mace:example.org:group:vo.example.org:role=vm_operator#aai.openaire.eu_ |
|               **notes** | -                                                                            |
|              **status** | Stable                                                                       |

<!-- markdownlint-enable line-length no-inline-html -->

## User authorisation

The following information about the authenticated user can be provided by
OpenAIRE AAI in order to control user access to resources:

1. VO/group membership and role information about the authenticated user

### VO/group membership and role information

#### Background

VO/group membership and role information is encoded in entitlements
(`eduPersonEntitlement` attribute values in SAML or `eduperson_entitlement`
claim in OIDC). These entitlements are typically used to indicate access rights
to protected resources. Entitlements are multi-valued, with each value formatted
as a URN.

#### Syntax

An entitlement value expressing group membership and role information has the
following syntax (components enclosed in square brackets are OPTIONAL):

```text
urn:mace:example.org:group:<GROUP>[:<SUBGROUP>*][:role=<ROLE>]#<GROUP-AUTHORITY>
```

where:

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

**Example:**

```text
urn:mace:example.org:group:vo.example.org:role=member#aai.openaire.eu
```
