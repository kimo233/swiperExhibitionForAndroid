package com.example.backend.model;

public class User {
    private int userid;
    private String username;
    private String password;
    private String userorgan;
    private String userchar;
    private int usersituation;
    private String userrealname;
    private String useremail;
    private String userphone;
    private int isadmin;

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserorgan() {
        return userorgan;
    }

    public void setUserorgan(String userorgan) {
        this.userorgan = userorgan;
    }

    public String getUserchar() {
        return userchar;
    }

    public void setUserchar(String userchar) {
        this.userchar = userchar;
    }

    public int getUsersituation() {
        return usersituation;
    }

    public void setUsersituation(int usersituation) {
        this.usersituation = usersituation;
    }

    public String getUserrealname() {
        return userrealname;
    }

    public void setUserrealname(String userrealname) {
        this.userrealname = userrealname;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUserphone() {
        return userphone;
    }

    public void setUserphone(String userphone) {
        this.userphone = userphone;
    }

    public int getIsadmin() {
        return isadmin;
    }

    public void setIsadmin(int isadmin) {
        this.isadmin = isadmin;
    }
}