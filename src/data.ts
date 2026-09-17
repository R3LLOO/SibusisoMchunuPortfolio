import type { Role, Project, SkillGroup, Credential } from "./types";

/* ============================================================================
   PRIVACY NOTE — read before you publish
   ----------------------------------------------------------------------------
   This file is committed to git and shipped to every visitor's browser.
   Nothing secret belongs here.

   Censored deliberately:
   1. Phone number      — removed entirely. A public number invites spam and
                          voice-phishing. Recruiters can reach you by form.
   2. Email address     — masked for display only. The real address lives in
                          .env as VITE_CONTACT_ENDPOINT (a form relay), so it
                          is never scraped off the page by a bot.
   3. Client names      — the Requisition project client is described by
                          industry and shape, not by name. You did that work
                          under a Syspro engagement; naming the customer is
                          not yours to give away.
   4. Home address /
      ID / licence no.  — never included. "Driver's licence" from your CV is
                          a CV-only detail, not a portfolio detail.

   If you want the real email visible, set SHOW_RAW_EMAIL to true below and
   accept that scrapers will find it.
   ========================================================================== */

export const SHOW_RAW_EMAIL = false;

export const profile = {
  name: "Sibusiso Mchunu",
  role: "Software Developer",
  discipline: ".NET · Backend · ERP Integration",
  city: "Johannesburg",
  country: "South Africa",

  /** Display-only mask. Real delivery goes through the form relay. */
  emailMasked: "mchunusibu•••@•••.com",
  /** Public professional profile. Safe to link; replace if you'd rather not. */
  linkedin: "https://www.linkedin.com/in/sibusiso-mchunu-651792305",
  github: "https://github.com/mchunusibu",

  /** Written in first person, present tense. No third person anywhere. */
  statement:
    "I build the parts of a business system nobody sees. Approval engines, background services, integration layers between an ERP and everything around it. Most of my work replaces a manual process that somebody was doing by hand, and it has to be right the first time because the finance team is already depending on it.",

  positioning:
    "Information Systems graduate now working as a Junior Consultant Developer at Syspro, delivering custom e.net applications and integrations for customers across Africa. I take engagements end to end — requirements, design, build, test, deploy, and the support calls afterwards.",
};

/* ------------------------------------------------------------------ skills */

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    name: "Backend & APIs",
    weight: 1,
    items: [
      "C# (.NET)",
      "ASP.NET Core Web API",
      "VB.NET",
      "Entity Framework Core",
      "RESTful API design",
      "SOAP web services",
      "API versioning",
      "Swagger / OpenAPI",
    ],
  },
  {
    id: "data",
    name: "Data",
    weight: 1,
    items: [
      "Microsoft SQL Server",
      "T-SQL",
      "Stored procedures",
      "Functions & triggers",
      "Query optimisation",
      "PostgreSQL",
    ],
  },
  {
    id: "erp",
    name: "ERP & Integration",
    weight: 2,
    items: [
      "Syspro e.net Business Objects",
      "SRS document production",
      "Syspro 8",
      "Dataswitch orchestration",
      "Power Automate",
      "SSRS",
    ],
  },
  {
    id: "security",
    name: "Auth & Security",
    weight: 2,
    items: ["JWT", "Role-based access control", "Single-use link auth", "API hardening"],
  },
  {
    id: "frontend",
    name: "Frontend",
    weight: 2,
    items: ["Angular", "Ionic", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "platform",
    name: "Platform & Tooling",
    weight: 2,
    items: ["Git", "GitHub", "Azure DevOps", "Azure", "Microservices principles"],
  },
  {
    id: "other-lang",
    name: "Also Write",
    weight: 2,
    items: ["Python", "Java", "VBScript"],
  },
  {
    id: "practice",
    name: "Practice",
    weight: 2,
    items: [
      "SOLID",
      "SDLC",
      "Systems analysis",
      "UML & process modelling",
      "Debugging & testing",
    ],
  },
];

/* --------------------------------------------------------------- experience */

export const roles: Role[] = [
  {
    id: "consultant-dev",
    title: "Junior Consultant Developer",
    company: "Syspro",
    from: "Jul 2026",
    to: "Present",
    thesis:
      "Own custom development engagements end to end for Syspro customers across Africa.",
    duties: [
      "Design, build and deliver custom Syspro e.net applications and integrations against customer business requirements.",
      "Run engagements from requirements analysis and estimation through design, build, testing, deployment and post-go-live support.",
      "Build with C#, VB.NET, VBScript, SQL Server, Syspro e.net Business Objects, REST and SOAP.",
      "Act as technical escalation point for complex integration and e.net development problems.",
      "Work directly with customers, partners and VARs to gather requirements, report progress and manage scope, risk and change.",
      "Give technical input into pre-sales: feasibility, effort estimation, scoping and development quotes.",
      "Run technical demonstrations of e.net capability and find ways customers can get more out of the platform.",
      "Maintain reusable libraries, templates and documentation so the next engagement starts further along.",
    ],
    stack: ["C#", "VB.NET", "e.net", "REST", "SOAP", "SQL Server"],
  },
  {
    id: "support-analyst",
    title: "Junior Support Analyst",
    company: "Syspro",
    from: "Mar 2026",
    to: "Jun 2026",
    thesis:
      "Diagnosed database and integration faults in a live enterprise ERP backend.",
    duties: [
      "Wrote T-SQL queries and stored procedures to find and fix database-level faults in Syspro's ERP backend.",
      "Troubleshot .NET and VBScript dependencies sitting against Syspro's API and integration layers, coordinating fixes with the development teams.",
      "Traced API communication failures back through Syspro architecture, SSRS reporting and workflow module integrations.",
      "Documented resolutions and API behaviour patterns into a team knowledge base.",
      "Supported ERP installations, upgrades and system configuration to service-level expectations.",
    ],
    stack: ["T-SQL", "C#", "VBScript", "SSRS", "ERP support"],
  },
  {
    id: "intern",
    title: "Technical Support Intern",
    company: "Syspro",
    from: "2025",
    to: "Feb 2026",
    thesis:
      "Led the data pipeline for a multi-database consolidation into one SQL Server environment.",
    duties: [
      "Led backend pipeline development for a large-scale migration consolidating multiple Syspro company databases into one central SQL Server environment.",
      "Wrote C# transformation scripts to clean and validate raw data before load, protecting referential integrity through the cut-over.",
      "Orchestrated the repeat workflows in Power Automate, cutting manual processing time.",
      "Ran post-migration validation to confirm consistency across every consolidated company dataset.",
    ],
    stack: ["C#", "SQL Server", "Power Automate", "Data migration"],
  },
];

/* ----------------------------------------------------------------- projects */

export const projects: Project[] = [
  {
    id: "requisition",
    name: "Requisition Approval Engine",
    kind: "Approval routing service & approver portal",
    context: "Multi-company manufacturing group, Syspro 8 site",
    year: "2026",
    thesis:
      "Joined an incomplete build and delivered a working multi-company requisition and approval engine against a signed functional specification.",
    metrics: [
      { value: "18", label: "endpoints in the approval service" },
      { value: "16 → 30", label: "dashboard functions extended" },
      { value: "1", label: "routing defect found and fixed" },
    ],
    detail: [
      "Built an 18-endpoint ASP.NET Core service as the single source of truth for approval logic, replacing Syspro's native single-step routing.",
      "Implemented multi-level approval chains split by product class, with value-banded approvers, primary and secondary fallback, and multi-currency conversion applied before routing.",
      "Designed and built a mobile-responsive approver portal from scratch so approvals can be actioned off-site through secure single-use email links, authenticated against existing Syspro credentials.",
      "Extended the requisition dashboard from 16 to 30 functions: purchase order views, cancellation, rejection, a comment audit trail, attachments and administrator re-assignment.",
      "Implemented document access control so attachments reach only the initiator and assigned approvers, inheriting automatically to backup approvers, with full audit logging.",
      "Diagnosed a routing defect where approvals were evaluated on unit price instead of line value, which had been sending high-value requisitions to the wrong approval tier.",
    ],
    stack: ["C#", "ASP.NET Core", "SQL Server", "VBScript", "Syspro 8"],
  },
  {
    id: "document-service",
    name: "Document Automation Service",
    kind: "Windows background service",
    context: "Syspro ERP customer engagement",
    year: "2026",
    thesis:
      "Replaced a manual, repetitive document-processing task with a background service that generates and emails invoices and order confirmations on its own.",
    metrics: [
      { value: "0", label: "manual steps remaining" },
      { value: "exactly once", label: "processing guarantee per order" },
    ],
    detail: [
      "Built a Windows background service that generates and emails invoices and sales order confirmations out of Syspro, removing the manual task entirely.",
      "Integrated directly with Syspro business objects through the SRS document production API to generate documents programmatically.",
      "Queried SQL Server for eligible orders and wrote processing status back, so the service and the database never disagree about what has been sent.",
      "Designed an idempotent processing loop on order status flags: an order is marked complete only after successful generation, so failures retry cleanly on the next run and nothing is ever sent twice.",
    ],
    stack: ["C#", ".NET", "SQL Server", "Syspro business objects"],
  },
  {
    id: "inventory",
    name: "Inventory Management System",
    kind: "RESTful API & full-stack application",
    context: "Food wholesaler, Johannesburg CBD",
    year: "2025",
    thesis:
      "Replaced paper-based stock control with a secure API and live dashboards, cutting stockout incidents.",
    metrics: [
      { value: "2", label: "access tiers enforced by RBAC" },
      { value: "real-time", label: "stock and revenue visibility" },
    ],
    detail: [
      "Architected and built the REST API backend in ASP.NET Core and C# over SQL Server, with stored procedures, triggers and functions carrying the automated stock-level logic.",
      "Implemented JWT authentication and role-based authorisation separating management from staff access at endpoint level.",
      "Wrote and maintained Swagger documentation for every endpoint, giving the frontend and any future integrator a clear contract.",
      "Built real-time inventory endpoints with automated reporting on stock levels and revenue, surfaced through Angular and Ionic dashboards.",
      "Replaced the legacy platform and the paper process behind it, which brought stockout incidents down.",
    ],
    stack: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "JWT",
      "RBAC",
      "Swagger",
      "Angular",
      "Ionic",
    ],
  },
];

/* -------------------------------------------------------------- credentials */

export const education = {
  qualification: "BCom Information Systems",
  institution: "University of Pretoria",
  completed: "Graduated May 2025",
  majors: [
    "Informatics",
    "Statistics & Data Science",
    "Economics",
    "Business Management",
    "Financial Accounting",
  ],
};

export const credentials: Credential[] = [
  { name: "A+", issuer: "CompTIA", state: "held" },
  { name: "Network+", issuer: "CompTIA", state: "in-progress" },
  { name: "Certified Consultant: Finance", issuer: "Syspro", state: "held" },
  { name: "Certified Consultant: Manufacturing", issuer: "Syspro", state: "held" },
];

export const interests = [
  "API architecture",
  "Microservices",
  "Database performance",
  "Enterprise integration",
  "Data engineering",
  "Cybersecurity",
];
