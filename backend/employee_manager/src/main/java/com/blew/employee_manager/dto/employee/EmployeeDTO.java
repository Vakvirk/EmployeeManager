package com.blew.employee_manager.dto.employee;

public record EmployeeDTO(
                Long id,
                String name,
                String email,
                String jobTitle,
                String phone,
                String imageUrl,
                String employeeCode) {

}
