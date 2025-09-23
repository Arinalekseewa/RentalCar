import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import styles from "./BookingForm.module.css";

export default function BookingForm({ carId }) {
  const [startDate, setStartDate] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    date: null,
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Please select a date'),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Імітуємо відправку на сервер
    console.log({ carId, ...values });
    
    // Твоїй API-запит сюди, наприклад axios.post(...)
    // axios.post(`/api/bookings`, { carId, ...values })

    toast.success('Машина успішно заброньована!');
    resetForm();
    setStartDate(null);
  };

  return (
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
              <Form>
                  <div className={styles.inputs}>
                      <div >
            <label htmlFor="name"></label>
            <Field name="name" type="text" placeholder="Name*"/>
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email"></label>
            <Field name="email" type="email" placeholder="Email*"/>
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="date"></label>
                <DatePicker
              placeholder="Booking date"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setFieldValue('date', date);
              }}
              minDate={new Date()}
              placeholderText="Booking date"
            />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="comment"></label>
            <Field as="textarea" rows={3} name="comment" placeholder="Comment"/>
          </div>
                  </div>

          <button type="submit" className={styles.btn}>Send</button>
        </Form>
      )}
    </Formik>
  );
}
