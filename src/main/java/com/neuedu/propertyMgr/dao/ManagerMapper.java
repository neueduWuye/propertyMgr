package com.neuedu.propertyMgr.dao;

import org.apache.ibatis.annotations.Param;

import com.neuedu.propertyMgr.pojo.Manager;
import com.neuedu.propertyMgr.pojo.Owner;

public interface ManagerMapper {
    int deleteByPrimaryKey(Integer id);
    
    int deleteByNumber(String number); //通过房间号删除用户

    int insert(Manager record);

    int insertSelective(Manager record);

    Manager selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Manager record);

    int updateByPrimaryKey(Manager record);
    
    Manager getManagerByNmaePwd(@Param(value = "name") String name,@Param(value = "pwd") String pwd);
    
    
}