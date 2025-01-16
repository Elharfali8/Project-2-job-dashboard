'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Label } from './ui/label'

const SelectInput = ({ label, name, data }) => {
    
  return (
      <div className="grid w-full items-center gap-1.5">
          <Label htmlFor={name} className='mb-1 capitalize'>{label}</Label>
          <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={data[0]} value={data[0]} />
      </SelectTrigger>
      <SelectContent>
                  <SelectGroup>
                      {data?.map((item, index) => {
                          return (
                              <SelectItem value={item} key={index}>{item}</SelectItem>
                          )
                      })}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}

export default SelectInput