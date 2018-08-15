package com.neuedu.propertyMgr.service;
/*
 * 业主信息业务层接口
 */

import java.util.List;

import com.neuedu.propertyMgr.model.Owner;

public interface OwnerService {
	public int deleteById(int id);//根据id删除业主信息(管理员)
	public int update(Owner owner);//修改业主信息(业主)
	public int insert(Owner owner);//业主注册(管理员)
	public Owner ownerLogin(String name,String pwd);//通过姓名密码登录
	public Owner selectById(int id);//查询业主个人信息
	public List<Owner> selectAll();//查询业主信息列表(管理员)
	
}
