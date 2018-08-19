package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.pojo.Complaint;

public interface ComplaintMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Complaint record);

    int insertSelective(Complaint record);

    Complaint selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Complaint record);

    int updateByPrimaryKey(Complaint record);
}