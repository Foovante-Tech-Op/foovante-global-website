export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  prior: string;
  pic: string;
  loc?: string;
}

export interface Advisor {
  ix: string;
  nm: string;
  from: string;
}

export interface Method {
  badge: string;
  h: string;
  desc: string;
  minSize: string;
  dur: string;
}

export interface Pick {
  tag: string;
  h: string;
  lead: string;
  features: string[];
  open: string;
  href: string;
  photo: string;
}

export interface PulseEvent {
  when: string;
  what: string;
  where: string;
}
