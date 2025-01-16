'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const FormInput = ({label, name, type}) => {
  return (
    <div className="grid w-full items-center gap-1.5">
          <Label htmlFor={name} className='mb-1 capitalize'>{label}</Label>
    <Input type={type} name={name} placeholder={label} />
  </div>
  )
}

export default FormInput