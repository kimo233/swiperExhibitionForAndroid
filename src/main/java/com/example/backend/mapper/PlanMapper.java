package com.example.backend.mapper;

import com.example.backend.model.Plan;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface PlanMapper {
    @Select("select * from Plan")
    List<Plan> findAllPlan();

    @Select("select * from Plan where PlanId=#{id}")
    Plan findPlanById(int id);

    @Insert("insert into Plan (PlanName,Stratrgy,PlanData,PlanTime,PlanSync,PlanContent,PlanAuth) " +
            "values (#{planname},#{stratrgy},#{plandata},#{plantime},#{plansync},#{plancontent},#{planauth},)")
    int add(Plan plan);

    @Update("update Plan set PlanName=#{planname} where PlanId=#{planid}")
    int update(Plan plan);

    @Delete("delete from Plan where PlanId=#{id}")
    int delete(int id);
}
