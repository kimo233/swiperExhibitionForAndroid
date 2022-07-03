package com.example.backend.controller;

import com.example.backend.model.Equipment;
import com.example.backend.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {
    @Autowired
    private EquipmentService equipmentService;

    @GetMapping(value = "/add")
    public int addUser(Equipment equipment) {
        System.out.println("开始新增...");
        return equipmentService.add(equipment);
    }

    @GetMapping(value = "/update")
    public int updateUser(Equipment equipment) {
        System.out.println("开始更新...");
        return equipmentService.update(equipment);
    }

    @GetMapping(value = "/delete")
    public int delete(@RequestParam(value = "equipmentid", required = true) int equipmentid) {
        System.out.println("开始删除...");
        return equipmentService.delete(equipmentid);
    }

    @GetMapping(value = "/select")
    public Equipment findById(@RequestParam(value = "equipmentid", required = true) int equipmentid) {
        System.out.println("开始查询...");
        return equipmentService.findEquipmentById(equipmentid);
    }

    @GetMapping(value = "/getAll")
    public List<Equipment> findAll() {
        System.out.println("开始查询所有数据...");
        return equipmentService.findAllEquipment();
    }
}
