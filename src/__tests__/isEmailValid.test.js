import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if email has a valid format", () => {
    const wrapper = mount(<Form />);
    const emailRegEx = new RegExp(/\w+@\w+\.\w{2,10}/);
    wrapper.find({'data-testid': 'email'}).simulate('change', {target: {name: 'email', value: 'example@domain.com'}});
    expect(wrapper.state().email).toMatch(emailRegEx);
});