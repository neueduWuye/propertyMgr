package com.neuedu.propertyMgr.service;

import java.util.List;

import com.neuedu.propertyMgr.model.Emp;

/*
 * 职员表业务层接口
 */
public interface EmpService {
	public Emp selectById(int id);//通过id查职员
	public List<Emp> selectByDept(int dept);//根据部门查职员
	public int deleteById(int id);//根据id删除
	
}
