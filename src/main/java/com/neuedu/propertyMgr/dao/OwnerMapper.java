package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Owner;

public interface OwnerMapper {
	Owner getOwnerByNamePwd(Owner owner);
	
    int deleteByPrimaryKey(Integer id);

    int insert(Owner record);

    int insertSelective(Owner record);

    Owner selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Owner record);

    int updateByPrimaryKey(Owner record);
}