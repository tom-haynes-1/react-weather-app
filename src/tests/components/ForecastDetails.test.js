/* eslint-disable prettier/prettier */
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const forecast = {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    humidity: 40,
    wind: {
      speed: 60,
      direction: "sw",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={forecast} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={forecast} />);

    expect(getByText("Mon Apr 30 2018")).toHaveClass("forecast-details__date");
    expect(getByText("Max Temperature: 11°C")).toHaveClass("forecast-details__maxTemperature");
    expect(getByText("Min Temperature: 4°C")).toHaveClass("forecast-details__minTemperature");
    expect(getByText("Humidity: 40%")).toHaveClass("forecast-details__humidity");
    expect(getByText("Wind Speed: 60mph")).toHaveClass("forecast-details__wind_speed");
    expect(getByText("Wind Direction: sw")).toHaveClass("forecast-details__wind_direction");
  });
});
