import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if email is not empty", () => {
    const wrapper = mount(<Form />);
    wrapper.find({'data-testid': 'email'}).simulate('change', {target: {name: 'email', value: 'example@domain.com'}});
    expect(wrapper.state().email.length).toBeGreaterThanOrEqual(1);
});