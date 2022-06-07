import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useHistory } from "react-router-dom";

function SearchBox() {
  let [keyword, setKeyword] = useState("");
  let navigate = useNavigate();
  // let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      keyword = "";
      navigate(`/?keyword=${keyword}&page=1`);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex gap-1">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="w-75"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
