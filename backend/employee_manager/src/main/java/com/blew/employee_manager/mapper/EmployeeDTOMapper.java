package com.blew.employee_manager.mapper;

import java.util.function.Function;

import org.springframework.stereotype.Service;

import com.blew.employee_manager.dto.employee.EmployeeDTO;
import com.blew.employee_manager.model.Employee;

@Service
public class EmployeeDTOMapper implements Function<Employee, EmployeeDTO> {
    @Override
    public EmployeeDTO apply(Employee employee) {
        return new EmployeeDTO(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getJobTitle(),
                employee.getPhone(),
                employee.getImageUrl(),
                employee.getEmployeeCode());
    }
}
