// Content migrated from the carewells.lk WordPress/Elementor site.

export const site = {
  name: "Carewells (Pvt) Ltd.",
  shortName: "Carewells",
  tagline: "Where healing begins",
  email: "info@carewells.lk",
  phones: ["+94 113 503 996", "+94 723 503 996"],
  url: "https://carewells.lk",
  // Numbers used by the old Chaty floating chat widget
  whatsapp: "94723503996",
  messenger: "https://m.me/239344055935256",
  address: "No - 78, Sri Wajirawansa Mawatha, Obeysekarapura, Rajagiriya, Colombo.",
  mapQuery:
    "Carewells, 78 Sri Wajirawansa Mawatha, Obeysekarapura, Rajagiriya, Colombo 10100",
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/medical-service", label: "Medical Services" },
  { href: "/physio-rehabilitation-services", label: "Physio / Rehabilitation" },
  { href: "/events", label: "Events" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const medicalServices = [
  "Medical Consultations",
  "Laboratory Services",
  "Health Check-ups and Preventive Care",
  "Physiotherapy",
  "Minor Surgery",
  "Bedsore and Wound Care",
  "Urinary Catheterization and NG Tube Insertion",
  "IV Saline and IV Drug Administration",
  "Nebulization and Suctioning",
  "Psychology and Counselling",
  "Diet Planning",
  "Warts Removing",
  "Cupping Therapy",
  "Needling Therapy",
  "Acne Treatment",
  "Hair Treatment",
  "Ambulance Services",
];

export const physioServices = [
  "Pain Management",
  "Chest Physiotherapy",
  "Neurological Rehabilitation",
  "Musculoskeletal Rehabilitation",
  "Pediatric Rehabilitation",
  "Geriatric Rehabilitation",
  "Sports Injury Rehabilitation",
  "Pre and Post Surgical Rehabilitation",
  "Pre and Post Natal Rehabilitation",
  "Posture Analysis and Exercise Prescription",
  "Fitness Assessment and Weight Loss Exercise",
  "Acupuncture",
  "Speech Therapy",
  "Occupational Therapy",
];

export const healthCheckTests = [
  "Full Blood Count (FBC)",
  "Fasting Blood Sugar (Glucose Levels)",
  "HbA1C (Diabetes – Glucose Levels)",
  "Adiponectin (Early Detection of Diabetes)",
  "Cholesterol (Cardiac Health)",
  "Triglycerides (Cardiac Health)",
  "Lipid Profile (Cardiac Health)",
  "Gamma GT (Liver Health)",
  "Liver Profile (Liver Function & Health)",
  "Thyroid Profile (Overall Thyroid Condition)",
  "Creatinine & eGFR (Kidney & Renal Health)",
  "Renal Profile (Overall Kidney Health)",
  "Urine Full Report (General Body Condition)",
  "ESR (Infections/Inflammation)",
  "ECG (Cardiac Health)",
  "Other",
];

export const aboutIntro =
  "At Carewells, your well-being is our priority. Our dedicated team of healthcare professionals is committed to delivering top-quality, compassionate care to patients of all ages. Whether you are seeking preventative care, treatment for a specific condition, or general medical advice, we are here to support you on your journey to better health. Our goal is to provide you with the necessary resources to make informed decisions about your health and empower you to take control of your well-being.";
