"use client";

import React, { createContext, useContext, useState } from "react";

interface BookSiteVisitContextType {
  isOpen: boolean;
  preselectedProjectSlug?: string;
  openModal: (projectSlug?: string) => void;
  closeModal: () => void;
}

const BookSiteVisitContext = createContext<BookSiteVisitContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function BookSiteVisitProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedProjectSlug, setPreselectedProjectSlug] = useState<string | undefined>(undefined);

  const openModal = (projectSlug?: string) => {
    setPreselectedProjectSlug(projectSlug);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPreselectedProjectSlug(undefined);
  };

  return (
    <BookSiteVisitContext.Provider
      value={{ isOpen, preselectedProjectSlug, openModal, closeModal }}
    >
      {children}
    </BookSiteVisitContext.Provider>
  );
}

export function useBookSiteVisit() {
  return useContext(BookSiteVisitContext);
}
