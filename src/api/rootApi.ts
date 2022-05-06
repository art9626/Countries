import axios from "axios";

type FieldsType = 'flags' | 'capital' | 'border' | 'name' | 'population' | 'region' | 'alpha3Code';

export const instance = axios.create({
  baseURL: 'https://restcountries.com/v2/',
});


export const countriesApi = {
  loadCountries(fields: FieldsType[]) {
    return instance.get('all', { params: { fields: fields.join(',') } }).then((res) => res.data);
  },
}

export const detailsApi = {
  loadCountryData(name: string) {
    return instance.get(`name/${name}`).then((res) => res.data[0]);
  },
  getDetailsData(name: string, fields: FieldsType[]) {
    return Promise.all([
      this.loadCountryData(name),
      countriesApi.loadCountries(fields),
    ])
  }
}
