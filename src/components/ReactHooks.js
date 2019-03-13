import React, { useState, useEffect } from "react";

export default function ReactHooks() {
  const name = useFormInputs("React");
  const lastname = useFormInputs("Hooks");
  const width = useWindowWidth();
  useWindowName(`${name.value} ${lastname.value}`);

  return (
    <div>
      {" "}
      <h1>ReactHooks Component</h1> <input {...name} />
      <input {...lastname} />
      <p>Tamaño de la ventana: {width}</p>
    </div>
  );
}

function useFormInputs(data) {
  const [value, setValue] = useState(data);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

function useWindowName(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return width;
}
