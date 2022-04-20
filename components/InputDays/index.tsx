import React from "react";

interface Props {
  days: number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}

const InputDays: React.FC<Props> = ({ days, setDays }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(parseInt(e.target.value));
  };
  return (
    <input
      onChange={handleChange}
      type="number"
      value={days}
      required
      max={7}
      min={1}
    />
  );
};

export default InputDays;
