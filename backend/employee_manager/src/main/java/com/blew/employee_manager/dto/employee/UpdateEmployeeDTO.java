package com.blew.employee_manager.dto.employee;

public record UpdateEmployeeDTO(
        Long id,
        String name,
        String email,
        String jobTitle,
        String phone,
        String imageUrl) {
}
