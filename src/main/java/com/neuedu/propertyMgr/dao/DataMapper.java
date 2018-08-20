package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Data;

public interface DataMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Data record);

    int insertSelective(Data record);

    Data selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Data record);

    int updateByPrimaryKey(Data record);
}