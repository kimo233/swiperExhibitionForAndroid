package com.example.backend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.backend.mapper")
public class AssistantApplication {
    public static void main(String[] args) {
        SpringApplication.run(AssistantApplication.class, args);
    }
}
