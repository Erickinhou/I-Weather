import React, { useState } from "react";
import { getCoordinates } from "../../services/getCoordinates";
import { SearchWrapper, Label, Input, Button } from "./styles";

const SearchBar: React.FC = () => {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getCoordinates(address);
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
