package com.neuedu.propertyMgr.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.propertyMgr.dao.ManagerMapper;
import com.neuedu.propertyMgr.model.Manager;
import com.neuedu.propertyMgr.service.ManagerService;

@Service("managerService")
public class ManagerServiceImpl implements ManagerService{
	@Autowired ManagerMapper managerMapper;
	
	/*
	 *管理员注册
	 *返回受影响行
	 */
	public int setManager(Manager manager) {
		
		return managerMapper.insert(manager);
	}
	/*
	 * 
	* <p>Title: getManagerById</p>
	* <p>Description:通过id获取管理员对象 </p>
	* @param id
	* @return manager
	* @see com.neuedu.propertyMgr.service.ManagerService#getManagerById(int)
	 */
	public Manager getManagerById(int id) {
		
		return managerMapper.selectByPrimaryKey(id);
	}
	/*
	* <p>Title: deleteManagerById</p>
	* <p>Description: 删除管理员信息</p>
	* @param id
	* @return 受影响行 int
	 */
	public int deleteManagerById(int id) {
		return managerMapper.deleteByPrimaryKey(id);
		
	}
	public Manager getManagerByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	/*
	*  管理员登录
	*/
	
	public Manager managerLogin(String name, String pwd) {
		// TODO Auto-generated method stub
		return managerMapper.getManagerByNamePwd(name, pwd);
	}
	/*
	*  管理员注册
	*/
	
	public int managerRegist(Manager manager) {
		// TODO Auto-generated method stub
		return managerMapper.insert(manager);
	}
}
