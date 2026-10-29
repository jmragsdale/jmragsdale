# Hi, I'm Jermaine 👋🏾

### Cloud Security Architect | AI Security & Policy as Code | CISSP

I build security controls for cloud platforms and AI systems, with a focus on identity, infrastructure automation and controls that can be inspected in code. My projects span AWS, Azure and Google Cloud, with fintech interests in auditability and data protection.

[![Portfolio](https://img.shields.io/badge/Portfolio-jmragsdale.com-1F6FEB?style=flat&logo=googlechrome&logoColor=white)](https://www.jmragsdale.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jermaine-ragsdale-cissp/)
[![Credly](https://img.shields.io/badge/Credly-FF6B00?style=flat&logo=credly&logoColor=white)](https://www.credly.com/users/jermaine-ragsdale/badges)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:jermaine.ragsdale@gmail.com)

Atlanta Metro, GA · Open to remote opportunities and consulting.

## 🔐 Featured security work

Code, tools and reference architectures. The evidence links show implementation details and documented checks; validation scope and deployment requirements stay with each project.

| Project | What I implemented | Evidence to inspect |
| --- | --- | --- |
| [Agent Tool Gateway](https://github.com/jmragsdale/agent-tool-gateway) | Policy enforcement between AI agents and tools: principal-bound access, argument checks and approval gates. | [Policy tests](https://github.com/jmragsdale/agent-tool-gateway/blob/main/tests/test_gateway.py) · [Demonstration](https://github.com/jmragsdale/agent-tool-gateway#sample-output) |
| [Vertex AI Guardrails](https://github.com/jmragsdale/gcp-vertex-ai-guardrails-terraform) | Terraform controls for model access, workload identity, network reach, screening and audit records. | [Control matrix](https://github.com/jmragsdale/gcp-vertex-ai-guardrails-terraform/blob/main/CONTROLS.md) · [CI workflow](https://github.com/jmragsdale/gcp-vertex-ai-guardrails-terraform/blob/main/.github/workflows/ci.yml) |
| Multi-Cloud Compliance Baselines — [AWS](https://github.com/jmragsdale/aws-compliance-baseline-terraform) · [Azure](https://github.com/jmragsdale/az-compliance-baseline-terraform) · [GCP](https://github.com/jmragsdale/gcp-compliance-baseline-terraform) | Reference infrastructure with control mappings tied to implementing Terraform resources. | [AWS control matrix](https://github.com/jmragsdale/aws-compliance-baseline-terraform/blob/main/CONTROLS.md) · [Control definitions](https://github.com/jmragsdale/aws-compliance-baseline-terraform/blob/main/controls/controls.yaml) |
| [AI IaC Security Reviewer](https://github.com/jmragsdale/ai-iac-security-reviewer) | A Python tool for reviewing Terraform, Bicep and CloudFormation through local or hosted LLM providers. | [Implementation](https://github.com/jmragsdale/ai-iac-security-reviewer/blob/main/reviewer.py) · [Example inputs](https://github.com/jmragsdale/ai-iac-security-reviewer/tree/main/samples) |
| [Azure Secretless App](https://github.com/jmragsdale/az-secretless-app) | A reference application architecture using Managed Identity and Key Vault instead of application-held credentials. | [Bicep source](https://github.com/jmragsdale/az-secretless-app/blob/main/bicep/main.bicep) · [Architecture](https://github.com/jmragsdale/az-secretless-app/blob/main/secretless-architecture.svg) |
| [IaC Policy Pipeline](https://github.com/jmragsdale/iac-policy-pipeline) | OPA/Conftest policy checks with public and private storage examples for AWS and Azure. | [Policy tests](https://github.com/jmragsdale/iac-policy-pipeline/blob/main/policies/opa/policies_test.rego) · [CI workflow](https://github.com/jmragsdale/iac-policy-pipeline/blob/main/.github/workflows/security.yml) |

## 🛠️ Skills

| Area | Platforms and tools |
| --- | --- |
| Cloud | AWS · Azure · Google Cloud |
| Infrastructure | Terraform · Bicep · CloudFormation |
| Security automation | OPA/Conftest · GitHub Actions · Azure DevOps · IAM · audit logging |
| Development | Python · Node.js · Bash · Docker |

<details>
<summary>📂 More security projects</summary>

| Project | Focus |
| --- | --- |
| [Prompt Injection Probe](https://github.com/jmragsdale/prompt-injection-probe) | Guardrail testing for LLM applications. |
| [Local LLM Security Copilot](https://github.com/jmragsdale/local-llm-security-copilot) | Local-model workflows for security analysis. |
| [Secrets Rotation](https://github.com/jmragsdale/aws-secrets-rotation-terraform) | Credential rotation using AWS services. |
| [Fraud Detection](https://github.com/jmragsdale/az-fraud-detection-terraform) | An Azure event-processing reference for fintech research. |
| [Audit Trail](https://github.com/jmragsdale/aws-audit-trail-terraform) | Audit logging and integrity-verification infrastructure. |
| [Hub-Spoke Network](https://github.com/jmragsdale/az-hub-spoke-secure) | Azure network architecture and segmentation. |
| [PII Redaction](https://github.com/jmragsdale/aws-pii-redaction) | AWS data-redaction workflows. |
| [AI Image Tagger](https://github.com/jmragsdale/aws-s3-ai-image-tagger) | Serverless image analysis with Amazon Bedrock. |
| [AI Document Summarizer](https://github.com/jmragsdale/azure-blob-ai-doc-summarizer) | Azure Functions and Azure OpenAI document processing. |
| [Resource Lock Governance](https://github.com/jmragsdale/az-resource-lock-governance) | Azure resource-protection policies. |
| [Secure Web VPC](https://github.com/jmragsdale/aws-secure-web-vpc) | AWS network security controls. |
| [Secure File Upload](https://github.com/jmragsdale/aws-secure-file-upload) | File-upload processing with malware scanning. |
| [Cloud IoT Processing](https://github.com/jmragsdale/cloud-iot-projects) | AWS and Azure IoT pipelines. |

</details>

## 📈 Trading research

A separate research interest: indicators, scanners and reproducible documentation.

| Repository | Scope |
| --- | --- |
| [TradingView Pine indicators](https://github.com/jmragsdale/trading-breakout-scanner) | Pine breakout/GCR indicators and separate Python research tools. |
| [ThinkScript library](https://github.com/jmragsdale/trading-thinkscript) | Organized studies, scanners, usage guides and historical performance evidence with explicit validation limits. |

Source availability and historical research do not establish native-platform parity or future trading performance. Setup details and research assumptions are documented in the respective repositories.

## 📫 Let's connect

I'm open to remote cloud security roles and consulting engagements involving AI security, infrastructure automation and policy as code. Reach me through the portfolio, LinkedIn or email links above; credentials are linked through Credly.
