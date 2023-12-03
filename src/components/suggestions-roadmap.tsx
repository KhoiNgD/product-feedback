import MotionLink from "./motions/motion-link";

export default function SuggestionRoadmap() {
  const statuses = [
    {
      color: "orange",
      label: "Planned",
      quantity: 2,
    },
    {
      color: "purple",
      label: "In-Progress",
      quantity: 3,
    },
    {
      color: "blue-sky",
      label: "Live",
      quantity: 1,
    },
  ];

  return (
    <section className="bg-white p-6 rounded-medium">
      <div className="flex justify-between items-center">
        <h3 className="h3 text-dark-secondary">Roadmap</h3>
        <MotionLink href={"/roadmap"}>View</MotionLink>
      </div>

      <ul className="mt-6 flex flex-col gap-2">
        {statuses.map((status) => {
          return (
            <li key={status.label} className="flex items-center">
              <div className={`p1 rounded-full w-2 h-2 bg-${status.color}`} />
              <p className="ml-4 text-gray-dark">{status.label}</p>
              <strong className="ml-auto text-gray-dark">
                {status.quantity}
              </strong>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
