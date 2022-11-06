import * as React from "react";
import { ViewProps } from "react-native";

export interface getVehiclesProps extends ViewProps {
  searchKey?: string;
}

export const getVehicles = async (props: getVehiclesProps) => {
  try {
    const dataArray = [];
    let i = 1;
    while (true) {
      let response = await fetch(
        `https://swapi.dev/api/vehicles/?page=${i}&format=json`,
        {
          method: "GET",
        }
      );
      const ResObj = await response.json();
      console.log(ResObj.results, ResObj.next);
      if (ResObj.next === null) {
        break;
      } else {
        i++;
        dataArray.push(ResObj.results);
      }
    }
    return {
      isSuccessful: true,
      data: dataArray.flatMap((a) => {
        return a;
      })
    };
  } catch (error) {
    console.error(error);
    return { isSuccessful: false, data: null };
  }
};
