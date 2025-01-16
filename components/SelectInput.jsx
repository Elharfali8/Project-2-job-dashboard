'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from './ui/label';

const SelectInput = ({ label, name, data = [], handleChange, value }) => {


    return (
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={name} className="mb-1 capitalize">
          {label}
        </Label>
        <Select
          value={value} // Correctly bind to Redux state
          onValueChange={(selectedValue) =>
            handleChange({ name, value: selectedValue }) // Proper payload structure
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={value || 'Select an option'} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.isArray(data) &&
                data.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  };
  
  

export default SelectInput;
