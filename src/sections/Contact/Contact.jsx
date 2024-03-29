import React, { useEffect, useState } from 'react';
import Filter from 'bad-words';
import Fade from 'react-reveal/Fade';
import classes from './contact.module.scss';

import { Button, SnackBar } from './../../components';

import mail from './mailer';

const filter = new Filter();
filter.removeWords('hell', 'god');

export default function Contact() {
  const initialState = { name: '', email: '', message: '' };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState('not initiated');
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData(prevVal => {
      if (value.trim() !== prevVal[id] && value.trim().length > prevVal[id].trim().length) {
        return { ...prevVal, [id]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [id]: value };
      }
    });
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, email, message } = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    if (name === '' || email === '' || message === '') {
      return setMailerResponse('error');
    }

    setIsSending(true);

    mail({ name, email, message })
      .then(res => {
        if (res.status === 200) {
          setMailerResponse('success');
          emptyForm();
        } else {
          setMailerResponse('error');
        }
      })
      .catch(err => {
        setMailerResponse('error');
        console.error(err);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setMailerResponse('not initiated');
    }, 13000);
  }, [mailerResponse]);

  return (
    <section id='contact' className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.sub_heading}>Have a role or a project for me?</div>
        <h3 className={classes.heading}>Let's get in touch!</h3>
        <form className={classes.contact__form}>
          <Fade bottom distance={'4rem'}>
            <div className={classes.input}>
              <input
                placeholder='name'
                id='name'
                required
                type='text'
                className={classes.input__field}
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor='name' className={classes.input__label}>
                Name
              </label>
            </div>

            <div className={classes.input}>
              <input
                placeholder='email'
                id='email'
                required
                type='email'
                className={classes.input__field}
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor='email' className={classes.input__label}>
                Email
              </label>
            </div>

            <div className={classes.input}>
              <textarea
                placeholder='message'
                id='message'
                required
                className={classes.input__field}
                style={{
                  height: 'auto',
                  width: '100%',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '16rem',
                  maxHeight: '26rem'
                }}
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor='message' className={classes.input__label}>
                Message
              </label>
            </div>

            <Button disabled={isSending} onClick={handleSubmit}>
              {isSending ? 'Sending...' : 'Send ->'}
            </Button>
          </Fade>
        </form>

        {mailerResponse !== 'not initiated' && (
          <SnackBar variant={mailerResponse} icon='mail'>
            {mailerResponse === 'success'
              ? 'Message sent successfully'
              : mailerResponse === 'bot'
              ? 'Complete ReCaptcha challenge'
              : 'There was an error sending your message'}
          </SnackBar>
        )}
      </div>
    </section>
  );
}
