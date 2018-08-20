package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Parkspace;

public interface ParkspaceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Parkspace record);

    int insertSelective(Parkspace record);

    Parkspace selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Parkspace record);

    int updateByPrimaryKey(Parkspace record);
}