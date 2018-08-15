package com.neuedu.propertyMgr.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.propertyMgr.dao.EmpMapper;
import com.neuedu.propertyMgr.model.Emp;
import com.neuedu.propertyMgr.service.EmpService;

@Service("empService")
public class EmpServiceImpl implements EmpService{
	
	@Autowired 
	private EmpMapper empMapper;

	public Emp selectById(int id) {
		
		return empMapper.selectByPrimaryKey(id);
	}

	public List<Emp> selectByDept(int dept) {
		
		return empMapper.selectByDept(dept);
	}

	public int deleteById(int id) {
		
		return empMapper.deleteByPrimaryKey(id);
	}
	 

}
