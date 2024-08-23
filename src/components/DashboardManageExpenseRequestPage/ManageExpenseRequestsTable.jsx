import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  CheckCircle,
  DoNotDisturb,
  Pending,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/Utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ManageExpenseRequestsTable() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const token = getToken();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [expenseRequests, setExpenseRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [
    expenseRequestsWithEmployeeNames,
    setExpenseRequestsWithEmployeeNames,
  ] = useState([]);

  const getIcon = (requestStatusId) => {
    switch (requestStatusId) {
      case 2:
        return (
          <CheckCircle className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-green-400  dark:bg-black" />
        );

      case 3:
        return (
          <DoNotDisturb className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-red-400  dark:bg-black" />
        );

      case 1:
        return (
          <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
        );

      default:
        return null;
    }
  };
  const getLeaveTypeName = (leaveTypeId) => {
    switch (leaveTypeId) {
      case 1:
        return "Sick Leave";

      case 2:
        return "Vacation Leave";

      case 3:
        return "Personal Leave";

      default:
        return null;
    }
  };
  useEffect(() => {
    if (expenseRequests.length > 0 && employees.length > 0) {
      const mappedRequests = expenseRequests.map((leaveRequest) => {
        const employee = employees.find(
          (emp) => emp.id === leaveRequest.employeeId
        );
        return {
          ...leaveRequest,
          employeeName: employee
            ? `${employee.firstName} ${employee.lastName}`
            : "Unknown Employee",
        };
      });
      setExpenseRequestsWithEmployeeNames(mappedRequests);
    }
  }, [expenseRequests, employees]);

  useEffect(() => {
    try {
      axios
        .get(`${apiBaseUrl}/Expense`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setExpenseRequests(res.data.$values);
        });
      axios
        .get(`${apiBaseUrl}/Employee`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setEmployees(res.data.$values));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleApproveExpenseRequest = async (expenseId) => {
    let requestObject = {
      id: expenseId,
      requestStatusId: 2,
    };
    console.log(requestObject);
    await axios
      .put(`${apiBaseUrl}/Expense/UpdateExpenseStatus`, requestObject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Masraf Talebi Başarıyla Reddedildi.");
          navigate(0);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRejectExpenseRequest = async (expenseId) => {
    let requestObject = {
      id: expenseId,
      requestStatusId: 3,
    };
    console.log(requestObject);
    await axios
      .put(`${apiBaseUrl}/Expense/UpdateExpenseStatus`, requestObject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Masraf Talebi Başarıyla Onaylandı");
          navigate(0);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex flex-col col-span-full  sm:col-span-12 xl:col-span-10 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Masraf Taleplerini Yönet
        </h2>
      </header>

      <div className="px-5 py-4 max-h-full">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer className="max-h-[36rem] md:max-h-[43rem]">
            <Table stickyHeader aria-label="sticky table">
              {/* Table Head  */}
              <TableHead>
                <TableRow>
                  <TableCell align={"left"} style={{ minWidth: 100 }}>
                    <span>Durum</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Talep Eden Personel</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Masraf Tarihi</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Açıklama</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Talep Tarihi</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>İşlemler</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* Table Body */}
              <TableBody>
                {expenseRequestsWithEmployeeNames.length > 0 &&
                  expenseRequestsWithEmployeeNames
                    .reverse()
                    .map((expense, index) => (
                      <TableRow hover role="checkbox" key={index} tabIndex={-1}>
                        <TableCell align={"left"}>
                          {getIcon(expense.requestStatusId)}
                        </TableCell>
                        <TableCell align={"left"}>
                          {expense.employeeName}
                        </TableCell>
                        <TableCell align={"left"}>
                          {expense.expenseDate
                            ? expense.expenseDate
                                .split("T")[0]
                                .replaceAll("-", "/")
                            : "Unknown"}{" "}
                        </TableCell>
                        <TableCell align={"left"}>
                          {expense.description ?? expense.description}
                        </TableCell>
                        <TableCell align={"left"}>
                          {expense.requestedDate
                            ? expense.requestedDate
                                .split("T")[0]
                                .replaceAll("-", "/")
                            : "Unknown"}
                        </TableCell>

                        <TableCell align={"left"}>
                          <IconButton
                            onClick={() =>
                              handleApproveExpenseRequest(expense.id)
                            }
                            aria-label="onayla"
                            className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-green-400  dark:bg-black"
                          >
                            <ThumbUp />
                          </IconButton>
                          <IconButton
                            onClick={() =>
                              handleRejectExpenseRequest(expense.id)
                            }
                            aria-label="reddet"
                            className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-red-400  dark:bg-black"
                          >
                            <ThumbDown />
                          </IconButton>{" "}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={100}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default ManageExpenseRequestsTable;
