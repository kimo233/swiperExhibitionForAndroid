package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/add")
    public int addUser(User user) {
        System.out.println("开始新增...");
        return userService.add(user);
    }

    @GetMapping(value = "/update")
    public int updateUser(User user) {
        System.out.println("开始更新...");
        return userService.update(user);
    }

    @GetMapping(value = "/delete")
    public int delete(@RequestParam(value = "userid", required = true) int userId) {
        System.out.println("开始删除...");
        return userService.delete(userId);
    }

    @GetMapping(value = "/select")
    public User findById(@RequestParam(value = "userid", required = true) int userId) {
        System.out.println("开始查询...");
        return userService.findUserById(userId);
    }

    @GetMapping(value = "/getAll")
    public List<User> findAll() {
        System.out.println("开始查询所有数据...");
        return userService.findAllUsers();
    }


}
