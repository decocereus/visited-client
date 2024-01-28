import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { SearchBarProps, VisitedUrl } from "../lib/definitions";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineWebhook } from "react-icons/md";

const SearchBar: React.FC<SearchBarProps> = ({
  visitedUrls,
}: SearchBarProps) => {
  const [searchedInput, setSearchedInput] = useState<string>("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState<
    string | null
  >(null);
  const [searchResults, setSearchResults] = useState<VisitedUrl[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      setDebouncedSearchInput(searchedInput ?? "");
    }, 50);

    return () => clearTimeout(delaySearch);
  }, [searchedInput]);

  useEffect(() => {
    if (debouncedSearchInput) {
      const filteredResults = visitedUrls?.filter((visitedUrl) =>
        visitedUrl.url
          .toLowerCase()
          .includes(debouncedSearchInput.toLowerCase())
      );
      setSearchResults(filteredResults ?? []);
      if (filteredResults && filteredResults.length > 0) {
        setShowResults(!!debouncedSearchInput);
      }
    }
  }, [debouncedSearchInput, visitedUrls]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (!visitedUrls) {
    return <div>Loading</div>;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedInput(e.target.value);
  };

  return (
    <div className="w-full md:w-[50%] shadow-2xl shadow-blue-500/20 md:p-10 ">
      <div>
        <div className="flex">
          <div className="flex items-center w-full gap-2 text-sm bg-gray-50 rounded-md border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
            <IoSearchOutline size={20} style={{ cursor: "pointer" }} />
            <input
              type="search"
              id="visited-url-search"
              className="p-2.5 dark:bg-gray-700 w-full"
              placeholder="Search for visited urls"
              value={searchedInput}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {showResults && (
        <div className="overflow-hidden w-full mt-[1em] gap-2" ref={searchRef}>
          <ul className="flex flex-col gap-1 overflow-y-scroll max-h-[7em] sm:max-h-[12em]">
            {searchResults.map((result) => (
              <li
                key={result.id}
                className="flex items-center justify-center md:w-full md:py-2"
              >
                <MdOutlineWebhook
                  size={25}
                  style={{ marginRight: "1em", width: "10%" }}
                />
                <span className="w-[80%]">{result.url}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
