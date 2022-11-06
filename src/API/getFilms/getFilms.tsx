import * as React from "react";

// return a promise containing the all the films
export const getFilms = async () => {
  try {
    let response = await fetch(`https://swapi.dev/api/films/?format=json`, {
      method: "GET",
    });
    const ResObj = await response.json();
    return {
      isSuccessful: true,
      data: ResObj.results,
    };
  } catch (error) {
    return { isSuccessful: false, data: null };
  }
};
