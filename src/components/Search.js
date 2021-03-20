import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function Search({ searchUser }) {
  const [user, setUser] = useState("");

  const changeUser = (e) => {
    setUser(e.target.value);
    searchUser(e.target.value);
  };
  return (
    <Form>
      <Form.Field>
        <label>Search User</label>
        <input placeholder="Name" value={user} onChange={changeUser} />
      </Form.Field>
    </Form>
  );
}

export default Search;
