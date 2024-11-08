import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOperationType, setSelectedOperationType] = useState(
    parseInt(sessionStorage.getItem("xMethod")) || 0
  );
  const [selectedType, setSelectedType] = useState(
    sessionStorage.getItem("selectedType") || "pool"
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    sessionStorage.setItem("xMethod", selectedOperationType);
  }, [selectedOperationType]);

  useEffect(() => {
    sessionStorage.setItem("selectedType", selectedType);
  }, [selectedType]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        selectedOperationType,
        setSelectedOperationType,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => useContext(ModalContext);
