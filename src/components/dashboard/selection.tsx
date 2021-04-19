import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';




import style from './selection.module.css'

export interface SelectionProps {

}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Selection: React.FC<SelectionProps> = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [ticker, setTicker] = React.useState('');

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleChange = (event: any) => {
    setTicker(event.target.value);
  };
  return (
    <div className={style.selectionWrapper}>

      <FormControl className={useStyles().formControl}>
        <InputLabel id="selectTickerLabel">Ticker</InputLabel>
        <Select

          labelId="selectTickerLabel"
          id="selectTicker"
          value={ticker}
          onChange={handleChange}
        >
          <MenuItem value={1}>Ticker1</MenuItem>
          <MenuItem value={2}>Ticker2</MenuItem>
          <MenuItem value={3}>Ticker3</MenuItem>
        </Select>
      </FormControl >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date from"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date to"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </div >
  )
}