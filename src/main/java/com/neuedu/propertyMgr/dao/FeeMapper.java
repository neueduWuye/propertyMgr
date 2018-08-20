package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Fee;

public interface FeeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Fee record);

    int insertSelective(Fee record);

    Fee selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Fee record);

    int updateByPrimaryKey(Fee record);
}