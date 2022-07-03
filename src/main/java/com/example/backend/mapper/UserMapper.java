package com.example.backend.mapper;

import com.example.backend.model.User;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select * from User")
    List<User> findAllUsers();

    @Select("select * from User where UserId=#{id}")
    User findUserById(int id);

    @Insert("insert into User (" +
            "UserName,PassWord,UserOrgan,UserChar,UserSituation,UserRealName,UserEmail,UserPhone,IsAdmin) " +
            "values (#{username},#{password},#{userorgan},#{userchar},#{usersituation},#{userrealname},#{useremail},#{userphone},#{isadmin})")
    int add(User user);

    @Update("update User set UserName=#{username},PassWord=#{password} where UserId=#{userid}")
    int update(User user);

    @Delete("delete from User where UserId=#{id}")
    int delete(int id);

    @Select("select * from User where UserName=#{username} and PassWord=#{password}")
    User login(String username,String password);

    @Update("update User set PassWord=#{newpwd} where UserName=#{username}")
    int modify(String username,String newpwd);

}