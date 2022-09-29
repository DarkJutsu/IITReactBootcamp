import { useEffect, useState } from "react";

export const Clock = () => {
  const user = {
    fecha: new Date(),
    edad: 0,
    nombre: "Samuel",
    apellidos: "Ulloa",
  };

  const [userr, setUserr] = useState(user);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setUserr((preUser) => {
        let edad = preUser.edad + 1;
        return {
          ...preUser,
          fecha: new Date(),
          edad,
        };
      });
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {userr.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {userr.nombre} {userr.apellidos}
      </h3>
      <h1>Edad: {userr.edad}</h1>
    </div>
  );
};
