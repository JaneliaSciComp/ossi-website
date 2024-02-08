import ToggleFilterMenuBtn from "./ToggleFilterMenuBtn.jsx";
import FilterMenu from "./FilterMenu.jsx";
import CardDisplay from "./CardDisplay.jsx";

export default function CardsAndFilters({
  uniqueTags,
  allContent,
  baseUrl,
  contentType,
}) {
  return (
    <section className="px-6 md:py-12 lg:py-20 mx-auto max-w-6xl">
      <div className="flex py-6 md:p-0">
        <ToggleFilterMenuBtn />
      </div>
      <section className="md:grid grid-cols-3 gap-4">
        <FilterMenu uniqueTags={uniqueTags} />
        <CardDisplay
          key="CardDisplay"
          allContent={allContent}
          baseUrl={baseUrl}
          contentType={contentType}
        />
      </section>
    </section>
  );
}
