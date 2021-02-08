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
    if (!value) {
      return;
    }
    if (!(typeof value === 'string' && value.length > 0)) return 'IS_REQ';
    return;
  }

  const validateEmail = (value) => {
    if (!value) {
      return;
    }
    var re = /\S+@\S+\.\S+/;
    if (re.test(value)) {
      return undefined;
    };
    return 'MUST_BE_MAIL';
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
                {({ fieldProps, error, valid }) =>
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!valid && (
                      <ErrorMessage>
                        This field is required
                      </ErrorMessage>
                    )}
                  </Fragment>
                }
              </Field>
              <Field name="lastname" defaultValue="" label="Last Name" isRequired>
                {({ fieldProps, error }) =>
                  <Fragment>
                    <TextField {...fieldProps} />
                    {error && (
                      <ErrorMessage>
                        This field is required
                      </ErrorMessage>
                    )}
                  </Fragment>
                }
              </Field>
              <Field name="email" defaultValue="" label="Email" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} validate={validateString} />}
              </Field>
              <Field name="phone" defaultValue="" label="Phone" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} validate={validateString} />}
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