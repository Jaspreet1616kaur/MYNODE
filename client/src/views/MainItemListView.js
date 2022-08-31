import React, { useContext } from "react";
import MainItemListCard from "../components/MainItemListCard";
import { AppContext } from "../context/appContext";

function MainItemListView() {
  const { myItem } = useContext(AppContext);
  // console.log("myItem: ", myItem);

  return (
    <div>
      {myItem &&
        myItem.allMuseums.map((item, i) => {
          return <MainItemListCard item={item} key={i} />;
        })}
    </div>
  );
}

export default MainItemListView;
