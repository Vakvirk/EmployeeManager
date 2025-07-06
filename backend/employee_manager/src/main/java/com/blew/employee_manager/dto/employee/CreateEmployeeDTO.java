package com.blew.employee_manager.dto.employee;

public record CreateEmployeeDTO(
        String name,
        String email,
        String jobTitle,
        String phone,
        String imageUrl) {

}
