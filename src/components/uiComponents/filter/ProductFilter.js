import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Slider } from "@mui/material";
import { FilterOptions } from "./ProductFilterMuiStyle";

const ProductFilter = () => {
  const size = ['XS', 'S', 'L', 'M', 'XL'];
  const age = ['0-2', '3-6', '6-10', '11-15']

  const [value, setValue] = useState(0); // Initial range values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography>FILTER BY</Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
        >
          <Typography>Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {age.map((value) => {
              return (
                <FormControlLabel control={<Checkbox />} label={`${value} years`} />
              )
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {size.map((value) => {
              return (
                <FormControlLabel control={<Checkbox />} label={value} />
              )
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
        >
          <Typography>Age</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {age.map((value) => {
              return (
                <FormControlLabel control={<Checkbox />} label={`${value} years`} />
              )
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
            />
            <Typography>{value} Rs</Typography>
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
        >
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {age.map((value) => {
              return (
                <FormControlLabel control={<Checkbox />} label={`${value} years`} />
              )
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  )

}

export default ProductFilter