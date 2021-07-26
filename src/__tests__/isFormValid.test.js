import React from 'react';
import { mount } from 'enzyme';
import Form from "../components/form/Form";

it("Checks if form is validated", () => {
    const wrapper = mount(<Form />);
    window.alert = jest.fn();
    wrapper.find({'data-testid': 'name'}).simulate('change', {target: {name: 'name', value: 'Fulanito'}});
    wrapper.find({'data-testid': 'lastName'}).simulate('change', {target: {name: 'lastName', value: 'De tal'}});
    wrapper.find({'data-testid': 'email'}).simulate('change', {target: {name: 'email', value: 'example@domain.com'}});
    wrapper.find({'data-testid': 'password'}).simulate('change', {target: {name: 'password', value: 'Altaclave123'}});
    wrapper.find('form').simulate('submit');
    expect(window.alert).toHaveBeenCalledWith("Trial activated! Check your email for account verification.");
});