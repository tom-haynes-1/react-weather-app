import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form", () => {
  const validProps = {
    searchText: "Manchester, UK",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays correct text", () => {
    const { getByText } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
