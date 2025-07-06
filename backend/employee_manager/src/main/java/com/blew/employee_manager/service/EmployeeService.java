package com.blew.employee_manager.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.blew.employee_manager.dto.employee.CreateEmployeeDTO;
import com.blew.employee_manager.dto.employee.EmployeeDTO;
import com.blew.employee_manager.mapper.CreateEmployeeMapper;
import com.blew.employee_manager.mapper.EmployeeDTOMapper;
import com.blew.employee_manager.model.Employee;
import com.blew.employee_manager.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;

@Component
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final CreateEmployeeMapper createEmployeeMapper;
    private final EmployeeDTOMapper employeeDTOMapper;

    public EmployeeService(EmployeeRepository employeeRepository, CreateEmployeeMapper createEmployeeMapper,
            EmployeeDTOMapper employeeDTOMapper) {
        this.employeeRepository = employeeRepository;
        this.createEmployeeMapper = createEmployeeMapper;
        this.employeeDTOMapper = employeeDTOMapper;
    }

    public Employee createEmployee(CreateEmployeeDTO dto) {
        Employee employee = createEmployeeMapper.apply(dto);
        return employeeRepository.save(employee);
    }

    public EmployeeDTO getEmployeeByID(Long id) {
        EmployeeDTO dto = employeeRepository.findById(id).map(employeeDTOMapper)
                .orElseThrow(() -> new EntityNotFoundException("Nie znaleziono pracownika z id " + id));
        return dto;

    }

    public List<EmployeeDTO> getEmployees() {
        List<EmployeeDTO> dtos = employeeRepository.findAll().stream().map(employeeDTOMapper).toList();
        return dtos;
    }

}
