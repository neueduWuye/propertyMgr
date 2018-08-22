package com.neuedu.propertyMgr.dao;

import org.apache.ibatis.annotations.Param;

import com.neuedu.propertyMgr.pojo.Owner;

public interface OwnerMapper {
	Owner getOwnerByNamePwd(@Param(value="name") String name,@Param(value="pwd") String pwd);
	
    int deleteByPrimaryKey(Integer id);

    int insert(Owner record);

    int insertSelective(Owner record);

    Owner selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Owner record);

    int updateByPrimaryKey(Owner record);
}