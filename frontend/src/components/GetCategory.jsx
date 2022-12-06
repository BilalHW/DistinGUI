import React, { Fragment } from "react";
import EditCategory from "./EditCategory";
import RemoveButton from "./RemoveButton";
import { useGetCategory } from "../store/userApi";
import GetItemsAdmin from "./GetItemsAdmin";
function GetCategory() {
  const state=useGetCategory();

  return (
    <div className="max-h max-w font-serif">
      {state.map((cat,index) => (
        <Fragment key={index}>
          <div  className="flex flex-row justify-between">
            <h1 className=" font-extrabold text-3xl italic">{cat.name}</h1>
            <div className="flex flex-row justify-between">
              <EditCategory id={cat._id} />
              <RemoveButton id={cat._id} name="category" />
            </div>
          </div>
          <div>
          <GetItemsAdmin category={cat._id} />
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default GetCategory;
