package com.neuedu.propertyMgr.model;

import java.util.Date;

public class Fee {
    private Integer id;

    private String owner;

    private Double peoperty;

    private Integer peoType;

    private Double repair;

    private Integer repairType;

    private Double parking;

    private Integer parkType;

    private Double other;

    private Double all;

    private Double overage;

    private Date lastTime;

    private Date thisTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner == null ? null : owner.trim();
    }

    public Double getPeoperty() {
        return peoperty;
    }

    public void setPeoperty(Double peoperty) {
        this.peoperty = peoperty;
    }

    public Integer getPeoType() {
        return peoType;
    }

    public void setPeoType(Integer peoType) {
        this.peoType = peoType;
    }

    public Double getRepair() {
        return repair;
    }

    public void setRepair(Double repair) {
        this.repair = repair;
    }

    public Integer getRepairType() {
        return repairType;
    }

    public void setRepairType(Integer repairType) {
        this.repairType = repairType;
    }

    public Double getParking() {
        return parking;
    }

    public void setParking(Double parking) {
        this.parking = parking;
    }

    public Integer getParkType() {
        return parkType;
    }

    public void setParkType(Integer parkType) {
        this.parkType = parkType;
    }

    public Double getOther() {
        return other;
    }

    public void setOther(Double other) {
        this.other = other;
    }

    public Double getAll() {
        return all;
    }

    public void setAll(Double all) {
        this.all = all;
    }

    public Double getOverage() {
        return overage;
    }

    public void setOverage(Double overage) {
        this.overage = overage;
    }

    public Date getLastTime() {
        return lastTime;
    }

    public void setLastTime(Date lastTime) {
        this.lastTime = lastTime;
    }

    public Date getThisTime() {
        return thisTime;
    }

    public void setThisTime(Date thisTime) {
        this.thisTime = thisTime;
    }
}