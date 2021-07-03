import React from 'react'
import "./Map.css";
import {useFormik} from 'formik';
import CustomSelect from '../../customSelect';

const options = [
  {value: 'RennerValue', label: 'Renner'},
  {value: 'C&AValue', label: 'C&A'},
  {value: 'AppleValue', label: 'Apple'}
]

export function Map() {

  const validate = values => {
    const errors = {}

    if (!values.store) {
      errors.store = 'Required'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      store: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }

  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={"form-map"}>

        <label htmlFor="store" className={"label-map"}>Escolha sua loja</label>
        <CustomSelect
          className='input-map'
          onChange={value => formik.setFieldValue('store', value.value)}
          value={formik.values.store}
          options={options}
        />
        {formik.errors.store ? <div className='error'>{formik.errors.store}</div> : null}
        <button type="submit" className="button-map">Encontre</button>

      </form>
    </div>
  )
}

export default Map;
