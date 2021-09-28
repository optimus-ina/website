import React, { useState} from "react";
import {
  Form,
  FormInput,
  FormMessage,
  HiddenLabel,
  FormButtonWrap,
  FormButton,
  Error,
} from "./ContactFormStyles";

const ContactForm = () => {
  const [formError, setFormError] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInput({ ...formInput, [name]: value });
  };

  // useEffect(() => {
  //   if (!formInput.name) {
  //     setFormError(!formError);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formInput.name &&
      formInput.email &&
      formInput.phone &&
      formInput.message
    ) {
      setFormError(false);
      console.log(`Form Complete`);
    } else {
      setFormError(true);
      console.log(`Form Incomplete`);
    }
  };

  console.log(formInput);

  return (
    <>
      <Form>
        <FormInput>
          <HiddenLabel htmlFor="name">Enter your name</HiddenLabel>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formInput.name}
            onChange={handleChange}
            error={formError}
          />
          <Error error={formError}>
            <p>
              Can't be empty{" "}
              <span>
                <i class="fas fa-exclamation-circle"></i>
              </span>
            </p>
          </Error>
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor="email">Enter your email address</HiddenLabel>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formInput.email}
            onChange={handleChange}
            error={formError}
          />
          <Error error={formError}>
            <p>
              Can't be empty{" "}
              <span>
                <i class="fas fa-exclamation-circle"></i>
              </span>
            </p>
          </Error>
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor="phone">Enter your phone number</HiddenLabel>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={formInput.phone}
            onChange={handleChange}
            error={formError}
          />
          <Error error={formError}>
            <p>
              Can't be empty{" "}
              <span>
                <i class="fas fa-exclamation-circle"></i>
              </span>
            </p>
          </Error>
        </FormInput>
        <FormMessage>
          <HiddenLabel htmlFor="message">Type your message</HiddenLabel>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
            rows="4"
            cols="50"
            value={formInput.message}
            onChange={handleChange}
          />
        </FormMessage>
        <FormButtonWrap>
          <FormButton onClick={handleSubmit}>submit</FormButton>
        </FormButtonWrap>
      </Form>
    </>
  );
};

export default ContactForm;