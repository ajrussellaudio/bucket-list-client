import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  it("allows a user to enter a country name and submit", async () => {
    const onSubmitSpy = jest.fn();
    render(<Form onSubmit={onSubmitSpy} />);
    // get text box
    const textbox = screen.getByLabelText("Country name");
    // type in text box
    await userEvent.type(textbox, "China");
    // get button
    const button = screen.getByRole("button", { name: "Submit" });
    // click button
    await userEvent.click(button);
    // expect onSubmit to be called with { name: TEXT }
    expect(onSubmitSpy).toHaveBeenCalledWith({ countryName: "China" });
  });
});
