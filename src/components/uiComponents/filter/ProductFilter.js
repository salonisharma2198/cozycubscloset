import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import FilterListIcon from '@mui/icons-material/FilterList';

const ProductFilter = () => {
  const filterOptions = {
    Gender: ["Boy", "Girl"],
    Age: ["0-6 months", "6-12 months", "1-2 years", "3 years & Above"],
    Occasion: [
      "Step Out",
      "Play",
      "At Home",
      "Weekend",
      "Celebrate",
      "Casual",
      "Party",
      "Essentials",
      "Festive",
    ],
    Price: ["Below 500 Rs", "500-900 Rs", "1000 Rs & Above"],
    Color: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
  };

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCheckboxChange = (category, option) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[category] || [];
      const newFilters = categoryFilters.includes(option)
        ? categoryFilters.filter((item) => item !== option)
        : [...categoryFilters, option];
      return { ...prev, [category]: newFilters };
    });
  };

  const sendFiltersToAPI = () => {
    console.log("Selected Filters:", selectedFilters);
    // API call can be made here 
  };

  const dropdownOptions = (label, options) => (
    <div>
      <Accordion key={label}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls={`${label}-content`}>
          <Typography>{label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={selectedFilters[label]?.includes(option) || false}
                    onChange={() => handleCheckboxChange(label, option)}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  return (
    <div>
       <Button fullWidth variant="text" startIcon={<FilterListIcon />} color="secondary" onClick={sendFiltersToAPI}>
        Apply Filter
      </Button>
      {Object.entries(filterOptions).map(([label, options]) => dropdownOptions(label, options))}
    </div>
  );
};

export default ProductFilter;
