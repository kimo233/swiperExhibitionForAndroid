package com.example.backend.service;

import com.example.backend.model.Plan;
import java.util.List;

public interface PlanService {
    List<Plan> findAllPlan();

    Plan findPlanById(int id);

    int add(Plan plan);

    int update(Plan plan);

    int delete(int id);
}
