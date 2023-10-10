import React from "react";
import {
  CardContainer,
  CardWrap,
  CardContent,
  CardForm,
  CardHeader,
  CardText,
} from "./ContactCardStyles";
import ContactForm from "../ContactForm/ContactForm";

const ContactCard = () => {
  return (
    <CardContainer>
      <CardWrap>
        <CardContent>
          <CardHeader>Contact Us</CardHeader>
          <CardText>
            Are you ready to elevate your business to new heights? Let's delve into your project or idea and discover how we can fuel your growth. If you crave distinctive digital experiences that resonate with your users, reach out to us today.
          </CardText>
        </CardContent>
        <CardForm>
          <ContactForm />
        </CardForm>
      </CardWrap>
    </CardContainer>
  );
};

export default ContactCard;
