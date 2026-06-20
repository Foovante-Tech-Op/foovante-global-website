// src/app/core/data/team.data.ts
var LEADERSHIP = [
  {
    name: "Ama Owusu",
    role: "Co-founder & CEO",
    bio: "Ama spent eight years in African climate finance, first at Standard Bank and then McKinsey Sustainability, before founding Foovante to fix the verification bottleneck she saw daily. She holds an MPP from Harvard Kennedy School.",
    prior: "Previously: Standard Bank \xB7 McKinsey Sustainability \xB7 MPP Harvard Kennedy",
    pic: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop"
  },
  {
    name: "Ifeanyi Okafor",
    role: "Co-founder & CTO",
    bio: "Ifeanyi built earth-observation pipelines at Planet Labs for six years before returning to Nigeria. He architected the Foovante MRV stack from scratch and holds an MS in Remote Sensing from Stanford.",
    prior: "Previously: Planet Labs \xB7 NASA SERVIR \xB7 MS Stanford",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&auto=format&fit=crop"
  },
  {
    name: "Wanjiru Mwangi",
    role: "COO",
    bio: "Wanjiru spent fifteen years building agtech distribution across East Africa, most recently founding the Rwanda operations of One Acre Fund, before joining Foovante to scale field operations from 1 to 14 countries.",
    prior: "Previously: One Acre Fund \xB7 TechnoServe \xB7 MBA Strathmore",
    pic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80&auto=format&fit=crop"
  },
  {
    name: "Th\xE9o Diallo",
    role: "Head of Verification",
    bio: "Th\xE9o was a lead verifier at Verra and senior auditor at SCS Global Services for nine years. He has personally validated more than 200 African carbon projects and now leads Foovante's verification operations across all three standards.",
    prior: "Previously: Verra \xB7 SCS Global Services",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=80&auto=format&fit=crop"
  }
];
var OPS_TEAM = [
  {
    name: "Kwame Asante",
    role: "Head of West Africa",
    loc: "Accra",
    prior: "Previously: AB Bank Ghana",
    pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Achieng Otieno",
    role: "Head of East Africa",
    loc: "Nairobi",
    prior: "Previously: Acumen East Africa",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Lerato Nkosi",
    role: "Head of Southern Africa",
    loc: "Cape Town",
    prior: "Previously: SAB Foundation",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Mariam Tour\xE9",
    role: "Head of Francophone Africa",
    loc: "Abidjan",
    prior: "Previously: IFC West Africa",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Dr. Samuel Mensah",
    role: "Lead MRV Scientist",
    loc: "Accra",
    prior: "Previously: CSIR Ghana",
    pic: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Elena Hassan",
    role: "Head of Engineering",
    loc: "Accra \xB7 Remote Berlin",
    prior: "Previously: Climeworks",
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Joshua Adebayo",
    role: "Head of Funder Operations",
    loc: "Lagos",
    prior: "Previously: Flutterwave",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop"
  },
  {
    name: "Fatou Sow",
    role: "General Counsel",
    loc: "Dakar",
    prior: "Previously: White & Case",
    pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80&auto=format&fit=crop"
  }
];
var ADVISORS = [
  { ix: "Business Dev. & Market Access", nm: "Stacey J. Amamoo", from: "" },
  { ix: "Partnership Building", nm: "Isaac Newton Aquah", from: "" },
  { ix: "Business Analysis & Partnerships", nm: "Stephen Adomako", from: "" },
  { ix: "Financial Advisory & Due Diligence", nm: "Nicholas Clerk", from: "" },
  { ix: "Carbon Market Analysis", nm: "Dr. Gina", from: "" }
];
var METHODS = [
  {
    badge: "VCS \xB7 VM0007",
    h: "REDD+ avoided deforestation",
    desc: "Verra-approved framework for forests at risk of deforestation. Suited to community forest reserves with 5+ years of land-tenure history.",
    minSize: "2,000 ha",
    dur: "40 years"
  },
  {
    badge: "VCS \xB7 VM0042",
    h: "Agriculture \xB7 ARR",
    desc: "Afforestation, reforestation, and revegetation on degraded land. Excellent for smallholder agroforestry cooperatives.",
    minSize: "500 ha",
    dur: "30 years"
  },
  {
    badge: "GS \xB7 TPDDTEC",
    h: "Improved cookstoves",
    desc: "Gold Standard methodology for fuel-efficient or clean-burning household cookstoves. Strong community co-benefits.",
    minSize: "5,000 HH",
    dur: "7 years"
  },
  {
    badge: "VCS \xB7 VMD0033",
    h: "Solar microgrid",
    desc: "Off-grid renewable electricity provision in unelectrified or diesel-dependent communities. Pairs well with productive-use loads.",
    minSize: "1 MW",
    dur: "15 years"
  },
  {
    badge: "Plan Vivo \xB7 PV4",
    h: "Mangrove restoration",
    desc: "Blue carbon restoration in estuarine and coastal mangrove ecosystems. High permanence, strong biodiversity co-benefits.",
    minSize: "200 ha",
    dur: "25 years"
  },
  {
    badge: "GS \xB7 MM2",
    h: "Biogas / methane capture",
    desc: "Methane capture and combustion from municipal organic waste, livestock manure, or wastewater treatment.",
    minSize: "2,000 t/yr",
    dur: "10 years"
  }
];

export {
  LEADERSHIP,
  OPS_TEAM,
  ADVISORS,
  METHODS
};
//# sourceMappingURL=chunk-H3WTE4TY.js.map
