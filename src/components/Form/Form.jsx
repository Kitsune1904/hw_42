import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import * as Yup from 'yup';
import classes from './Form.module.css'

export const UserForm = (props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            text: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(2, 'Must be more than 0 characters')
                .max(10, 'Must be 15 characters or less')
                .required('Required'),
            text: Yup.string()
                .min(5, 'Must be more than 0 characters')
                .max(50, 'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: (values, {setSubmitting, resetForm}) => {
                console.log(values)
                props.handleOnSubmit(values)
                setSubmitting(false)
                resetForm();
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}
              style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '5px'}}>

            <label htmlFor="title">Note title</label>
            <input
                id='title'
                name='title'
                type='text'
                value={formik.values.title}
                min={2}
                max={10}
                onChange={formik.handleChange}
                style={{padding: '5px 10px'}}/>
            {formik.errors.title ? <p className={classes.error}>{formik.errors.title}</p> : null}

            <label htmlFor="text">Note text</label>
            <input
                id='text'
                name='text'
                type='text'
                value={formik.values.text}
                min={5}
                max={50}
                onChange={formik.handleChange}
                style={{padding: '5px 10px'}}/>
            {formik.errors.text ? <p className={classes.error}>{formik.errors.text}</p> : null}

            {!formik.isSubmitting && <button type='submit' style={{padding: '5px 10px'}}>Save</button>}
        </form>
    )
}

