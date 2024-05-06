import { useStore } from "@nanostores/react";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { $urlQuery, handleQuery } from "./stores/queryStore";

export default function SearchInput() {
  const urlQuery = useStore($urlQuery);
  //   console.log("search input: ", $query);
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="search">Search</Label>
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
