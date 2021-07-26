import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if password is not empty", () => {
    const wrapper = mount(<Form />);
    wrapper.find({'data-testid': 'password'}).simulate('change', {target: {name: 'password', value: 'Altaclave123'}});
    expect(wrapper.state().password.length).toBeGreaterThanOrEqual(1);
});