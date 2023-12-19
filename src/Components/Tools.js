import React, { useEffect } from "react";
import useStore from "../DataListing/DataListing";

export default function Tools({ lanuages, tools }) {
  const addTags = useStore((state) => state.addTags);
  const tags = useStore((state) => state.tags);
  const search = useStore((state) => state.search);

  useEffect(() => {
    if (tags.length !== 0) {
      search();
    }
  }, [tags]);

  return (
    <div className="flex flex-row gap-2 ">
      {lanuages.map((language, index) => {
        return (
          <div
            className="bg-[#eef6f6] rounded-md font-bold text-[#5ba4a4] p-2 cursor-pointer"
            key={index}
            onClick={() => addTags(language)}
          >
            {language}
          </div>
        );
      })}
      {tools.map((tools, index) => {
        return (
          <div
            className="bg-[#eef6f6] rounded-md font-bold text-[#5ba4a4] p-2 cursor-pointer"
            key={index}
            onClick={() => addTags(tools)}
          >
            {tools}
          </div>
        );
      })}
    </div>
  );
}
