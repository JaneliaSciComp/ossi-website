import { useStore } from "@nanostores/react";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { $urlQuery, handleQuery } from "./stores/queryStore";

export default function SearchInput() {
  const urlQuery = useStore($urlQuery);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 md:pl-2 md:pr-6 mb-8">
      <div className="flex items-center justify-between ">
        <Label className="text-lg font-bold" htmlFor="search">
          Search
        </Label>
        <button className="btn-reset" onClick={() => handleQuery("")}>
          Reset
        </button>
      </div>
      <Input
        type="text"
        id="search"
        placeholder="Keyword"
        value={urlQuery}
        onChange={(e) => handleQuery(e.target.value)}
      />
    </div>
  );
}
