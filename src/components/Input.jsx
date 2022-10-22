import {React} from 'react'

const Input =(props)=> {
  const {label,error,onChange,name,placeholder,type}=props
  const className=error ? "form-control is-invalid": "form-control";
  return (
    <>
      <div className="form-group">
            <label>{label}</label>
            <input
              name={name}
              placeholder={placeholder}
              className={className}
              type={type}
              onChange={onChange}
            />
            <div className="invalid-feedback">{error}</div>
          </div>

    </>
  )
}

export default Input