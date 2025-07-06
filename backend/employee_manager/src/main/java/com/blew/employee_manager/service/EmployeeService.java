package com.blew.employee_manager.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.blew.employee_manager.dto.employee.CreateEmployeeDTO;
import com.blew.employee_manager.dto.employee.EmployeeDTO;
import com.blew.employee_manager.dto.employee.UpdateEmployeeDTO;
import com.blew.employee_manager.mapper.CreateEmployeeMapper;
import com.blew.employee_manager.mapper.EmployeeDTOMapper;
import com.blew.employee_manager.mapper.UpdateEmployeeMapper;
import com.blew.employee_manager.model.Employee;
import com.blew.employee_manager.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;

@Component
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final CreateEmployeeMapper createEmployeeMapper;
    private final EmployeeDTOMapper employeeDTOMapper;
    private final UpdateEmployeeMapper updateEmployeeMapper;

    public EmployeeService(EmployeeRepository employeeRepository, CreateEmployeeMapper createEmployeeMapper,
            EmployeeDTOMapper employeeDTOMapper, UpdateEmployeeMapper updateEmployeeMapper) {
        this.employeeRepository = employeeRepository;
        this.createEmployeeMapper = createEmployeeMapper;
        this.employeeDTOMapper = employeeDTOMapper;
        this.updateEmployeeMapper = updateEmployeeMapper;
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

    public Employee updateEmployee(UpdateEmployeeDTO dto) {
        Employee employee = employeeRepository.findById(dto.id())
                .orElseThrow(() -> new EntityNotFoundException("Nie znaleziono pracownika z id " + dto.id()));
        updateEmployeeMapper.updateEmployeeFromDTO(dto, employee);
        employeeRepository.save(employee);
        return employee;
    }

    public void deleteEmployee(Long id) {
        if (!employeeRepository.existsById(id)) {
            throw new EntityNotFoundException("Nie znaleziono pracownika z id " + id);
        }
        employeeRepository.deleteById(id);
    }

}
