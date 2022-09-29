import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    onForecastSelect: () => {},
    forecasts: [
      {
        date: 1111111,
        description: "Stub description",
        icon: 800,
        temperature: {
          min: 12,
          max: 22,
        },
        onSelect: () => {},
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: 602,
        temperature: {
          min: 17,
          max: 28,
        },
        onSelect: () => {},
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
