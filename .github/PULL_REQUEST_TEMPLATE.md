# Description
<!-- What does this PR do and why? -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Refactor / infrastructure
- [ ] Security fix

---

## 🔒 Security & Privacy Checklist
<!-- ISO 27001:2022 A.8.27 — mark N/A if not applicable to this change -->

- [ ] **Least privilege** — code, roles, and permissions scoped to minimum required
- [ ] **Secure defaults** — new config/features are secure out of the box
- [ ] **Attack surface** — no unnecessary endpoints, dependencies, or permissions added
- [ ] **Fail securely** — errors default to deny; no sensitive data exposed in failures
- [ ] **Don't trust inputs** — external data and third-party services validated
- [ ] **No secrets in code** — credentials stored in AWS Secrets Manager, not hardcoded
- [ ] **PII handled correctly** — only Cognito `sub` sent to analytics/third parties; no raw email/phone
- [ ] **Privacy by default** — data minimisation applied; no PII collected beyond what's needed

## Security Notes
<!-- Anything reviewers should pay attention to, or N/A -->
