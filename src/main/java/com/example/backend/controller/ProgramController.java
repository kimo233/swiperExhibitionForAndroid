package com.example.backend.controller;

import com.example.backend.model.Program;
import com.example.backend.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/program")
public class ProgramController {
    @Autowired
    private ProgramService programService;

    @GetMapping(value = "/add")
    public int addUser(Program program) {
        System.out.println("开始新增...");
        return programService.add(program);
    }

    @GetMapping(value = "/update")
    public int updateUser(Program program) {
        System.out.println("开始更新...");
        return programService.update(program);
    }

    @GetMapping(value = "/delete")
    public int delete(@RequestParam(value = "programid", required = true) int programid) {
        System.out.println("开始删除...");
        return programService.delete(programid);
    }

    @GetMapping(value = "/select")
    public Program findById(@RequestParam(value = "programid", required = true) int programid) {
        System.out.println("开始查询...");
        return programService.findProgramById(programid);
    }

    @GetMapping(value = "/getAll")
    public List<Program> findAll() {
        System.out.println("开始查询所有数据...");
        return programService.findAllProgram();
    }
}
