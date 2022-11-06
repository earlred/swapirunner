import React, { useEffect } from "react";
import "./App.css";
import { fetchVehicles, vehiclesSelector } from "./features/vehicles";
import { Provider, useDispatch } from "react-redux";
import { store, useAppSelector, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { fetchFilms, filmsSelector } from "./features/films";
import { filmSelect, filmSelector } from "./features/film";
import { filmDetailSelect, filmDetailSelector } from "./features/filmDetail";
let vehicleDict = {};
let filmDict = {};

const AllVehicles: Function = (
  sortOrder?: "ASC" | "DESC"
): JSX.Element | JSX.Element[] => {
  const dispatch = useDispatch();
  const vehicles = useAppSelector(vehiclesSelector);

  useEffect(() => {
    dispatch(fetchVehicles());
    dispatch(fetchFilms());
  }, [sortOrder]);
  const selectHandler = (key: string) => {
    dispatch(
      filmSelect(
        // @ts-ignore
        vehicleDict[key].films.map((filmUrl: string) => filmDict[filmUrl])
      )
    );
  };
  const films = useAppSelector(filmsSelector);
  if (films) {
    for (const [, value] of Object.entries(films)) {
      // @ts-ignore
      filmDict[value.url] = value;
    }
  }
  if (vehicles) {
    //populate dict
    for (const [, value] of Object.entries(vehicles)) {
      // @ts-ignore
      vehicleDict[value.name] = value;
    }
    // Sort by name
    const vehicleArray =
      // @ts-ignore
      sortOrder["sortOrder"] === "DESC"
        ? vehicles
            .map((vehicleObj) => {
              return vehicleObj["name"];
            })
            .sort()
            .reverse()
        : vehicles
            .map((vehicleObj) => {
              return vehicleObj["name"];
            })
            .sort();

    return vehicleArray.map((vehicle) => {
      return (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={vehicle}
              style={{ color: "dodgerblue" }}
              onClick={() => selectHandler(vehicle)}
            />
          </ListItemButton>
        </ListItem>
      );
    });
  } else {
    return <></>;
  }
};
const Films: Function = (): JSX.Element | JSX.Element[] => {
  const dispatch = useDispatch();
  const film = useAppSelector(filmSelector);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);
  //@ts-ignore
  return film.map((filmObj) => {
    return (
      <ListItemButton>
        <ListItemText
          style={{ color: "dodgerblue" }}
          key={filmObj["title"]}
          primary={filmObj["title"]}
          onClick={() => {
            dispatch(filmDetailSelect(filmDict[filmObj["url"]]));
          }}
        />
      </ListItemButton>
    );
  });
};
const FilmDetails: Function = (): JSX.Element | JSX.Element[] => {
  const filmDetail = useAppSelector(filmDetailSelector);
  let filmDetailList = [];

  // @ts-ignore
  for (const [key, value] of Object.entries(filmDetail)) {
    if (typeof value === "string") {
      filmDetailList.push(
        <>
          <div style={{ fontSize: 14, textAlign: "left", paddingBottom: 5 }}>
            {key}
          </div>
          <div
            key={key}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "left",
              paddingBottom: 10,
              paddingRight: 30,
            }}
          >
            {value}
          </div>
        </>
      );
    }
  }

  return (
    <div>
      {filmDetailList.map((detailList) => {
        return detailList;
      })}
    </div>
  );
};
function App() {
  const [sortOrder, setSortOrder] = React.useState<"ASC" | "DESC">("ASC");
  // @ts-ignore
  const handleSortChange = (e) => {
    e.preventDefault();
    setSortOrder(e.target.value);
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ padding: 50, borderRadius: 10 }}
          >
            <Grid
              item
              xs={3}
              style={{
                backgroundColor: "lightGray",
                margin: 5,
                borderRadius: 20,
              }}
            >
              <Stack spacing={2}>
                <div style={{ fontSize: 40, textAlign: "center" }} data-testid={'vehicles-id'}>
                  Vehicles
                </div>
                <FormControl style={{ width: 100 }}>
                  <InputLabel id="select-label">Order By</InputLabel>
                  <Select
                    data-testid={'order-id'}
                    id="select-order"
                    label="Order By"
                    labelId="select-label"
                    onChange={handleSortChange}
                    value={sortOrder}
                  >
                    <MenuItem value={"ASC"}>ASC</MenuItem>
                    <MenuItem value={"DESC"}>DESC</MenuItem>
                  </Select>
                </FormControl>
                <Box style={{ backgroundColor: "transparent", padding: 20 }}>
                  <List
                    style={{
                      backgroundColor: "transparent",
                      height: 600,
                      overflow: "scroll",
                    }}
                  >
                    <AllVehicles sortOrder={sortOrder} />
                  </List>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ backgroundColor: "silver", margin: 5, borderRadius: 20 }}
            >
              <div
                style={{ fontSize: 40, paddingBottom: 20, textAlign: "center" }}
                data-testid={'film-id'}
              >
                Film
              </div>
              <Box sx={{ bgcolor: "background.paper" }}></Box>
              <Stack spacing={2}>
                <Films />
              </Stack>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                backgroundColor: "lightGray",
                margin: 5,
                borderRadius: 20,
              }}
            >
              <div
                style={{ fontSize: 40, paddingBottom: 20, textAlign: "center" }}
                data-testid={'film-details-id'}
              >
                Film Details
              </div>
              <FilmDetails />
            </Grid>
          </Grid>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
