package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.VSillage;

public interface VSillageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(VSillage record);

    int insertSelective(VSillage record);

    VSillage selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(VSillage record);

    int updateByPrimaryKey(VSillage record);
}