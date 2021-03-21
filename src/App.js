import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Search from "./components/Search";
import { Container, Grid, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((ans) => ans.json())
      .then((userInfo) => {
        const listOfUsers = userInfo.map((user) => {
          user.image = `https://avatars.dicebear.com/v2/avataaars/{${user.username}}.svg?options[mood][]=happy`;
          return user;
        });
        setUsers(listOfUsers);
        setFilterUser(listOfUsers);
      });
  }, []);

  const deleteUser = (id) => {
    const newUsers = filterUser.filter((user) => user.id !== id);
    setFilterUser(newUsers);
  };

  const filterUsers = (searchedName) => {
    const newUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchedName.toLowerCase())
    );
    setFilterUser(newUsers);
  };
  const editUserName = (id, edit) => {
    const newUsers = filterUser.map((user) => {
      if (user.id === id) {
        user.name = edit;
      }
      return user;
    });
    setFilterUser(newUsers);
  };
  const editUserEmail = (id, edit) => {
    const newUsers = filterUser.map((user) => {
      if (user.id === id) {
        user.email = edit;
      }
      return user;
    });
    setFilterUser(newUsers);
  };

  const editUserPhone = (id, edit) => {
    const newUsers = filterUser.map((user) => {
      if (user.id === id) {
        user.phone = edit;
      }
      return user;
    });
    setFilterUser(newUsers);
  };
  const editUserWebsite = (id, edit) => {
    const newUsers = filterUser.map((user) => {
      if (user.id === id) {
        user.website = edit;
      }
      return user;
    });
    setFilterUser(newUsers);
  };

  return (
    <div className="App">
      <Container style={{ padding: "10px", margin: "10px" }}>
        <Search style={{ padding: "20px" }} searchUser={filterUsers} />
      </Container>
      {filterUser.length > 0 ? (
        <Grid columns={4} stackable stretched>
          {filterUser.map((user) => {
            return (
              <Grid.Column stackable key={user.id}>
                <UserCard
                  key={user.username}
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  website={user.website}
                  deleteUser={deleteUser}
                  editUserName={editUserName}
                  editUserEmail={editUserEmail}
                  editUserPhone={editUserPhone}
                  editUserWebsite={editUserWebsite}
                />
              </Grid.Column>
            );
          })}
        </Grid>
      ) : (
        <Container style={{ padding: "10px", margin: "10px" }}>
          <Image
            src="https://media2.giphy.com/media/tvGOBZKNEX0ac/200.gif"
            style={{ width: "81.5%" }}
          />
          No Users Found
        </Container>
      )}
    </div>
  );
}

export default App;
