package com.neuedu.propertyMgr.dao;

import com.neuedu.propertyMgr.model.Parkspace;
import com.neuedu.propertyMgr.model.ParkspaceExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ParkspaceMapper {
    int countByExample(ParkspaceExample example);

    int deleteByExample(ParkspaceExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Parkspace record);

    int insertSelective(Parkspace record);

    List<Parkspace> selectByExample(ParkspaceExample example);

    Parkspace selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Parkspace record, @Param("example") ParkspaceExample example);

    int updateByExample(@Param("record") Parkspace record, @Param("example") ParkspaceExample example);

    int updateByPrimaryKeySelective(Parkspace record);

    int updateByPrimaryKey(Parkspace record);
}