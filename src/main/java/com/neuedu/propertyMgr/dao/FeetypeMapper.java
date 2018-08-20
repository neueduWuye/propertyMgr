package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Feetype;

public interface FeetypeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Feetype record);

    int insertSelective(Feetype record);

    Feetype selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Feetype record);

    int updateByPrimaryKey(Feetype record);
}