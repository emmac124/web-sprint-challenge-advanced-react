import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.queryByLabelText(/first name:/i);
    const lastName = screen.queryByLabelText(/last name:/i);
    const address = screen.queryByLabelText(/address:/i);
    const city = screen.queryByLabelText(/city:/i);
    const state = screen.queryByLabelText(/state:/i);
    const zip = screen.queryByLabelText(/zip:/i);
    const button = screen.queryByRole('button', { name: /checkout/i });

    userEvent.type(firstName, "Emma");
    userEvent.type(lastName, "Cooper");
    userEvent.type(address, "414 N Hodges Rd");
    userEvent.type(city, "Spokane Valley");
    userEvent.type(state, "Washington");
    userEvent.type(zip, "99016");
    userEvent.click(button);

    const submitText = screen.queryByText(/emma/i, /cooper/i, /414 N Hodges Rd/i, /spokane valley/i, /washington/i, /99016/i);

    expect(submitText).toBeInTheDocument();

});
