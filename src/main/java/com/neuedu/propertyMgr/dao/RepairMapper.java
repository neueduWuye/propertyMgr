package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Repair;

public interface RepairMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Repair record);

    int insertSelective(Repair record);

    Repair selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Repair record);

    int updateByPrimaryKey(Repair record);
}