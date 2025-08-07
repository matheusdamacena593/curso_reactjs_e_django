import { useState, type ChangeEvent } from "react";

const App = () => {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, firstName: e.target.value });
  };
  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, lastName: e.target.value });
  };

  return (
    <div>
      <input value={fullName.firstName} onChange={handleChangeFirstName} />

      <input value={fullName.lastName} onChange={handleChangeLastName} />

      <h1>Nome completo: {fullName.firstName} {fullName.lastName}</h1>
    </div>
  );
};

export default App;
