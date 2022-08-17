import React, { useContext } from "react";
import MainItemListCard from "../components/MainItemListCard";
import { AppContext } from "../context/appContext";

function MainItemListView() {
  const { myItem } = useContext(AppContext);
  console.log("myItem: ", myItem);

  return (
    <div>
      {myItem &&
        myItem.allMuseums.map((item) => {
          return <MainItemListCard item={item} />;
        })}
    </div>
  );
}

export default MainItemListView;
