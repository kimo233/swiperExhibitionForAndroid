package com.example.backend.service.impl;

import com.example.backend.mapper.EquipmentMapper;
import com.example.backend.model.Equipment;
import com.example.backend.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {
    @Autowired
    private EquipmentMapper EquipmentMapper;

    @Override
    public List<Equipment> findAllEquipment() {
        return EquipmentMapper.findAllEquipment();
    }

    @Override
    public Equipment findEquipmentById(int id) {
        return EquipmentMapper.findEquipmentById(id);
    }

    @Override
    public int add(Equipment equipment) {
        return EquipmentMapper.add(equipment);
    }

    @Override
    public int delete(int id) {
        return EquipmentMapper.delete(id);
    }

    @Override
    public int update(Equipment equipment) {
        return EquipmentMapper.update(equipment);
    }
}
