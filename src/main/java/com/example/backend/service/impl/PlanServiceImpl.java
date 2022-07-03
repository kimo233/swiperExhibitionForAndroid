package com.example.backend.service.impl;

import com.example.backend.mapper.PlanMapper;
import com.example.backend.model.Plan;
import com.example.backend.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {
    @Autowired
    private PlanMapper PlanMapper;

    @Override
    public List<Plan> findAllPlan() {
        return PlanMapper.findAllPlan();
    }

    @Override
    public Plan findPlanById(int id) {
        return PlanMapper.findPlanById(id);
    }

    @Override
    public int add(Plan plan) {
        return PlanMapper.add(plan);
    }

    @Override
    public int delete(int id) {
        return PlanMapper.delete(id);
    }

    @Override
    public int update(Plan plan) {
        return PlanMapper.update(plan);
    }

}
