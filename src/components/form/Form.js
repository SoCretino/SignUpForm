/* Don't forget this receives a value prop for the submit button! */

import React, { Component } from 'react';
import InputField from '../inputfield/InputField';
import Button from '../button/Button';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      formErrors: {name: 'First name cannot be empty', lastName: 'Last name cannot be empty', email: 'Email cannot be empty', password: 'Password cannot be empty'},
      isNameValid: '',
      isLastNameValid: '',
      isEmailValid: '',
      isPasswordValid: '',
      isFormValid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //const apiUrl = "https://random.justyy.workers.dev/api/random/?cached&n=10";
    fetch("https://random.justyy.workers.dev/api/random/?cached&n=10").then(response => response.json()).then(data => {this.setState({password: data});console.log(this.state.pass)});
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  validateField(fieldName, fieldValue) {
    let fieldValidationErrors = this.state.formErrors;
    let isNameValid = this.state.isNameValid;
    let isLastNameValid = this.state.isLastNameValid;
    let isEmailValid = this.state.isEmailValid;
    let isPasswordValid = this.state.isPasswordValid;
    const emailRegEx = new RegExp(/\w+@\w+\.\w{2,10}/); //We just check if the email address has a valid format. Honestly, the real verification is if the user got the email or not.
    const passwordRegEx = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"); //Password must be at least 8 characters long, including at least one uppercase character and one number.

    switch (fieldName) {
      case 'name':
        if (!fieldValue) {
          fieldValidationErrors.name = 'First name cannot be empty';
          isNameValid = false;
        }
        else if (/[^a-zA-Z -]/.test(fieldValue)) {
          fieldValidationErrors.name = 'First name must be only characters';
          isNameValid = false;
        }
        else if (fieldValue.length <= 2) {
          fieldValidationErrors.name = 'First name must be at least 3 characters long';
          isNameValid = false;
        }
        else if (fieldValue.length >= 70) {
          fieldValidationErrors.name = 'First name cannot be larger than 70 characters';
          isNameValid = false;
        }
        //We could check for continuos repeated characters too.
        else {
          fieldValidationErrors.name = '';
          isNameValid = true;
        }
      break;
      case 'lastName':
        if (!fieldValue) {
          fieldValidationErrors.lastName = 'Last name cannot be empty';
          isLastNameValid = false;
        }
        else if (/[^a-zA-Z -]/.test(fieldValue)) {
          fieldValidationErrors.lastName = 'Last name must be only characters';
          isLastNameValid = false;
        }
        else if (fieldValue.length <= 2) {
          fieldValidationErrors.lastName = 'Last name must be at least 3 characters long';
          isLastNameValid = false;
        }
        else if (fieldValue.length >= 70) {
          fieldValidationErrors.lastName = 'Last name cannot be larger than 70 characters';
          isLastNameValid = false;
        }
        else {
          fieldValidationErrors.lastName = '';
          isLastNameValid = true;
        }
      break;
      case 'email':
        if (!fieldValue) {
          fieldValidationErrors.email = 'Email cannot be empty';
          isEmailValid = false;
        }
        else if (!(emailRegEx.test(fieldValue))) {
          fieldValidationErrors.email = 'Looks like this is not an email';
          isEmailValid = false;
        }
        else {
          fieldValidationErrors.email = '';
          isEmailValid = true;
        }
      break;
      case 'password':
        if (!fieldValue) {
          fieldValidationErrors.password = 'Password cannot be empty';
          isPasswordValid = false;
        }
        else if (!(passwordRegEx.test(fieldValue))) {
          fieldValidationErrors.password = 'Password must be at least 8 characters long, including at least one uppercase character and one number';
          isPasswordValid = false;
        }
        else {
          fieldValidationErrors.password = '';
          isPasswordValid = true;
        }
      break;
      default:
      break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      isNameValid: isNameValid,
      isLastNameValid: isLastNameValid,
      isEmailValid: isEmailValid,
      isPasswordValid: isPasswordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({isFormValid: this.state.isNameValid && this.state.isLastNameValid && this.state.isEmailValid && this.state.isPasswordValid});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isFormValid === true)
      alert("Trial activated! Check your email for account verification.");
    else {
      if (this.state.isNameValid === '') {
        this.setState({isNameValid: false})
      }
      if (this.state.isLastNameValid === '') {
        this.setState({isLastNameValid: false})
      }
      if (this.state.isEmailValid === '') {
        this.setState({isEmailValid: false})
      }
      if (this.state.isPasswordValid === '') {
        this.setState({isPasswordValid: false})
      }
    }
  }

  render() {
    return (
      <form className = "Form" data-testid = "form" onSubmit = {this.handleSubmit}>
        <InputField name = "name" type = "text" placeholder = "First Name" value = {this.state.name} valid = {this.state.isNameValid} onChange = {this.handleInputChange}/>
        {this.state.isNameValid === false && <span className = "ValidationErrorMessage">{this.state.formErrors.name}</span>}
        <InputField name = "lastName" type = "text" placeholder = "Last Name" value = {this.state.lastName} valid = {this.state.isLastNameValid} onChange = {this.handleInputChange}/>
        {this.state.isLastNameValid === false && <span className = "ValidationErrorMessage">{this.state.formErrors.lastName}</span>}
        <InputField name = "email" type = "email" placeholder = "Email Address" value = {this.state.email} valid = {this.state.isEmailValid} onChange = {this.handleInputChange}/>
        {this.state.isEmailValid === false && <span className = "ValidationErrorMessage">{this.state.formErrors.email}</span>}
        <InputField name = "password" type = "password" placeholder = "Password" value = {this.state.password} valid = {this.state.isPasswordValid} onChange = {this.handleInputChange}/>
        {this.state.isPasswordValid === false && <span className = "ValidationErrorMessage">{this.state.formErrors.password}</span>}
        <Button type = "submit" value = {this.props.SubmitText}/>
        <p className = "Terms">
          By clicking the button, you are agreeing to our <a className = "textred" href = "/terms/">Terms and Services</a>
        </p>
      </form>
    );
  }
}

export default Form;