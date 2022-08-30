import { countryModel, districtModel, provinceModel } from './interface';
import { apiStore } from 'store/storeApi';

const LocationApiStore = apiStore.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query<countryModel[], void>({
      query: () => 'country-options',
      transformResponse: (response: Promise<countryModel[]>) => {
        return response || [];
      },
      keepUnusedDataFor: 5,
    }),
    getProvince: builder.mutation<provinceModel[], number | string>({
      query: (id) => {
        return {
          url: 'province-options',
          method: 'GET',
          params: { country_id: id },
        };
      },
    }),
    getProvinceAll: builder.query<provinceModel[], void>({
      query: () => 'province-options',
      keepUnusedDataFor: 5,
    }),

    getDistrict: builder.mutation<districtModel[], number | string>({
      query: (id) => {
        return {
          url: 'district-options',
          method: 'GET',
          params: { province_id: id },
        };
      },
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map((item) => ({ type: 'district', id: item.id } as const)),
      //         { type: 'district', id: 'LIST_DISTRICT' },
      //       ]
      //     : [{ type: 'district', id: 'LIST_DISTRICT' }],
      transformResponse: (response: Promise<districtModel[]>) => {
        return response || [];
      },
    }),
  }),
});
export const { useGetCountryQuery, useGetDistrictMutation, useGetProvinceMutation, useGetProvinceAllQuery } =
  LocationApiStore;
export default LocationApiStore;
