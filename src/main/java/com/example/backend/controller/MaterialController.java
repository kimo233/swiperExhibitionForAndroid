package com.example.backend.controller;

import com.example.backend.model.Material;
import com.example.backend.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/material")
public class MaterialController {
    @Autowired
    private MaterialService materialService;

    @GetMapping(value = "/add")
    public int addUser(Material material) {
        System.out.println("开始新增...");
        return materialService.add(material);
    }

    @GetMapping(value = "/update")
    public int updateUser(Material material) {
        System.out.println("开始更新...");
        return materialService.update(material);
    }

    @GetMapping(value = "/delete")
    public int delete(@RequestParam(value = "materialid", required = true) int materialid) {
        System.out.println("开始删除...");
        return materialService.delete(materialid);
    }

    @GetMapping(value = "/select")
    public Material findById(@RequestParam(value = "userid", required = true) int userid) {
        System.out.println("开始查询...");
        return materialService.findMaterialByUserId(userid);
    }

    @GetMapping(value = "/getAll")
    public List<Material> findAll() {
        System.out.println("开始查询所有数据...");
        return materialService.findAllMaterial();
    }
}
