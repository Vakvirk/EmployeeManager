package com.blew.employee_manager.mapper;

import java.util.UUID;

import org.springframework.cglib.core.internal.Function;
import org.springframework.stereotype.Component;

import com.blew.employee_manager.dto.employee.CreateEmployeeDTO;
import com.blew.employee_manager.model.Employee;

@Component
public class CreateEmployeeMapper implements Function<CreateEmployeeDTO, Employee> {

    @Override
    public Employee apply(CreateEmployeeDTO dto) {
        Employee employee = new Employee();
        employee.setEmployeeCode(UUID.randomUUID().toString());
        employee.setName(dto.name());
        employee.setEmail(dto.email());
        employee.setJobTitle(dto.jobTitle());
        employee.setPhone(dto.phone());
        employee.setImageUrl(dto.imageUrl());
        return employee;
    }
}
