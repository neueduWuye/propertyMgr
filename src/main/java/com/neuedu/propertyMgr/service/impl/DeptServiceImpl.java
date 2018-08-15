package com.neuedu.propertyMgr.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.propertyMgr.dao.DeptMapper;
import com.neuedu.propertyMgr.model.Dept;
import com.neuedu.propertyMgr.service.DeptService;
@Service("deptService")
public class DeptServiceImpl implements DeptService{
	@Autowired 
	private DeptMapper deptMapper;

	public List<Dept> selectAllDept() {
		
		return deptMapper.selectAll();
	}
	
}
