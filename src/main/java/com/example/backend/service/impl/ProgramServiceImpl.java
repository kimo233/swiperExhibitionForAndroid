package com.example.backend.service.impl;

import com.example.backend.mapper.ProgramMapper;
import com.example.backend.model.Program;
import com.example.backend.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProgramServiceImpl implements ProgramService {
    @Autowired
    private ProgramMapper ProgramMapper;

    @Override
    public List<Program> findAllProgram() {
        return ProgramMapper.findAllProgram();
    }

    @Override
    public Program findProgramById(int id) {
        return ProgramMapper.findProgramById(id);
    }

    @Override
    public int add(Program program) {
        return ProgramMapper.add(program);
    }

    @Override
    public int delete(int id) {
        return ProgramMapper.delete(id);
    }

    @Override
    public int update(Program program) {
        return ProgramMapper.update(program);
    }
}
