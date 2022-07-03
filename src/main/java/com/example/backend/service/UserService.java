package com.example.backend.service;

import com.example.backend.model.User;
import java.util.List;

public interface UserService {
    List<User> findAllUsers();

    User findUserById(int id);

    int add(User user);

    int update(User user);

    int delete(int id);

    User login(String username, String password);

    int modify(String username,String newpwd);
}
