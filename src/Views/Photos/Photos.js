import React, { useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { getPhotoByQuery } from "../../service/api";
import { useStyles } from "./styles";

const Photos = ({ location }) => {
  const classes = useStyles();

  const { selectedDate, selectedCamera, title } = location.state;

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getPhotoByQuery({ title, selectedDate, selectedCamera, page })
      .then((data) => {
        setPage(page + 1);
        setPhotos(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickLoadMore = () => {
    setLoading(true);
    getPhotoByQuery({ title, selectedDate, selectedCamera, page })
      .then((data) => {
        setPage(page + 1);
        setPhotos(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {error && <p>Whoops, something went wrong: {error}</p>}
      {loading && (
        <div className={classes.spiner}>
          <LinearProgress />
        </div>
      )}
      {photos.length === 0 && !loading && (
        <p style={{ color: "wheat", textAlign: "center" }}>
          The photo is empty, try another date
        </p>
      )}
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cols={3}
          style={{ margin: "auto" }}
        >
          {photos.map((photo) => (
            <GridListTile
              key={photo.id}
              cols={1}
              className={classes.item}
              style={{ height: 250 }}
            >
              <img src={photo.img_src} alt={photo.id} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      {photos.length > 0 && (
        <Box className={classes.btnPagination}>
          <Button variant="contained" onClick={handleClickLoadMore}>
            Load more
          </Button>
        </Box>
      )}
    </>
  );
};

export default Photos;
