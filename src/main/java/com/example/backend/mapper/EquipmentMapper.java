package com.example.backend.mapper;

import com.example.backend.model.Equipment;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface EquipmentMapper {
    @Select("select * from Equipment")
    List<Equipment> findAllEquipment();

    @Select("select * from Equipment where EquipmentId=#{id}")
    Equipment findEquipmentById(int id);

    @Insert("insert into Equipment (EquipmentName,MacAdress,CurrentPlan,Online,EquipmentOrgan,EquipmentResolvingRatio,EquipmentGroup,MaterialName) " +
            "values (#{equipmentname},#{macaddress},#{currentplan},#{online},#{equipmentorgan},#{equipmentresolvingratio},#{equipmentgroup},#{materialname})")
    int add(Equipment equipment);

    @Update("update Equipment set EquipmentName=#{equipmentname} where EquipmentId=#{equipmentid}")
    int update(Equipment equipment);

    @Delete("delete from Equipment where EquipmentId=#{id}")
    int delete(int id);
}
