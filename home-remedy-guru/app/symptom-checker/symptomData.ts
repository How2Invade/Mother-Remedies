export type Symptom = {
  name: string;
  subSymptoms: string[];
  recommendations: string[];
};

export const symptoms: Symptom[] = [
  {
    name: "Fever",
    subSymptoms: ["High body temperature", "Chills", "Sweating", "Fatigue", "Headache"],
    recommendations: [
      "Rest and get plenty of sleep",
      "Drink plenty of fluids to stay hydrated",
      "Take over-the-counter fever reducers like acetaminophen or ibuprofen",
      "Use a cold compress on your forehead",
      "Wear lightweight clothing and keep the room temperature cool"
    ]
  },
  {
    name: "Cold",
    subSymptoms: ["Runny or stuffy nose", "Sneezing", "Sore throat", "Mild fever", "Cough"],
    recommendations: [
      "Get plenty of rest",
      "Stay hydrated with water, herbal tea, or clear broths",
      "Use a humidifier to add moisture to the air",
      "Try saline nasal drops or sprays",
      "Gargle with warm salt water for sore throat relief"
    ]
  },
  {
    name: "Cough",
    subSymptoms: ["Dry or wet cough", "Sore throat", "Shortness of breath", "Chest discomfort", "Fatigue"],
    recommendations: [
      "Use honey to soothe your throat and suppress cough",
      "Stay hydrated to help thin mucus",
      "Use a humidifier to moisten the air",
      "Try over-the-counter cough suppressants or expectorants",
      "Avoid irritants like smoke or strong fragrances"
    ]
  },
  {
    name: "Headache",
    subSymptoms: ["Throbbing pain", "Sensitivity to light or sound", "Nausea", "Dull or sharp pain in head region", "Stress or tension as trigger"],
    recommendations: [
      "Rest in a quiet, dark room",
      "Apply a cold or warm compress to your head",
      "Practice relaxation techniques like deep breathing or meditation",
      "Stay hydrated and avoid skipping meals",
      "Try over-the-counter pain relievers if needed"
    ]
  },
  {
    name: "Stomach Ache",
    subSymptoms: ["Abdominal cramps", "Nausea or vomiting", "Diarrhea or constipation", "Bloating", "Loss of appetite"],
    recommendations: [
      "Eat small, frequent meals and avoid fatty or spicy foods",
      "Stay hydrated with clear fluids",
      "Try herbal teas like peppermint or ginger",
      "Use a heating pad on your stomach for cramps",
      "Consider probiotics to support digestive health"
    ]
  },
  {
    name: "Skin Rash",
    subSymptoms: ["Red patches on skin", "Itching or irritation", "Dry or flaky skin", "Swelling or bumps", "Burning sensation"],
    recommendations: [
      "Avoid scratching the affected area",
      "Apply a cool compress to relieve itching",
      "Use fragrance-free, hypoallergenic moisturizers",
      "Take an oatmeal bath to soothe the skin",
      "Try over-the-counter antihistamines for itching relief"
    ]
  },
  {
    name: "Stress",
    subSymptoms: ["Fatigue", "Headache", "Irritability", "Difficulty concentrating", "Sleep disturbances"],
    recommendations: [
      "Practice regular exercise",
      "Try relaxation techniques like deep breathing or meditation",
      "Maintain a consistent sleep schedule",
      "Limit caffeine and alcohol intake",
      "Connect with friends or family for support"
    ]
  }
];

