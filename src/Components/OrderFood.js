import React from 'react';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, Typography } from '@mui/material';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';

export default function OrderFood() {
  return (
    <div className="orderFood">
      <div class="fav-food"><h1>ORDER YOUR FAVOURITE FOOD</h1></div>
      <div class="query"><p>For any query please call</p></div>
      
      <div class="firstNameLabel"> 
        <label className="fn">First Name</label>
        <input className="fntext" type="text" />
      </div>
    
      <div>
        <label class="lastName">Last Name</label>
        <input class="lntext" type="text" />
      </div>
     
      <div>
        <label className="email">Email</label>
        <input clasName="emailtext" type="text" />
      </div>

      {/* drop down for selecting favourite Food */}
      <div>
      <label className="food">Choose a food:</label>
  <select className="dropdownfoodlist" id="cars">
    <option value="cb">Chicken Biryani</option>
    <option value="p">Pizza</option>
    <option value="b">Burger</option>
    <option value="fs">Fruits Salad</option>
  </select>


      </div>
      <div>
      <Box>
        {/* <Typography variant ="h3">Order Time</Typography> */}
        <label className="ot">Order Time</label>
        {/* <label>Order Time</label> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DatePicker label="select date"></DatePicker> */}
          <DateTimePicker label="select date and time"></DateTimePicker>
        </LocalizationProvider>
      </Box>
     

      </div>
   
     
      {/* date and time  */}
    </div>
  );
}
