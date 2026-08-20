export type ServiceDetail = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  points: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "temporary-shelter",
    title: "Temporary Shelter",
    shortDescription:
      "A safe, confidential home for women and children escaping violence — with accommodation, three meals daily, clothing and essentials.",
    description:
      "We provide a safe and confidential shelter for women and children escaping domestic violence and abuse.",
    points: [
      "Comfortable accommodation for up to 70 residents in our 30-bed shelter (shared rooms).",
      "Three nutritious meals daily.",
      "Clothing, toiletries and essential supplies.",
      "A secure environment where survivors can rest, feel safe and plan their next steps.",
    ],
  },

  {
    id: "emotional-restoration",
    title: "Emotional Restoration",
    shortDescription:
      "Counselling and compassionate support to help survivors heal in mind, body and soul.",
    description:
      "We help survivors heal emotionally and spiritually through professional and compassionate care.",
    points: [
      "One-to-one and group counselling.",
      "Trauma-informed support.",
      "Spiritual care and encouragement.",
      "Building self-worth, confidence and hope.",
    ],
  },

  {
    id: "physical-restoration",
    title: "Physical Restoration",
    shortDescription:
      "Time, care and a calm environment to recover physically and rebuild strength and confidence.",
    description:
      "We support survivors to recover physically and rebuild their strength.",
    points: [
      "Rest in a calm, safe environment.",
      "Nutritious meals and hygiene support.",
      "Access to healthcare and medical care.",
      "Helping survivors regain energy and confidence.",
    ],
  },

  {
    id: "skills-acquisition",
    title: "Skills Acquisition Support",
    shortDescription:
      "Tailoring, culinary and other vocational training so survivors can become self-sufficient.",
    description:
      "We equip survivors with practical skills that create opportunities and independence.",
    points: [
      "Vocational training in tailoring, culinary arts and other in-demand skills.",
      "Hands-on learning with experienced trainers.",
      "Support to start small businesses after training.",
    ],
  },

  {
    id: "employment-support",
    title: "Employment Support",
    shortDescription:
      "Help securing suitable jobs — including placements at schools, companies and government agencies.",
    description:
      "We help survivors achieve financial independence through meaningful employment.",
    points: [
      "Job readiness and CV preparation.",
      "Connections and placements in schools, companies and government agencies.",
      "Ongoing support to sustain employment.",
    ],
  },

  {
    id: "reintegration",
    title: "Reintegration",
    shortDescription:
      "Steady support to re-enter society and live peaceful, independent lives away from violence.",
    description:
      "We walk with survivors as they re-enter society and build peaceful, independent lives.",
    points: [
      "Life skills and mentoring.",
      "Support with housing and basic needs.",
      "Guidance to rebuild relationships where safe.",
      "Continued follow-up after leaving the shelter.",
    ],
  },

  {
    id: "education-for-children",
    title: "Education for Children",
    shortDescription:
      "Enrolling children in new schools quickly to protect their education and emotional wellbeing.",
    description: "We protect every child's right to learn and thrive.",
    points: [
      "Enrolment in new schools quickly.",
      "School fees, uniforms and learning materials where available.",
      "Emotional support to help children adjust and succeed in school.",
    ],
  },

  {
    id: "healthcare-support",
    title: "Healthcare Support",
    shortDescription:
      "Access to healthcare so women and children can recover and stay well throughout their stay.",
    description:
      "We ensure women and children have access to the care they need.",
    points: [
      "Medical check-ups and treatment.",
      "Reproductive and maternal health support.",
      "Referrals to specialist care when needed.",
      "Health education and wellness support.",
    ],
  },
];

export const RESTORATION_STEPS = [
  {
    number: "01",
    title: "Arrival & Safety",
    description:
      "You are welcomed into a secure, confidential home where you and your children can rest safely and plan for the future.",
  },
  {
    number: "02",
    title: "Healing",
    description:
      "Counselling, medical care and supportive community begin the journey of emotional and physical restoration.",
  },
  {
    number: "03",
    title: "Rebuilding",
    description:
      "Skills training, education and employment support help you regain confidence and independence.",
  },
  {
    number: "04",
    title: "A New Beginning",
    description:
      "With our support, you move towards reintegration — living a peaceful, independent life away from violence.",
  },
];

export const HERO_CONTENT = {
  eyebrow: "Our Work",
  title: "Whatever you are facing, we meet you where you are",
  description:
    "We provide hope, shelter, healing and practical support for women and children affected by domestic violence, sexual abuse and emotional abuse — with kindness, confidentiality and no judgement.",
};

export const RESTORATION_CONTENT = {
  eyebrow: "The Journey of Restoration",
  title: "From fear to freedom, step by step",
  description:
    "Most women stay with us for three to six months, and up to a year where needed. Every journey is different — and every woman is walked with, at her own pace.",
};

export const HELP_CONTENT = {
  eyebrow: "Not sure what you need?",
  title: "We will listen without judgement",
  description:
    "A confidential call with us can help you make sense of what is happening and plan your next step — whether that is shelter, counselling, legal help or simply someone to listen.",
};
