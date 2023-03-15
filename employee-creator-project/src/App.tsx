import "./App.module.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import EmployeeListPage from "./containers/EmployeeListPage/EmployeeListPage";
import CreateEmployeePage from "./containers/CreateEmployeePage/CreateEmployeePage";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/all-employees" element={<EmployeeListPage />}></Route>
            <Route
              path="/add-employee"
              element={<CreateEmployeePage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
