import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("display a label", () => {
    render(<Button>Submit</Button>);
    const button = screen.getByRole("button");
    expect(button.textContent).toEqual("Submit");
  });

  it("fires onClick when clicked", async () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy}>Submit</Button>);
    const button = screen.getByRole("button");
    // click the button
    await userEvent.click(button);
    // expect that onClick was called
    expect(onClickSpy).toHaveBeenCalled();
  });
});
