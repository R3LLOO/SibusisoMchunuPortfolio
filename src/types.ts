export interface Role {
  id: string;
  title: string;
  company: string;
  from: string;
  to: string;
  /** One line a reader can take away without reading the bullets. */
  thesis: string;
  duties: string[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  kind: string;
  /** Deliberately generalised — see PRIVACY note in data.ts */
  context: string;
  year: string;
  thesis: string;
  /** Hard numbers only. No adjectives. */
  metrics: { value: string; label: string }[];
  detail: string[];
  stack: string[];
}

export interface SkillGroup {
  id: string;
  name: string;
  /** Drives tile size in the capability grid: 1 = wide, 2 = standard. */
  weight: 1 | 2;
  items: string[];
}

export interface Credential {
  name: string;
  issuer: string;
  state: "held" | "in-progress";
}
