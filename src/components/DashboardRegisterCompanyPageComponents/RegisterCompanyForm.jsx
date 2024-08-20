import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { getToken } from "../../utils/Utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const createCompanySchema = Yup.object().shape({
  companyName: Yup.string().required("Şirket adı alanı boş geçilemez!"),
  companyEmail: Yup.string()
    .email("Geçersiz Email adresi!")
    .required("Şirket email alanı boş geçilemez!"),
  companyPhoneNumber: Yup.string()
    .required("Şirket telefon numarası alanı boş geçilemez!")
    .min(10, "Şirket telefon numarası çok kısa!")
    .max(15, "Şirket telefon numarası çok uzun!"),
  companyLogoUrl: Yup.string().required("Şirket Logo URL alanı boş geçilemez!"),
  createAddressDTO: Yup.object().shape({
    streetAddress: Yup.string().required("Adres alanı boş geçilemez!"),
    postalCode: Yup.string().required("Posta kodu alanı boş geçilemez!"),
    city: Yup.string().required("Şehir alanı boş geçilemez!"),
    state: Yup.string().required("İlçe alanı boş geçilemez!"),
    country: Yup.string().required("Ülke alanı boş geçilemez!"),
  }),
});

function RegisterCompanyForm() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = getToken();
  const handleRegisterCompany = (values) => {
    console.log(values);
    axios
      .post(`${apiBaseUrl}/Company`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 201) toast.success("Şirket başarıyla kaydedildi.");
        navigate("/dashboard");
        console.log(res);
      })
      .catch(() => {
        toast.error("Bir hata oluştu.");
      });
  };

  return (
    <div className=" flex flex-col col-span-full  sm:col-span-12 xl:col-span-10 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yeni Şirket Kaydı
        </h2>
      </header>

      <div className="flex flex-col grow justify-center">
        <div className="flex flex-row flex-wrap grow items-center px-5 py-4 pb-2">
          <Formik
            initialValues={{
              companyName: "",
              companyEmail: "",
              companyPhoneNumber: "",
              companyLogoUrl: "",
              createAddressDTO: {
                streetAddress: "",
                postalCode: "",
                city: "",
                state: "",
                country: "",
              },
            }}
            onSubmit={(values) => handleRegisterCompany(values)}
            validationSchema={createCompanySchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <>
                <TextField
                  variant="outlined"
                  placeholder="Şirket Adı"
                  name="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                  helperText={touched.companyName && errors.companyName}
                  error={touched.companyName && Boolean(errors.companyName)}
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Şirket Email Adresi"
                  type="email"
                  name="companyEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyEmail}
                  helperText={touched.companyEmail && errors.companyEmail}
                  error={touched.companyEmail && Boolean(errors.companyEmail)}
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Şirket Telefon Numarası"
                  type="tel"
                  name="companyPhoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyPhoneNumber}
                  helperText={
                    touched.companyPhoneNumber && errors.companyPhoneNumber
                  }
                  error={
                    touched.companyPhoneNumber &&
                    Boolean(errors.companyPhoneNumber)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Şirket Logo URL"
                  name="companyLogoUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyLogoUrl}
                  helperText={touched.companyLogoUrl && errors.companyLogoUrl}
                  error={
                    touched.companyLogoUrl && Boolean(errors.companyLogoUrl)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Adres"
                  name="createAddressDTO.streetAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.createAddressDTO.streetAddress}
                  helperText={
                    touched.createAddressDTO?.streetAddress &&
                    errors.createAddressDTO?.streetAddress
                  }
                  error={
                    touched.createAddressDTO?.streetAddress &&
                    Boolean(errors.createAddressDTO?.streetAddress)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Posta Kodu"
                  name="createAddressDTO.postalCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.createAddressDTO.postalCode}
                  helperText={
                    touched.createAddressDTO?.postalCode &&
                    errors.createAddressDTO?.postalCode
                  }
                  error={
                    touched.createAddressDTO?.postalCode &&
                    Boolean(errors.createAddressDTO?.postalCode)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Şehir"
                  name="createAddressDTO.city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.createAddressDTO.city}
                  helperText={
                    touched.createAddressDTO?.city &&
                    errors.createAddressDTO?.city
                  }
                  error={
                    touched.createAddressDTO?.city &&
                    Boolean(errors.createAddressDTO?.city)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Eyalet"
                  name="createAddressDTO.state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.createAddressDTO.state}
                  helperText={
                    touched.createAddressDTO?.state &&
                    errors.createAddressDTO?.state
                  }
                  error={
                    touched.createAddressDTO?.state &&
                    Boolean(errors.createAddressDTO?.state)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Ülke"
                  name="createAddressDTO.country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.createAddressDTO.country}
                  helperText={
                    touched.createAddressDTO?.country &&
                    errors.createAddressDTO?.country
                  }
                  error={
                    touched.createAddressDTO?.country &&
                    Boolean(errors.createAddressDTO?.country)
                  }
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />

                <Button
                  variant="outlined"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="mt-5 text-base tracking-wide font-semibold bg-primary hover:bg-primaryHover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Kayıt Et</span>
                </Button>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterCompanyForm;
