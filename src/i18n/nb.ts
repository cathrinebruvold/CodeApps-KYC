const nb: Record<string, string> = {
  // App
  "app.title": "AML-kontrollskjema",
  "app.subtitle": "Dynamisk spørreskjema for anti-hvitvask",

  // Language
  "lang.switch": "English",
  "lang.current": "Norsk",

  // Steps
  "steps.configuration": "Konfigurasjon",
  "steps.kyc": "Kundetiltak",
  "steps.transaction": "Transaksjoner",
  "steps.risk": "Risikovurdering",
  "steps.pep": "PEP",
  "steps.sanctions": "Sanksjoner",
  "steps.summary": "Oppsummering",

  // Configuration step
  "config.title": "Velg parametere for kontrollen",
  "config.subtitle": "Spørreskjemaet tilpasses basert på dine valg",
  "config.riskLevel": "Risikoklassifisering",
  "config.riskLevel.low": "Lav",
  "config.riskLevel.medium": "Middels",
  "config.riskLevel.high": "Høy",
  "config.riskLevel.critical": "Kritisk",
  "config.customerType": "Kundetype",
  "config.customerType.person": "Privatperson",
  "config.customerType.company": "Bedrift",
  "config.controlType": "Kontrolltype",
  "config.controlType.onboarding": "Opprettelse",
  "config.controlType.periodic": "Periodisk",
  "config.controlType.event_driven": "Hendelsesbasert",

  // Categories
  "categories.kyc": "Kundetiltak (KYC)",
  "categories.kyc.desc": "Spørsmål knyttet til kundekjennskap og identifisering",
  "categories.transaction": "Transaksjonsovervåking",
  "categories.transaction.desc": "Spørsmål knyttet til overvåking av transaksjoner",
  "categories.risk": "Risikovurdering",
  "categories.risk.desc": "Spørsmål knyttet til risikovurdering av kundeforholdet",
  "categories.pep": "Politisk eksponerte personer (PEP)",
  "categories.pep.desc": "Spørsmål knyttet til PEP-sjekk og forsterkede tiltak",
  "categories.sanctions": "Sanksjoner",
  "categories.sanctions.desc": "Spørsmål knyttet til sanksjonslister og screening",

  // Navigation
  "nav.next": "Neste",
  "nav.back": "Tilbake",
  "nav.submit": "Send inn",
  "nav.startOver": "Start på nytt",

  // Common
  "common.yes": "Ja",
  "common.no": "Nei",
  "common.required": "Påkrevd",
  "common.optional": "Valgfritt",
  "common.selectPlaceholder": "Velg...",
  "common.noQuestions": "Ingen spørsmål for denne kombinasjonen av parametere.",
  "common.stepOf": "Steg {current} av {total}",

  // Summary
  "summary.title": "Oppsummering",
  "summary.subtitle": "Gjennomgå svarene før du sender inn",
  "summary.submitted": "Skjemaet er sendt inn!",
  "summary.submittedDesc": "Kontrollen er fullført og registrert.",
  "summary.notAnswered": "Ikke besvart",
  "summary.questionsAnswered": "{answered} av {total} spørsmål besvart",

  // Questions — KYC
  "q.kyc.id_verified": "Er kundens identitet verifisert?",
  "q.kyc.id_method": "Hvilken metode ble brukt for identifisering?",
  "q.kyc.id_method.bankid": "BankID",
  "q.kyc.id_method.passport": "Pass",
  "q.kyc.id_method.drivers_license": "Førerkort",
  "q.kyc.id_method.national_id": "Nasjonalt ID-kort",
  "q.kyc.beneficial_owners_identified": "Er reelle rettighetshavere identifisert?",
  "q.kyc.purpose_of_relationship": "Hva er formålet med kundeforholdet?",
  "q.kyc.purpose_of_relationship.help": "Beskriv bakgrunnen for kundeforholdet og forventet bruk av tjenestene.",
  "q.kyc.info_updated": "Er kundeinformasjonen oppdatert?",
  "q.kyc.source_of_funds": "Hva er kundens midlers opprinnelse?",
  "q.kyc.source_of_funds.help": "Beskriv hvor kundens midler stammer fra.",
  "q.kyc.enhanced_due_diligence": "Er forsterket kundekontroll gjennomført?",

  // Questions — Transaction
  "q.txn.unusual_activity": "Er det observert uvanlig transaksjonsaktivitet?",
  "q.txn.unusual_description": "Beskriv den uvanlige aktiviteten",
  "q.txn.unusual_description.help": "Gi en detaljert beskrivelse av hva som ble observert.",
  "q.txn.monitoring_methods": "Hvilke overvåkingsmetoder benyttes?",
  "q.txn.monitoring.automated": "Automatisert overvåking",
  "q.txn.monitoring.manual_review": "Manuell gjennomgang",
  "q.txn.monitoring.threshold_alerts": "Terskelbaserte varsler",
  "q.txn.monitoring.pattern_analysis": "Mønsteranalyse",
  "q.txn.cash_intensive": "Er kunden kontantintensiv?",
  "q.txn.str_filed": "Er det sendt MT-rapport (mistenkelig transaksjon)?",

  // Questions — Risk
  "q.risk.overall_assessment": "Hva er samlet risikovurdering?",
  "q.risk.assessment.acceptable": "Akseptabel",
  "q.risk.assessment.elevated": "Forhøyet",
  "q.risk.assessment.unacceptable": "Uakseptabel",
  "q.risk.justification": "Begrunn risikovurderingen",
  "q.risk.justification.help": "Gi en detaljert begrunnelse for den samlede risikovurderingen.",
  "q.risk.next_review_date": "Dato for neste gjennomgang",
  "q.risk.risk_factors": "Hvilke risikofaktorer er identifisert?",
  "q.risk.factor.geography": "Geografisk risiko",
  "q.risk.factor.product": "Produktrisiko",
  "q.risk.factor.channel": "Kanalrisiko",
  "q.risk.factor.customer_profile": "Kundeprofil",
  "q.risk.measures_taken": "Hvilke risikoreduserende tiltak er iverksatt?",
  "q.risk.measures_taken.help": "Beskriv tiltak for å redusere identifisert risiko.",

  // Questions — PEP
  "q.pep.is_pep": "Er kunden en politisk eksponert person (PEP)?",
  "q.pep.pep_type": "Hvilken type PEP?",
  "q.pep.type.domestic": "Innenlandsk PEP",
  "q.pep.type.foreign": "Utenlandsk PEP",
  "q.pep.type.international_org": "Internasjonal organisasjon",
  "q.pep.type.family_member": "Nært familiemedlem",
  "q.pep.type.close_associate": "Kjent medarbeider",
  "q.pep.senior_approval": "Er godkjenning fra overordnet innhentet?",
  "q.pep.beneficial_owner_pep": "Er noen av de reelle rettighetshaverne PEP?",
  "q.pep.source_of_wealth": "Er kundens formues opprinnelse kartlagt?",

  // Questions — Sanctions
  "q.san.screening_performed": "Er sanksjonsscreening gjennomført?",
  "q.san.screening_date": "Dato for siste screening",
  "q.san.hits_found": "Ble det funnet treff i sanksjonslistene?",
  "q.san.hits_description": "Beskriv eventuelle treff",
  "q.san.hits_description.help": "Gi detaljer om eventuelle treff og vurdering av disse.",
  "q.san.lists_checked": "Hvilke sanksjonslister er sjekket?",
  "q.san.list.un": "FN-sanksjonslisten",
  "q.san.list.eu": "EUs sanksjonsliste",
  "q.san.list.ofac": "OFAC (USA)",
  "q.san.list.national": "Nasjonal sanksjonsliste",
  "q.san.ongoing_monitoring": "Er løpende sanksjonsovervåking aktivert?",

  // Admin
  "admin.toggle.enter": "Administrasjon",
  "admin.toggle.exit": "Tilbake",
  "admin.page.title": "Spørsmålskonfigurasjon",
  "admin.page.subtitle": "Administrer kategorier, spørsmål og filtreringsregler",
  "admin.filter.riskLevel": "Risikonivå",
  "admin.filter.customerType": "Kundetype",
  "admin.filter.controlType": "Kontrolltype",
  "admin.filter.reset": "Nullstill filtre",
  "admin.filter.showing": "Viser {filtered} av {total} spørsmål",
  "admin.reset.button": "Tilbakestill til standard",
  "admin.reset.confirm.title": "Tilbakestill til standard?",
  "admin.reset.confirm.message": "Dette vil slette alle tilpasninger og gjenopprette standardspørsmål og -kategorier. Denne handlingen kan ikke angres.",
  "admin.reset.confirm.yes": "Ja, tilbakestill",
  "admin.reset.confirm.no": "Avbryt",

  // Admin - Category
  "admin.category.questions": "{count} spørsmål",
  "admin.category.edit": "Rediger kategori",
  "admin.category.moveUp": "Flytt opp",
  "admin.category.moveDown": "Flytt ned",
  "admin.category.save": "Lagre",
  "admin.category.cancel": "Avbryt",
  "admin.category.label": "Kategorinavn",
  "admin.category.description": "Beskrivelse",
  "admin.category.icon": "Ikon/forkortelse",

  // Admin - Question Card
  "admin.question.edit": "Rediger",
  "admin.question.delete": "Slett",
  "admin.question.custom": "Egendefinert",
  "admin.question.addNew": "Legg til spørsmål",

  // Admin - Question Form
  "admin.question.form.titleNew": "Nytt spørsmål",
  "admin.question.form.titleEdit": "Rediger spørsmål",
  "admin.question.form.label": "Spørsmåltekst",
  "admin.question.form.helpText": "Hjelpetekst",
  "admin.question.form.category": "Kategori",
  "admin.question.form.type": "Type",
  "admin.question.form.required": "Påkrevd",
  "admin.question.form.options": "Alternativer",
  "admin.question.form.optionPlaceholder": "Alternativ {index}",
  "admin.question.form.addOption": "Legg til alternativ",
  "admin.question.form.removeOption": "Fjern",
  "admin.question.form.riskLevels": "Risikonivåer",
  "admin.question.form.customerTypes": "Kundetyper",
  "admin.question.form.controlTypes": "Kontrolltyper",
  "admin.question.form.save": "Lagre spørsmål",
  "admin.question.form.cancel": "Avbryt",
  "admin.question.form.close": "Lukk",
  "admin.question.form.validation.labelRequired": "Spørsmåltekst er påkrevd",
  "admin.question.form.validation.atLeastOneRisk": "Velg minst ett risikonivå",
  "admin.question.form.validation.atLeastOneCustomer": "Velg minst én kundetype",
  "admin.question.form.validation.atLeastOneControl": "Velg minst én kontrolltype",
  "admin.question.form.validation.optionsRequired": "Legg til minst ett alternativ",

  // Admin - Question Types
  "admin.questionType.text": "Tekst",
  "admin.questionType.yesno": "Ja/Nei",
  "admin.questionType.dropdown": "Nedtrekksliste",
  "admin.questionType.multiselect": "Flervalg",
  "admin.questionType.date": "Dato",

  // Admin - Confirm Dialog
  "admin.confirm.delete.title": "Bekreft sletting",
  "admin.confirm.delete.message": "Er du sikker på at du vil slette dette spørsmålet? Denne handlingen kan ikke angres.",
  "admin.confirm.delete.confirm": "Slett",
  "admin.confirm.delete.cancel": "Avbryt",
};

export default nb;
