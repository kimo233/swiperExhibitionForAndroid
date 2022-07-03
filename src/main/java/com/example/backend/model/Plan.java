package com.example.backend.model;

import java.util.Date;

public class Plan {
    private int planid;
    private String planname;
    private String stratrgy;
    private Date plandata;
    private Date plantime;
    private String plansync;
    private String plancontent;
    private int planauth;

    public int getPlanid() {
        return planid;
    }

    public void setPlanid(int planid) {
        this.planid = planid;
    }

    public String getPlanname() {
        return planname;
    }

    public void setPlanname(String planname) {
        this.planname = planname;
    }

    public String getStratrgy() {
        return stratrgy;
    }

    public void setStratrgy(String stratrgy) {
        this.stratrgy = stratrgy;
    }

    public Date getPlandata() {
        return plandata;
    }

    public void setPlandata(Date plandata) {
        this.plandata = plandata;
    }

    public Date getPlantime() {
        return plantime;
    }

    public void setPlantime(Date plantime) {
        this.plantime = plantime;
    }

    public String getPlansync() {
        return plansync;
    }

    public void setPlansync(String plansync) {
        this.plansync = plansync;
    }

    public String getPlancontent() {
        return plancontent;
    }

    public void setPlancontent(String plancontent) {
        this.plancontent = plancontent;
    }

    public int getPlanauth() {
        return planauth;
    }

    public void setPlanauth(int planauth) {
        this.planauth = planauth;
    }
}
