import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "../../Views/Home/styles";
import routes from "../../routes";

const CardItem = ({
  history,
  options: { image, title, description, camera },
}) => {
  const classes = useStyles();

  const [selectedCamera, setselectedCamera] = useState("");
  const handleChange = ({ target: { value } }) => {
    setselectedCamera(value);
  };

  const [selectedDate, setSelectedDate] = useState("2014-08-18");
  const handleDateChange = (fulldate) => {
    const year = fulldate.getFullYear();
    const month = fulldate.getMonth();
    const date = fulldate.getDate();
    const queryData = `${year}-${month}-${date}`;
    setSelectedDate(queryData);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(routes.PHOTOS, { selectedCamera, selectedDate, title });
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="Rover" />
      <CardContent style={{ padding: "16px 16px 0" }}>
        <Typography gutterBottom variant="h4" component="h4">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ maxHeight: 80, overflow: "auto" }}
        >
          {description}
        </Typography>
        <IconButton
          className={expanded ? classes.expand : classes.expandOpen}
          onClick={handleExpandClick}
          aria-expanded={title}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      {expanded && (
        <>
          <Box className={classes.select}>
            <Typography component="span">Camera</Typography>
            <FormControl className={classes.formControl}>
              <Select native value={selectedCamera} onChange={handleChange}>
                <option aria-label="None" value="" />
                {camera.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="Date picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Box style={{ paddingBottom: 12 }}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </>
      )}
    </Card>
  );
};

export { CardItem };
