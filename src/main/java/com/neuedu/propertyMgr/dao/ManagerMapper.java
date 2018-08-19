package com.neuedu.propertyMgr.dao;

import org.apache.ibatis.annotations.Param;

import com.neuedu.propertyMgr.pojo.Manager;

public interface ManagerMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Manager record);

    int insertSelective(Manager record);

    Manager selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Manager record);

    int updateByPrimaryKey(Manager record);
    
    Manager getManagerByNmaePwd( Manager manager);
}