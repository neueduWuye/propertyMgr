package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.model.Feetype;
import com.neuedu.propertyMgr.model.FeetypeExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FeetypeMapper {
    int countByExample(FeetypeExample example);

    int deleteByExample(FeetypeExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Feetype record);

    int insertSelective(Feetype record);

    List<Feetype> selectByExample(FeetypeExample example);

    Feetype selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Feetype record, @Param("example") FeetypeExample example);

    int updateByExample(@Param("record") Feetype record, @Param("example") FeetypeExample example);

    int updateByPrimaryKeySelective(Feetype record);

    int updateByPrimaryKey(Feetype record);
}