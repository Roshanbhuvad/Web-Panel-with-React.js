 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import MenuItem from '@material-ui/core/MenuItem';
 
 const currencies = [
   {
     value: 'USD',
     label: '$',
     description: "The United States dollar is the official currency of the United States and its territories per the Coinage Act of 1792. One dollar is divided into 100 cents, or into 1000 mills for accounting and taxation purposes"
   },
   {
     value: 'EUR',
     label: '€',
     description: "The euro is the official currency of 19 of the 27 member states of the European Union. This group of states is known as the eurozone or euro area and includes about 343 million citizens as of 2019."
   },
   {
     value: 'BTC',
     label: '฿',
     description: "It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. ... Bitcoins are created as a reward for a process known as mining"
   },
   {
     value: 'JPY',
     label: '¥',
     description: "The yen is the official currency of Japan. It is the third most traded currency in the foreign exchange market after the United States dollar and the Euro. It is also widely used as a reserve currency after the U.S. dollar, the Euro, and the U.K. pound sterling."
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