import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CompanyForm from "../components/Companies/CompanyForm";
import SearchBar from "../components/Companies/SearchBar";
import FilterDropdown from "../components/Companies/FilterDropdown";
import CompanyTable from "../components/Companies/CompanyTable";

function Companies() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const [companies, setCompanies] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  // Load companies from Local Storage when the page opens
  useEffect(() => {
    const savedCompanies = localStorage.getItem("companies");

    if (savedCompanies) {
      setCompanies(JSON.parse(savedCompanies));
    }
  }, []);

  // Save companies to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("companies", JSON.stringify(companies));
  }, [companies]);

  function addCompany() {
    if (company.trim() === "" || role.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    const newCompany = {
      company,
      role,
      status,
    };

    if (editIndex !== null) {
      const updatedCompanies = [...companies];
      updatedCompanies[editIndex] = newCompany;
      setCompanies(updatedCompanies);
      setEditIndex(null);
    } else {
      setCompanies([...companies, newCompany]);
    }

    setCompany("");
    setRole("");
    setStatus("Applied");
  }

  function deleteCompany(index) {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);

    // If the deleted company was being edited, reset the form
    if (editIndex === index) {
      setCompany("");
      setRole("");
      setStatus("Applied");
      setEditIndex(null);
    }
  }

  function editCompany(index) {
    setCompany(companies[index].company);
    setRole(companies[index].role);
    setStatus(companies[index].status);
    setEditIndex(index);
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Companies</h1>

        <p className="dashboard-subtitle">
          Manage all your job applications here.
        </p>

        <CompanyForm
          company={company}
          setCompany={setCompany}
          role={role}
          setRole={setRole}
          status={status}
          setStatus={setStatus}
          addCompany={addCompany}
          editIndex={editIndex}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterDropdown
          filter={filter}
          setFilter={setFilter}
        />

        <CompanyTable
          companies={companies}
          search={search}
          filter={filter}
          editCompany={editCompany}
          deleteCompany={deleteCompany}
        />
      </div>
    </>
  );
}

export default Companies;