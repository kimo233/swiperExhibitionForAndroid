package com.example.backend.service;

import com.example.backend.model.Equipment;

import java.util.List;

public interface EquipmentService {
    List<Equipment> findAllEquipment();

    Equipment findEquipmentById(int id);

    int add(Equipment equipment);

    int update(Equipment equipment);

    int delete(int id);
}
