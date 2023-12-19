import React, { useEffect } from "react";
import Card from "./Card";
import data from "./data.json";
import useStore from "../DataListing/DataListing";

export default function Cards() {
  const bears = useStore((state) => state.bears);
  console.log(bears);
  const getData = useStore((state) => state.fetch);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {bears.map((datas) => {
        return (
          <Card
            key={datas.id}
            companyLogo={datas.logo}
            companyName={datas.company}
            newcom={datas.new}
            designation={datas.position}
            time={datas.postedAt}
            role={datas.role}
            country={datas.location}
            lanuages={datas.languages}
            tools={datas.tools}
          />
        );
      })}
    </div>
  );
}
