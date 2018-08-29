package com.neuedu.propertyMgr.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.neuedu.propertyMgr.pojo.Owner;


public interface OwnerMapper {
	Owner getOwnerByNamePwd(@Param(value="name") String name,@Param(value="pwd") String pwd);
	
    int deleteByPrimaryKey(Integer id);

    int insert(Owner record);

    int insertSelective(Owner record);
    
    List<Owner> getAllOwner();

    Owner selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Owner record);

    int updateByPrimaryKey(Owner record);
    
    /**
	 * 统计记录条数
	 */
	int getCount();
	List<Owner> getUserTypeByWhere(Map<String, Object> where);
	
	/*
     * 通过姓名找业主
     */
    Owner getOwnerByName(String name);
    
    /*
     * 通过房号找业主
     */
    Owner getOwnerByNumber(String number);

}