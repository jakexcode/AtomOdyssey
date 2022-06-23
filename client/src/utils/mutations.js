import { gql } from "@apollo/client";


export const CONTACT_FORM = gql`
  mutation contactForm($email: String!, $name: String!, $message: String!) {
    contactForm(email: $email, name: $name, message: $message) {
      ok
      error
    }
  }
`