import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getRole, getToken } from "../../utils/Utils";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function OwnerAndManagerCreateUserForm() {
  const navigate = useNavigate();
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const userRole = getRole();
  let token = getToken();
  const user = useSelector((state) => state.user);

  const handleCreateUser = (values) => {
    let createUserObject = {
      ...values,
      companyId: user.companyId,
    };

    axios
      .post(`${apiBaseUrl}/Auth/createuser`, createUserObject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200)
          toast.success("Kullanıcı başarıyla oluşturuldu.");
        navigate("/dashboard");
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Bir hata oluştu.");
      });
  };

  return (
    <div className=" flex flex-col col-span-full  sm:col-span-12 xl:col-span-10 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          {userRole === "CompanyOwner" ? "Yönetici" : "Çalışan"} Kullanıcısı
          Oluştur
        </h2>
      </header>

      <div className="flex flex-col grow justify-center">
        <div className="flex flex-row flex-wrap grow items-center px-5 py-4 pb-2">
          <Formik
            initialValues={{
              username: "",
              email: "",
              companyId: "",
            }}
            onSubmit={(values) => handleCreateUser(values)}
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
                  placeholder="Kullanıcı Adı"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  helperText={touched.username && errors.username}
                  error={touched.username && Boolean(errors.username)}
                  className="w-full md:w-1/3 px-2 py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Kullanıcı Email Adresi"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
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

export default OwnerAndManagerCreateUserForm;
