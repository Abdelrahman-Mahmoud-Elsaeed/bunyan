/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const DraftContext = createContext();

export const DraftProvider = ({ children }) => {
  const [drafts, setDrafts] = useState({});
  const [records, setRecords] = useState({
    users: [],
    projects: [],
    developers: [],
  });
  const initDraft = (key, initialState) => {
    setDrafts((prev) => ({
      ...prev,
      [key]: prev[key] || initialState,
    }));
  };

  const updateDraft = (key, field, value) => {
    setDrafts((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  const resetDraft = (key, initialState) => {
    setDrafts((prev) => ({
      ...prev,
      [key]: initialState,
    }));
  };

  const hasDraftData = (key) => {
    if (!drafts[key]) return false;
    return Object.values(drafts[key]).some((v) => v.trim() !== "");
  };

  const addRecord = (key, data) => {
    setRecords((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), data],
    }));
  };

  const updateRecord = (key, index, updatedData) => {
    setRecords((prev) => {
      const updated = [...(prev[key] || [])];
      updated[index] = {
        ...updated[index],
        ...updatedData,
      };

      return {
        ...prev,
        [key]: updated,
      };
    });
  };

  const deleteRecord = (key, index) => {
    setRecords((prev) => {
      const updated = (prev[key] || []).filter((_, i) => i !== index);

      return {
        ...prev,
        [key]: updated,
      };
    });
  };
  return (
    <DraftContext.Provider
      value={{
        drafts,
        initDraft,
        updateDraft,
        resetDraft,
        hasDraftData,
        records,
        addRecord,
        updateRecord,
        deleteRecord,
      }}
    >
      {children}
    </DraftContext.Provider>
  );
};

export const useDraft = () => {
  const context = useContext(DraftContext);

  if (!context) {
    throw new Error("useDraft must be used inside DraftProvider");
  }

  return context;
};
