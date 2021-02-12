import React, { Fragment } from 'react';
import Form, { Field, FormFooter, ErrorMessage } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import { setUser } from '../actions';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../App.css'
import {MainLayout} from '../components/MainLayout';

export const UserRegister = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = () => {
    console.log("handleClick");
    history.push("/");
  }

  const validateString = (value) => {
    if (value.length < 1) {
      return 'TOO_SHORT'
    };
    return;
  }

  const validateEmail = (value) => {
    if (value.length < 5) {
      return 'TOO_SHORT'
    };
    const regexp = /\S+@\S+\.\S+/;
    if (regexp.test(value)) {
      return undefined;
    };
    return 'MUST_BE_MAIL';
  }

  const validateNumber = (value) => {
    if (value.length < 9) {
      return 'TOO_SHORT'
    };
    const regexp = /^[0-9]*$/;
    if (regexp.test(value)) {
      return undefined;
    };
    return 'MUST_BE_NUMBER'
  }

  return (
    <MainLayout>
      <section className='user-register-section'>
        <h2> Please enter your information</h2>

        <Form onSubmit={data => {
          dispatch(setUser(data))
          handleSubmit()
        }
        }>
          {({ formProps, dirty, submitting }) => (
            <form {...formProps}>
              <Field name="firstname" defaultValue="" label="First Name" isRequired validate={validateString}>
                {({ fieldProps, error }) =>
                  <Fragment>
                    <TextField {...fieldProps} />
                    {error === 'TOO_SHORT' && (
                      <ErrorMessage>
                        This field is required
                      </ErrorMessage>
                    )}
                  </Fragment>
                }
              </Field>
              <Field name="lastname" defaultValue="" label="Last Name" isRequired validate={validateString}>
                {({ fieldProps, error }) =>
                  <Fragment>
                    <TextField {...fieldProps} />
                    {error === 'TOO_SHORT' && (
                      <ErrorMessage>
                        This is too short to be an email adress
                      </ErrorMessage>
                    )}
                  </Fragment>
                }
              </Field>
              <Field name="email" defaultValue="" label="Email" isRequired validate={validateEmail}>
                {({ fieldProps, error }) =>
                <Fragment>
                  <TextField {...fieldProps} />
                  {error === 'TOO_SHORT' && (
                    <ErrorMessage>
                      This is too short to be an email adress
                    </ErrorMessage>
                  )}
                  {error === 'MUST_BE_MAIL' && (
                    <ErrorMessage>
                      This is not a valid email adress
                    </ErrorMessage>
                  )}
                </Fragment>
                }
              </Field>
              <Field name="phone" defaultValue="" label="Phone" isRequired validate={validateNumber}>
                {({ fieldProps, error }) =>
                <Fragment>
                  <TextField {...fieldProps} />
                  {error === 'TOO_SHORT' && (
                    <ErrorMessage>
                      This is too short to be a phone number
                    </ErrorMessage>
                  )}
                  {error === 'MUST_BE_NUMBER' && (
                    <ErrorMessage>
                      This is not a valid phone number
                    </ErrorMessage>
                  )}
              </Fragment>
                }
              </Field>
              <FormFooter>
                <Button type="submit" appearance="primary" isDisabled={!dirty || submitting}>Submit</Button>
              </FormFooter>
            </form>
          )}
        </Form>
      </section>
    </MainLayout>
  );
}