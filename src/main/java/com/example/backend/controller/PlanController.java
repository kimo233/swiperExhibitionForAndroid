package com.example.backend.controller;

import com.example.backend.model.Plan;
import com.example.backend.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/plan")
public class PlanController {
    @Autowired
    private PlanService planService;

    @GetMapping(value = "/add")
    public int addUser(Plan plan) {
        System.out.println("开始新增...");
        return planService.add(plan);
    }

    @GetMapping(value = "/update")
    public int updateUser(Plan plan) {
        System.out.println("开始更新...");
        return planService.update(plan);
    }

    @GetMapping(value = "/delete")
    public int delete(@RequestParam(value = "planid", required = true) int planid) {
        System.out.println("开始删除...");
        return planService.delete(planid);
    }

    @GetMapping(value = "/select")
    public Plan findById(@RequestParam(value = "planid", required = true) int planid) {
        System.out.println("开始查询...");
        return planService.findPlanById(planid);
    }

    @GetMapping(value = "/getAll")
    public List<Plan> findAll() {
        System.out.println("开始查询所有数据...");
        return planService.findAllPlan();
    }
}
