"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

const keywords = ["컴퓨터", "여타 다른 전자제품", "전자제품", "스마트폰", "태블릿", "노트북", "전선"];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchBarRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setSuggestions(keywords.filter((keyword) => keyword.includes(value)));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={searchBarRef}>
      <Input
        type="text"
        placeholder="검색창"
        className="p-2 border rounded-md w-full"
        value={searchTerm}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border rounded-md mt-1 max-h-40 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}