package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Family;

public interface FamilyMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Family record);

    int insertSelective(Family record);

    Family selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Family record);

    int updateByPrimaryKey(Family record);
}