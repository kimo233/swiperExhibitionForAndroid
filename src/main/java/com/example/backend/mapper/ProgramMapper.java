package com.example.backend.mapper;

import com.example.backend.model.Program;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface ProgramMapper {
    @Select("select * from Program")
    List<Program> findAllProgram();

    @Select("select * from Program where ProgramId=#{id}")
    Program findProgramById(int id);

    @Insert("insert into Program (ProgramName,ProgramResolvingRatio,ProgramContent) " +
            "values (#{programname},#{programresolvingratio},#{programcontent})")
    int add(Program program);

    @Update("update Program set ProgramName=#{programname} where ProgramId=#{programid}")
    int update(Program program);

    @Delete("delete from Program where ProgramId=#{id}")
    int delete(int id);
}
