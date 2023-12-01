import Image from "next/image";

export default function SuggestionsHeader() {
  return (
    <header className="text-white relative rounded-medium p-6 flex flex-col justify-end items-start h-[137px] overflow-hidden">
      <Image
        alt="background header"
        src={"/assets/suggestions/desktop/background-header.png"}
        className="object-cover pointer-events-none"
        fill
      />
      <h2 className="h2 z-10">Frontend Mentor</h2>
      <p className="p2 opacity-75">Feedback Board</p>
    </header>
  );
}
