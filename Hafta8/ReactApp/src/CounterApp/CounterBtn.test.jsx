import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CounterBtn from "./CounterBtn";
import { CounterContextProvider } from "../context/Context";
import { NameContextProvider } from "../context/NameContext";

test("should increment count when button is clicked", () => {
  const { getByText } = render(
    <CounterContextProvider>
      <CounterBtn />
    </CounterContextProvider>
  );

  const incrementButton = getByText("Arttır");
  fireEvent.click(incrementButton);

  const countDisplay = getByText("1");
  expect(countDisplay).toBeInTheDocument();
});

test("should update name when name button is clicked", () => {
  const { getByText } = render(
    <NameContextProvider>
      <CounterBtn />
    </NameContextProvider>
  );

  const nameButton = getByText("birinci");
  fireEvent.click(nameButton);

  const nameDisplay = getByText("Belida");
  expect(nameDisplay).toBeInTheDocument();
});
