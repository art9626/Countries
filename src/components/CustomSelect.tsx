import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Select, { OnChangeValue, StylesConfig } from 'react-select';
import { SearchParamsType } from '../pages/MainPage';



type OptionType = {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];



const customStyles: StylesConfig<OptionType> = {
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    backgroundColor: isSelected ? undefined : isFocused ? undefined : 'var(--colors-ui-base)',
    fontSize: 'var(--fs-md)',
    color: 'var(--colors-text)',
    cursor: 'pointer',
    ':active': {
      backgroundColor: undefined,
    },
  }),
  control: (styles) => ({
    ...styles,
    width: 250,
    minHeight: 50,
    border: 'none',
    backgroundColor: 'var(--colors-ui-base)',
    fontSize: 'var(--fs-md)',
    cursor: 'pointer',
    boxShadow: 'var(--shadow)',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'var(--colors-text)',
  }),
  menu: (styles) => ({
    ...styles,
    width: 250,
    backgroundColor: 'var(--colors-ui-base)',
    boxShadow: 'var(--shadow)',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'var(--colors-text)',
    transition: 'all 0.2s',
    ":hover": {
      opacity: 0.5,
    },
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    ":hover": {
      color: 'red',
    },
  }),
}




const CustomSelect: React.FC = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterSearch = searchParams.get('search');
  const currentFilterRegion = searchParams.get('region');


  const handleChange = (
    newValue: OnChangeValue<OptionType, false>,
  ) => {
    let newFilterRegion: string;
    if (!newValue) {
      newFilterRegion = '';
    } else {
      newFilterRegion = newValue.value;
    }

    let newSearchParams: SearchParamsType = {};
    if (newFilterRegion) {
      newSearchParams.region = newFilterRegion;
    }
    if (currentFilterSearch) {
      newSearchParams.search = currentFilterSearch;
    }

    setSearchParams(newSearchParams);
  };

  const currentValue = options.filter((item) => item.value === currentFilterRegion)

  return (
    <Select
      placeholder='Filter by Region'
      styles={customStyles}
      options={options}
      onChange={handleChange}
      isClearable
      isSearchable={false}
      isMulti={false}
      value={currentValue}
    />
  );
});

export default CustomSelect;
