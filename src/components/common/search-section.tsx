import SearchBar from "@/components/ui/search-bar";
import SearchButton from "@/components/ui/search-button";
import { useState } from "react";

export default function SearchSection() {
  const [locationSearch, setLocationSearch] = useState("");

  return (
    <>
      <SearchBar
        locationSearch={locationSearch}
        setLocationSearch={setLocationSearch}
      />
      <SearchButton setLocationSearch={setLocationSearch} />
    </>
  );
}
