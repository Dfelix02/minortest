import React, { useState } from "react";
import { Card, Icon, Image, Button, Form } from "semantic-ui-react";
import "../css/UserCard.css";

function UserCard({ id, name, email, phone, website, image, deleteUser }) {
  const [liked, setLiked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [myName, setMyName] = useState(name);
  const [myEmail, setMyEmail] = useState(email);
  const [myPhone, setMyPhone] = useState(phone);
  const [myWebsite, setMyWebsite] = useState(website);

  const changeInfo = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  const changeName = (e) => {
    setMyName(e.target.value);
  };
  const changeEmail = (e) => {
    setMyEmail(e.target.value);
  };
  const changePhone = (e) => {
    setMyPhone(e.target.value);
  };
  const changeWebsite = (e) => {
    setMyWebsite(e.target.value);
  };

  return (
    <Card>
      {edit ? (
        <Card.Content>
          <Card.Description>
            <Form onSubmit={changeInfo}>
              <Form.Field>
                <label>Name</label>
                <input name="name" value={myName} onChange={changeName} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input name="email" value={myEmail} onChange={changeEmail} />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input name="phone" value={myPhone} onChange={changePhone} />
              </Form.Field>
              <Form.Field>
                <label>Website</label>
                <input
                  name="website"
                  value={myWebsite}
                  onChange={changeWebsite}
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>{" "}
          </Card.Description>
        </Card.Content>
      ) : (
        <Card>
          <Image src={image} />
          <Card.Content>
            <Card.Header>{myName}</Card.Header>
            <Card.Description>
              <Icon name="mail outline" />
              {myEmail}
            </Card.Description>
            <Card.Description>
              <Icon name="phone" />
              {myPhone}
            </Card.Description>
            <Card.Description>
              <Icon name="globe" />
              {myWebsite}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group fluid>
              <Button
                color="grey"
                className={liked && "like"}
                onClick={() => setLiked(!liked)}
              >
                <Icon name="heart" />
              </Button>
              <Button color="grey" onClick={() => setEdit(!edit)}>
                <Icon name="edit" />
              </Button>
              <Button color="grey" onClick={() => deleteUser(id)}>
                <Icon name="trash" />
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </Card>
  );
}

export default UserCard;