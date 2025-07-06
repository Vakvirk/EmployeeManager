package com.blew.employee_manager.mapper;

import org.springframework.stereotype.Component;

import com.blew.employee_manager.dto.employee.UpdateEmployeeDTO;
import com.blew.employee_manager.model.Employee;

@Component
public class UpdateEmployeeMapper {
    public void updateEmployeeFromDTO(UpdateEmployeeDTO dto, Employee employee) {
        employee.setName(dto.name());
        employee.setEmail(dto.email());
        employee.setJobTitle(dto.jobTitle());
        employee.setPhone(dto.phone());
        employee.setImageUrl(dto.imageUrl());
    }
}
