using Integration.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Integration.services
{
    public interface EmployeeData
    {
    Task<List<Employee>> GetEmployeesAsync();
    Task<Employee> GetEmployeeAsync(int id);
    Task<Employee> InsertEmployeeAsync(Employee employee);
    Task<bool> DeleteEmployeeAsync(int id);
    Task<bool> UpdateEmployeeAsync(Employee employee);
  }
}
