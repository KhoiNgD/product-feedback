import SuggestionsCategories from "@/components/suggestions-categories";
import SuggestionsHeader from "@/components/suggestions-header";
import SuggestionRoadmap from "@/components/suggestions-roadmap";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className={"flex gap-[30px] mt-[94px]"}>
      <section className="basis-64 shrink-0 flex flex-col gap-6">
        <SuggestionsHeader />
        <SuggestionsCategories />
        <SuggestionRoadmap />
      </section>
      <section className="flex-grow">
        <header className="flex items-center py-3.5 px-4 text-white bg-[#373F68] rounded-medium">
          <Image
            alt="bulb icon"
            src={"/assets/suggestions/icon-suggestions.svg"}
            width={24}
            height={24}
          />
          <h3 className="h3 ml-4 mr-0.5">6 Suggestions</h3>
          <p className="text-sm ml-9">
            Sort by: <strong>Most Upvotes</strong>
          </p>
          <Button className="text-sm font-bold text-white rounded-medium bg-purple py-3 px-6 ml-auto">
            + Add Feedback
          </Button>
        </header>
      </section>
    </main>
  );
}
