/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const DraftContext = createContext();

export const DraftProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  // Derived state: true if any field has text
  const hasDraftData = Object.values(formData).some(
    (value) => value.trim() !== ""
  );

  const updateDraft = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetDraft = () => {
    setFormData({ name: "", email: "", address: "", phone: "" });
  };

  return (
    <DraftContext.Provider value={{ formData, updateDraft, hasDraftData, resetDraft }}>
      {children}
    </DraftContext.Provider>
  );
};

// Custom hook for easier usage
export const useDraft = () => useContext(DraftContext);