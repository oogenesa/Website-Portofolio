import React, { useState } from "react";

interface Props {
  text: string;
  ok?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [test, setTest] = useState<number | null>();
  //   setTest(5);
  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};
