const hasOidcRequestContext =
  Boolean(process.env.ACTIONS_ID_TOKEN_REQUEST_URL) ||
  Boolean(process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN);

if (hasOidcRequestContext) {
  console.error(
    "Unexpected OIDC request context in the PR job; refusing to access it."
  );
  process.exit(1);
}

console.log("[DEMO] Untrusted pull-request code ran in the test job.");
console.log(
  "[DEMO] No OIDC request context was granted; no token was requested or sent."
);
