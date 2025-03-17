import TextField from '@mui/material/TextField';
import { MuiTextFieldProps } from '../../../types/interfaces';

export const MuiTextField = ({id,label,name,value,onChange,children,select = false,...props}:MuiTextFieldProps) => {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      value={value}
      variant='outlined'
      onChange={onChange}
      select={select}
      {...props}
    >
      {children}
    </TextField>
  )
}
