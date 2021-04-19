import React from "react";
import "../main.css";
import "./cards/card.css";
import Form from "./form/Form";
import Cards from "./cards/Cards";
import Header from "./header/Header";
import { useSelector } from "react-redux";
import Error from "./Error";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Redirect,
} from "react-router-dom";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";

function App() {
  const memes = useSelector((state) => state.getMemes);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const CardByID = () => {
    const { id } = useParams();
    const meme = memes.filter((meme) => meme._id === id);
    return meme.length === 0 ? (
      <Redirect to="/" exact />
    ) : (
      <div className="individual-meme-card">
        <Button
          className="edit-button"
          variant="contained"
          color="secondary"
          endIcon={<EditIcon />}
          type="button"
          onClick={handleOpen}
        >
          Edit
        </Button>
        <h3 className="meme-name">{meme[0].name}</h3>
        <p className="meme-caption">{meme[0].caption}</p>
        <img src={meme[0].url} alt="not found" />
        <Modal open={open} onClose={handleClose}>
          <Form
            heading="Edit the Meme"
            id={id}
            isModal={true}
            closeOnSubmit={handleClose}
          />
        </Modal>
      </div>
    );
  };
  return (
    <Router>
      <div>
        <Header />
        <Error />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Form />
              <Cards />
            </>
          )}
        />
        <Route path="/memes/:id" exact>
          <CardByID />
        </Route>
      </div>
    </Router>
  );
}

export default App;
