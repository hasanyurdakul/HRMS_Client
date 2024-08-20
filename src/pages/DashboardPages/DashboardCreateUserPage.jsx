import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getRole, getToken } from "../../utils/Utils";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AdminCreateUserForm from "../../components/DashboardCreateUserPageComponents/AdminCreateUserForm";
import { useSelector } from "react-redux";
import OwnerAndManagerCreateUserForm from "../../components/DashboardCreateUserPageComponents/OwnerAndManagerCreateUserForm";

function DashboardCreateUserPage() {
  const userRole = useSelector((state) => state.user.role);
  return (
    <>
      {userRole === "Admin" ? (
        <AdminCreateUserForm />
      ) : (
        <OwnerAndManagerCreateUserForm />
      )}
    </>
  );
}

export default DashboardCreateUserPage;
