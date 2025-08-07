import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";

const App = () => {
  const roles = [
    { id: 1, title: "CEO" },
    { id: 2, title: "CTO" },
    { id: 3, title: "admin" },
  ];

  return (
    <>
      <Card>
        <>
          <UserInfo
            age={22}
            email="matheus@gmail.com"
            name="Matheus"
            roles={roles}
          />
          <UserInfo
            age={22}
            email="lananda@gmail.com"
            name="Lananda"
            roles={roles}
          />
          <UserInfo
            age={2}
            email="gamora@gmail.com"
            name="Gamora"
            roles={roles}
          />
        </>
      </Card>
    </>
  );
};

export default App;
