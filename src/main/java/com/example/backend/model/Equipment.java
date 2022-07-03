package com.example.backend.model;

public class Equipment {
    private int equipmentid;
    private String equipmentname;
    private String macaddress;
    private String currentplan;
    private int online;
    private String equipmentorgan;
    private String equipmentresolvingratio;
    private String equipmentgroup;
    private String materialname;

    public int getEquipmentid() {
        return equipmentid;
    }

    public void setEquipmentid(int equipmentid) {
        this.equipmentid = equipmentid;
    }

    public String getEquipmentname() {
        return equipmentname;
    }

    public void setEquipmentname(String equipmentname) {
        this.equipmentname = equipmentname;
    }

    public String getMacaddress() {
        return macaddress;
    }

    public void setMacaddress(String macaddress) {
        this.macaddress = macaddress;
    }

    public String getCurrentplan() {
        return currentplan;
    }

    public void setCurrentplan(String currentplan) {
        this.currentplan = currentplan;
    }

    public int getOnline() {
        return online;
    }

    public void setOnline(int online) {
        this.online = online;
    }

    public String getEquipmentorgan() {
        return equipmentorgan;
    }

    public void setEquipmentorgan(String equipmentorgan) {
        this.equipmentorgan = equipmentorgan;
    }

    public String getEquipmentresolvingratio() {
        return equipmentresolvingratio;
    }

    public void setEquipmentresolvingratio(String equipmentresolvingratio) {
        this.equipmentresolvingratio = equipmentresolvingratio;
    }

    public String getEquipmentgroup() {
        return equipmentgroup;
    }

    public void setEquipmentgroup(String equipmentgroup) {
        this.equipmentgroup = equipmentgroup;
    }

    public String getMaterialname() {
        return materialname;
    }

    public void setMaterialname(String materialname) {
        this.materialname = materialname;
    }
}
