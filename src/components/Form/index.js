import { useState } from "react";

const Form = () => {
  const FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIgjTj9aGGya6fEZZo_bisBMwZPu3W8EmjyZrmULmRV09oBA/formResponse";
  const [name, setName] = useState("");

  const info = [
    {
      label: "Name",
      value: name,
      type: 'text',
      entry: 'entry.number',
      function: (e) => setName(e.target.value)
    },
  ];

  return <form></form>;
};

export default Form;
