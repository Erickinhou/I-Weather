import React, { useState } from "react";
import getCoordinates from "../../services/getCoordinates";
import { SearchWrapper, Label, Input, Button } from "./styles";
import { Coordinates } from "../../common/interfaces";

interface Props {
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates | undefined>>;
}

const SearchBar: React.FC<Props> = ({ setCoordinates }) => {
  const [address, setAddress] = useState(
    "4600 Silver Hill Rd, Washington, DC 20233"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { coordinates } = await getCoordinates(address);
    setCoordinates(coordinates);

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  return (
    <>
      <SearchWrapper onSubmit={handleSubmit}>
        <Label>Put the address and see the forecast</Label>

        <Input type="text" onChange={handleChange} value={address} />
        <Button type="submit" disabled={isLoading}>
          Search
        </Button>
      </SearchWrapper>
    </>
  );
};

export default SearchBar;
