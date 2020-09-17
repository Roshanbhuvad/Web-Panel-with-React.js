 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import MenuItem from '@material-ui/core/MenuItem';
 
 const currencies = [
   {
     value: 'USD',
     label: '$',
     description: "US Dollar"
   },
   {
     value: 'EUR',
     label: '€',
     description: "European Euro"
   },
   {
     value: 'BTC',
     label: '฿',
     description: "BitCoin"
   },
   {
     value: 'JPY',
     label: '¥',
     description: "Japanese Yen"
   },
 ];
 
 const useStyles = makeStyles((theme) => ({
   root: {
     '& .MuiTextField-root': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));
 
 export default function MultilineTextFields() {
   const classes = useStyles();
   const [currency, setCurrency] = React.useState('EUR');
 
   const handleChange = (event) => {
     setCurrency(event.target.value);
   };
 
   return (
     <form className={classes.root} noValidate autoComplete="off">
       <div>
         <TextField
           id="standard-select-currency"
           select
           label="Select"
           value={currency}
           onChange={handleChange}
           helperText="Please select your currency"
         >
           {currencies.map((option) => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
         </TextField>
       </div>
       <div>
         {currencies.filter((item) => {
           if(currency === null) {
             return item
           } else if (item.value.includes(currency)){
             return item
           }
         }).map((item) => {
           return <p>{item.description}</p>
         })}
       </div>
     </form>
   );
 }