import React, { useEffect, useState } from "react";
import { tree_info } from "../../data/tree_info.js";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

const SingleLeafPage = () => {
  const [singleLeafData, setSingleLeafData] = useState([]);
  const param = useParams();
  useEffect(() => {
    const data = tree_info.filter((leaf) => leaf.id === Number(param.id));
    setSingleLeafData(data);
  }, [param.id]);
  return (
    <div className='overflow-hidden'>
      {singleLeafData.length > 0 && (
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", marginLeft: "10px" }}
        >
          <Grid item xs={4}>
            <img
              className="w-full h-[400px] object-fit"
              src={singleLeafData[0].imageUrl1}
              alt=""
            />
            <span className="flex justify-center items-center m-5">
              <p className="text-green-700 text-xl">Indian Name :</p>
              <p className="ml-1 text-gray-600 font-bold text-xl">
                {singleLeafData[0].localName}{" "}
              </p>
            </span>
          </Grid>

          <Grid item xs={8}>
            <div className="flex space-x-14 items-center justify-center">
              <div className="mt-10 space-x-4">
                <span>
                  <p className="text-green-700 text-xl">
                    Scientific Name :{" "}
                    <span className="text-gray-500">
                      {" "}
                      {singleLeafData[0].universalName}
                    </span>{" "}
                  </p>
                </span>

                <span>
                  <p className="text-green-700 text-xl">
                    Tree Category :{" "}
                    <span className="text-gray-500">
                      {" "}
                      {singleLeafData[0].treeCategory}
                    </span>{" "}
                  </p>
                </span>

                <span>
                  <p className="text-green-700 text-xl">
                    Average Height :{" "}
                    <span className="text-gray-500">
                      {" "}
                      {singleLeafData[0].averageHeight} Feet
                    </span>{" "}
                  </p>
                </span>

                <span>
                  <p className="text-green-700 text-xl">
                    Average Life Span :{" "}
                    <span className="text-gray-500">
                      {" "}
                      {singleLeafData[0].averageLifeSpan} Years
                    </span>{" "}
                  </p>
                </span>
              </div>
              <div>
                <img
                  className="w-[200px] h-[200px] object-cover  mt-10"
                  src={singleLeafData[0].imageUrl}
                  alt=""
                />
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default SingleLeafPage;
