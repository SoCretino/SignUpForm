import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if last name is greater or equal to 3 characters", () => {
    const wrapper = mount(<Form />);
    wrapper.find({'data-testid': 'lastName'}).simulate('change', {target: {name: 'lastName', value: 'De tal'}});
    expect(wrapper.state().lastName.length).toBeGreaterThanOrEqual(3);
});