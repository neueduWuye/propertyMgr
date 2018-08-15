package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.model.Owner;
import com.neuedu.propertyMgr.model.OwnerExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface OwnerMapper {
    int countByExample(OwnerExample example);

    int deleteByExample(OwnerExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Owner record);

    int insertSelective(Owner record);

    List<Owner> selectByExample(OwnerExample example);
    
    List<Owner> selectAllOwner();//查所有业主
    Owner selectByNamePwd(@Param("name")String name,@Param("pwd")String pwd);//通过账号密码业主登录
    Owner selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Owner record, @Param("example") OwnerExample example);

    int updateByExample(@Param("record") Owner record, @Param("example") OwnerExample example);

    int updateByPrimaryKeySelective(Owner record);

    int updateByPrimaryKey(Owner record);
}