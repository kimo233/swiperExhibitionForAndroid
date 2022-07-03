package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/login")
    public User login(@RequestParam(value = "username", required = true)String username,
                      @RequestParam(value = "password", required = true)String password){
        System.out.println("开始登录...");
        return userService.login(username, password);
    }

    @GetMapping(value = "/modify")
    public int modify(@RequestParam(value = "username", required = true)String username,
                     @RequestParam(value = "newpwd", required = true)String newpwd){
        System.out.println("开始修改...");
        return userService.modify(username, newpwd);
    }
}
