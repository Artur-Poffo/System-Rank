import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface DefaultInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}

export const DefaultInput = React.forwardRef<HTMLInputElement, DefaultInputProps>(({ name, type = 'text', className, label, placeholder, required = false, ...rest }: DefaultInputProps, ref) => {
  return (
    label ? (
      <>
        <label className="text-sm text-brand-blue-600 font-bold" htmlFor={name!.toLowerCase()}>{label}</label>
        <input ref={ref} name={name!.toLowerCase()} type={type} className={`p-2 bg-brand-blue-800 text-brand-blue-600 outline-none rounded-sm ${className}`} placeholder={placeholder} required={required} {...rest} />
      </>
    ) : (
      <input ref={ref} name={name?.toLowerCase()} type={type} className={`p-2 bg-brand-blue-800 text-brand-blue-600 outline-none rounded-sm ${className}`} placeholder={placeholder} required={required} {...rest} />
    )
  )
})

DefaultInput.displayName = "DefaultInput"