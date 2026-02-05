const en: Record<string, string> = {
  // App
  "app.title": "AML Control Form",
  "app.subtitle": "Dynamic questionnaire for anti-money laundering",

  // Language
  "lang.switch": "Norsk",
  "lang.current": "English",

  // Steps
  "steps.configuration": "Configuration",
  "steps.kyc": "KYC",
  "steps.transaction": "Transactions",
  "steps.risk": "Risk Assessment",
  "steps.pep": "PEP",
  "steps.sanctions": "Sanctions",
  "steps.summary": "Summary",

  // Configuration step
  "config.title": "Select control parameters",
  "config.subtitle": "The questionnaire adapts based on your selections",
  "config.riskLevel": "Risk Classification",
  "config.riskLevel.low": "Low",
  "config.riskLevel.medium": "Medium",
  "config.riskLevel.high": "High",
  "config.riskLevel.critical": "Critical",
  "config.customerType": "Customer Type",
  "config.customerType.person": "Individual",
  "config.customerType.company": "Company",
  "config.controlType": "Control Type",
  "config.controlType.onboarding": "Onboarding",
  "config.controlType.periodic": "Periodic",
  "config.controlType.event_driven": "Event-driven",

  // Categories
  "categories.kyc": "Know Your Customer (KYC)",
  "categories.kyc.desc": "Questions related to customer identification and due diligence",
  "categories.transaction": "Transaction Monitoring",
  "categories.transaction.desc": "Questions related to transaction monitoring and surveillance",
  "categories.risk": "Risk Assessment",
  "categories.risk.desc": "Questions related to the risk assessment of the customer relationship",
  "categories.pep": "Politically Exposed Persons (PEP)",
  "categories.pep.desc": "Questions related to PEP screening and enhanced measures",
  "categories.sanctions": "Sanctions",
  "categories.sanctions.desc": "Questions related to sanctions lists and screening",

  // Navigation
  "nav.next": "Next",
  "nav.back": "Back",
  "nav.submit": "Submit",
  "nav.startOver": "Start Over",

  // Common
  "common.yes": "Yes",
  "common.no": "No",
  "common.required": "Required",
  "common.optional": "Optional",
  "common.selectPlaceholder": "Select...",
  "common.noQuestions": "No questions for this combination of parameters.",
  "common.stepOf": "Step {current} of {total}",

  // Summary
  "summary.title": "Summary",
  "summary.subtitle": "Review your answers before submitting",
  "summary.submitted": "Form submitted!",
  "summary.submittedDesc": "The control has been completed and registered.",
  "summary.notAnswered": "Not answered",
  "summary.questionsAnswered": "{answered} of {total} questions answered",

  // Questions — KYC
  "q.kyc.id_verified": "Has the customer's identity been verified?",
  "q.kyc.id_method": "Which identification method was used?",
  "q.kyc.id_method.bankid": "BankID",
  "q.kyc.id_method.passport": "Passport",
  "q.kyc.id_method.drivers_license": "Driver's License",
  "q.kyc.id_method.national_id": "National ID Card",
  "q.kyc.beneficial_owners_identified": "Have beneficial owners been identified?",
  "q.kyc.purpose_of_relationship": "What is the purpose of the customer relationship?",
  "q.kyc.purpose_of_relationship.help": "Describe the background of the relationship and expected use of services.",
  "q.kyc.info_updated": "Has the customer information been updated?",
  "q.kyc.source_of_funds": "What is the source of the customer's funds?",
  "q.kyc.source_of_funds.help": "Describe where the customer's funds originate from.",
  "q.kyc.enhanced_due_diligence": "Has enhanced due diligence been performed?",

  // Questions — Transaction
  "q.txn.unusual_activity": "Has unusual transaction activity been observed?",
  "q.txn.unusual_description": "Describe the unusual activity",
  "q.txn.unusual_description.help": "Provide a detailed description of what was observed.",
  "q.txn.monitoring_methods": "Which monitoring methods are used?",
  "q.txn.monitoring.automated": "Automated monitoring",
  "q.txn.monitoring.manual_review": "Manual review",
  "q.txn.monitoring.threshold_alerts": "Threshold-based alerts",
  "q.txn.monitoring.pattern_analysis": "Pattern analysis",
  "q.txn.cash_intensive": "Is the customer cash-intensive?",
  "q.txn.str_filed": "Has a Suspicious Transaction Report (STR) been filed?",

  // Questions — Risk
  "q.risk.overall_assessment": "What is the overall risk assessment?",
  "q.risk.assessment.acceptable": "Acceptable",
  "q.risk.assessment.elevated": "Elevated",
  "q.risk.assessment.unacceptable": "Unacceptable",
  "q.risk.justification": "Justify the risk assessment",
  "q.risk.justification.help": "Provide a detailed justification for the overall risk assessment.",
  "q.risk.next_review_date": "Date of next review",
  "q.risk.risk_factors": "Which risk factors have been identified?",
  "q.risk.factor.geography": "Geographic risk",
  "q.risk.factor.product": "Product risk",
  "q.risk.factor.channel": "Channel risk",
  "q.risk.factor.customer_profile": "Customer profile",
  "q.risk.measures_taken": "What risk-mitigating measures have been taken?",
  "q.risk.measures_taken.help": "Describe measures to reduce identified risk.",

  // Questions — PEP
  "q.pep.is_pep": "Is the customer a Politically Exposed Person (PEP)?",
  "q.pep.pep_type": "What type of PEP?",
  "q.pep.type.domestic": "Domestic PEP",
  "q.pep.type.foreign": "Foreign PEP",
  "q.pep.type.international_org": "International organization",
  "q.pep.type.family_member": "Close family member",
  "q.pep.type.close_associate": "Known close associate",
  "q.pep.senior_approval": "Has senior management approval been obtained?",
  "q.pep.beneficial_owner_pep": "Are any of the beneficial owners PEP?",
  "q.pep.source_of_wealth": "Has the source of wealth been established?",

  // Questions — Sanctions
  "q.san.screening_performed": "Has sanctions screening been performed?",
  "q.san.screening_date": "Date of last screening",
  "q.san.hits_found": "Were there any hits on sanctions lists?",
  "q.san.hits_description": "Describe any hits found",
  "q.san.hits_description.help": "Provide details about any hits and assessment of these.",
  "q.san.lists_checked": "Which sanctions lists have been checked?",
  "q.san.list.un": "UN Sanctions List",
  "q.san.list.eu": "EU Sanctions List",
  "q.san.list.ofac": "OFAC (USA)",
  "q.san.list.national": "National Sanctions List",
  "q.san.ongoing_monitoring": "Is ongoing sanctions monitoring enabled?",

  // Admin
  "admin.toggle.enter": "Admin",
  "admin.toggle.exit": "Back",
  "admin.page.title": "Question Configuration",
  "admin.page.subtitle": "Manage categories, questions, and filtering rules",
  "admin.filter.riskLevel": "Risk Level",
  "admin.filter.customerType": "Customer Type",
  "admin.filter.controlType": "Control Type",
  "admin.filter.reset": "Reset Filters",
  "admin.filter.showing": "Showing {filtered} of {total} questions",
  "admin.reset.button": "Reset to Defaults",
  "admin.reset.confirm.title": "Reset to defaults?",
  "admin.reset.confirm.message": "This will delete all customizations and restore default questions and categories. This action cannot be undone.",
  "admin.reset.confirm.yes": "Yes, reset",
  "admin.reset.confirm.no": "Cancel",
};

export default en;
