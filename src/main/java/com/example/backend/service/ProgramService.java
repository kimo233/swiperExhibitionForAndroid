package com.example.backend.service;

import com.example.backend.model.Program;
import java.util.List;

public interface ProgramService {
    List<Program> findAllProgram();

    Program findProgramById(int id);

    int add(Program program);

    int update(Program program);

    int delete(int id);
}
