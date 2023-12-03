"use client";

import React from "react";
import BaseButton from "./motions/motion-button";

const categories = ["all", "UI", "UX", "enhancement", "bug", "feature"];
export default function SuggestionsCategories() {
  const [categorySelected, setCategorySelected] = React.useState(categories[0]);

  return (
    <section className="bg-white rounded-medium p-6 flex flex-wrap gap-x-2 gap-y-3.5">
      {categories.map((category) => {
        const isSelected = categorySelected === category;
        return (
          <BaseButton
            key={category}
            className={`capitalize px-4 py-1.5 font-semibold ${
              isSelected
                ? "bg-blue text-white"
                : "bg-gray text-blue hover:bg-blue-button-hover"
            }`}
            onClick={() => setCategorySelected(category)}
          >
            {category}
          </BaseButton>
        );
      })}
    </section>
  );
}
