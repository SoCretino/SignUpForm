import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if password is longer than 8 characters and has at least 1 uppercase character and 1 number", () => {
    const wrapper = mount(<Form />);
    const passwordRegEx = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    wrapper.find({'data-testid': 'password'}).simulate('change', {target: {name: 'password', value: 'Altaclave123'}});
    expect(wrapper.state().password).toMatch(passwordRegEx);
});