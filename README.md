# 🩺 PediatricDose Calculator

A web-based interactive pediatric dose calculator designed to assist parents and healthcare providers in calculating accurate single doses (mL) and daily dosage limits based on a child's weight and chosen medication.

---

## ✨ Key Features

- **Dynamic Calculation Logic:** Adapts calculations dynamically based on the selected medicine's concentration.
- **Supported Medications:**
  - **Paracetamol / Panadol** (120mg / 5mL)
  - **Ibuprofen / Brufen** (100mg / 5mL)
  - **Amoxicillin Antibiotic** (125mg / 5mL)
- **Daily Safety Bounds:** Computes both the single dose limit and the maximum recommended daily intake (mL).
- **Responsive & Intuitive Interface:** Clean form layout optimized for fast and clear input/output handling.

---

## 🛠️ Built With

- **HTML5:** Semantic form inputs and selection lists (`<select>`).
- **CSS3:** Responsive container styling and interface visual elements.
- **JavaScript (ES6):** Conditional math logic, event listeners, and DOM updates.

---

## 📐 Dosage Logic & Formulas

| Medicine | Formula (mL per single dose) | Max Daily Multiplier |
| :--- | :--- | :--- |
| **Paracetamol** | `(Weight × 15) / 24` | `Single Dose × 4` |
| **Ibuprofen** | `(Weight × 10) / 20` | `Single Dose × 4` |
| **Amoxicillin** | `(Weight × 20) / 25` | `Single Dose × 4` |

---

## 🚀 How to Use

1. Clone the repository:
   ```bash
   git clone [https://github.com/tamar77623/PediatricDose-Calculator.git](https://github.com/tamar77623/PediatricDose-Calculator.git)
