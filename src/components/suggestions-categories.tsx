"use client";

import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const categories = ["all", "UI", "UX", "enhancement", "bug", "feature"];
export default function SuggestionsCategories() {
  const [categorySelected, setCategorySelected] = React.useState(categories[0]);
  const MotionButton = motion(Button);

  return (
    <section className="bg-white rounded-medium p-6 flex flex-wrap gap-x-2 gap-y-3.5">
      {categories.map((category) => {
        const isSelected = categorySelected === category;
        return (
          <AnimatePresence key={category} initial={false}>
            <MotionButton
              className={`min-w-fit text-blue bg-gray block rounded-medium capitalize px-4 py-1.5 font-semibold`}
              onClick={() => setCategorySelected(category)}
              animate={{
                backgroundColor: isSelected ? "var(--blue)" : "var(--gray)",
                color: isSelected ? "var(--gray)" : "var(--blue)",
              }}
              transition={{
                duration: 0.15
              }}
            >
              {category}
            </MotionButton>
          </AnimatePresence>
        );
      })}
    </section>
  );
}
