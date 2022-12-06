import React, { Fragment } from "react";
import { useGetCategory } from "../store/userApi";
import GetItemsUser from "./GetItemsUser";
function GetCategoryUser() {
    const state=useGetCategory();

    return (
      <div className="max-h max-w font-serif">
        {state.map((cat,index) => (
          <Fragment key={index}>
            <div  className="flex flex-row justify-between ml-5">
              <h1 className=" font-extrabold text-3xl italic">{cat.name}</h1>
            </div>
            <div>
                <GetItemsUser category={cat._id} />
            </div>
          </Fragment>
        ))}
      </div>
    );
}

export default GetCategoryUser