import React from "react";
import useStore from "../DataListing/DataListing";

export default function Search() {
  const tags = useStore((state) => state.tags);

  return (
    <div>
      {tags.map((data) => {
        return <button>{data}</button>;
      })}
    </div>
  );
}
