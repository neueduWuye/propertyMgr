package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.model.Village;
import com.neuedu.propertyMgr.model.VillageExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface VillageMapper {
    int countByExample(VillageExample example);

    int deleteByExample(VillageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Village record);

    int insertSelective(Village record);

    List<Village> selectByExample(VillageExample example);

    Village selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Village record, @Param("example") VillageExample example);

    int updateByExample(@Param("record") Village record, @Param("example") VillageExample example);

    int updateByPrimaryKeySelective(Village record);

    int updateByPrimaryKey(Village record);

	Village selectByName(String name);
}