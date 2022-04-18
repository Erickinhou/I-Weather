import React, { useState } from "react";
import getCoordinates from "../../services/getCoordinates";
import { SearchWrapper, Label, Input, Button } from "./styles";
import { Coordinates } from "../../common/interfaces";
import { toast } from "react-toastify";
import { fadeIn } from "../../animations";

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
    // to reset the animation
    setCoordinates(undefined);
    const { coordinates, description, error } = await getCoordinates(address);
    setCoordinates(coordinates);
    if (error || description) {
      toast.error(description ?? "Oops, something went wrong");
    } else {
      toast.success("Address Found");
    }
    setAddress("");
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  return (
    <>
      <SearchWrapper
        onSubmit={handleSubmit}
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <Label>Put the address and see the forecast</Label>

        <Input
          type="text"
          onChange={handleChange}
          value={address}
          placeholder="Insert address..."
        />
        <Button type="submit" disabled={isLoading}>
          Search
        </Button>
      </SearchWrapper>
    </>
  );
};

export default SearchBar;
