import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if name is greater or equal to 3 characters", () => {
    const wrapper = mount(<Form />);
    wrapper.find({'data-testid': 'name'}).simulate('change', {target: {name: 'name', value: 'Fulanito'}});
    expect(wrapper.state().name.length).toBeGreaterThanOrEqual(3);
});