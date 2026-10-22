# Source issues and interpretation boundaries

Snapshot 2026-10-22. These are observed source properties, not silently corrected data.

- Non-agentic applicability cells for the 35 agent risks are blank, preserved as null (unspecified), not converted to No.
- The introduction still says 12 components; the risk table contains component 13. The catalog uses the actual table.
- Risk 9.1 (Prompt inject) is marked No for RAG, foundational, external and agentic patterns. The MCP explicitly returns it as a project-authored architecture review candidate for those systems without changing the source matrix.
- Framework mapping edition labels are preserved, including older MITRE/OWASP labels. A mapping is source-reported, not a current standards attestation.
- Agentic AI marks only the 35 component-13 risks as Yes. Compose all deployment patterns to retain supporting data/model/platform risks.
- Risk-to-control and control-to-risk tables are not perfectly reciprocal. Filtering uses forward links from AI Lifecycle Risks; reverse claims are preserved for review.
- The source sometimes includes strong safety/compliance claims. Treat these as guidance to evaluate, not measured outcomes for a target system.

## Graph discrepancies

- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-2","only_in_risk_table":[],"only_in_control_table":["DASF-R-9.1"]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-4","only_in_risk_table":["DASF-R-9.12"],"only_in_control_table":[]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-17","only_in_risk_table":[],"only_in_control_table":["DASF-R-9.11"]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-37","only_in_risk_table":["DASF-R-6.3"],"only_in_control_table":[]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-46","only_in_risk_table":[],"only_in_control_table":["DASF-R-10.4"]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-54","only_in_risk_table":["DASF-R-9.9"],"only_in_control_table":[]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-56","only_in_risk_table":["DASF-R-9.8"],"only_in_control_table":[]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-58","only_in_risk_table":["DASF-R-10.6"],"only_in_control_table":[]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-61","only_in_risk_table":["DASF-R-13.28","DASF-R-13.30","DASF-R-13.31"],"only_in_control_table":[]}
- {"type":"asymmetric-risk-control-mapping","control_id":"DASF-65","only_in_risk_table":["DASF-R-9.1"],"only_in_control_table":["DASF-R-9.11"]}
