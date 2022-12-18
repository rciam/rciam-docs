---
sidebar_position: 1
---

# Group/role information

The information about the groups a user is a member of is commonly used by
Services in order to authorise user access to protected resources. This
information is expressed in the form of entitlements. These entitlements
are communicated to services through the multi-valued `eduperson_entitlement`
Claim in the case of OpenID Connect or the `eduPersonEntitlement`
(`urn:oid:1.3.6.1.4.1.5923.1.1.1.7`) attribute in the case of SAML.

## Syntax

An entitlement value expressing group membership and role information is
constructed as a URN according to
[AARC-G002](https://aarc-community.org/guidelines/aarc-g002). Thus, it has
has the following syntax (components enclosed in square brackets are OPTIONAL):

`<NAMESPACE>:group:<GROUP>[:<SUBGROUP>*][:role=<ROLE>]#<AUTHORITY>`

Entitlements managed by the OpenAIRE AAI use the `urn:geant:openaire.eu`
namespace. For example:

`urn:geant:openaire.eu:group:Registered+User:role=member#aai.openaire.eu`
