package com.neuedu.propertyMgr.service;

import com.neuedu.propertyMgr.model.Manager;
/*
 * 管理员操作功能业务层接口
 */
public interface ManagerService {
	public int setManager(Manager manager);//注册
	public Manager getManagerById(int id );//通过id查manager
	public Manager getManagerByName(String name);//通过姓名查manager
	public int deleteManagerById(int id);//通过id删除管理员
	public Manager managerLogin(String name,String pwd);//管理员登录
	public int managerRegist(Manager manager);//管理员注册
}
