package com.neuedu.propertyMgr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.propertyMgr.dao.ManagerMapper;
import com.neuedu.propertyMgr.pojo.Manager;
import com.neuedu.propertyMgr.pojo.Owner;


@Service
public class ManagerService {
   @Autowired
   private ManagerMapper managerMapper;
   /**
    * 通过姓名密码登录
    * @param manager
    * @return
    */
   public Manager getManagerByName(String name,String pwd) {
	return managerMapper.getManagerByNmaePwd(name,pwd);
   }
   /**
    * 注册
    */
   public int addManagerById(Manager manager) {
	return managerMapper.insert(manager);
   }
   /**
    * 根据id修改信息
    * @param manager
    * @return
    */
   public int updateManagerById(Manager manager) {
	return managerMapper.updateByPrimaryKey(manager);
	   
   }
   /**
    * 根据id删除信息
    * @param id
    * @return
    */
   public int deleteManagerById(Integer id) {
	return managerMapper.deleteByPrimaryKey(id);
	   
   }
   
   public int deleteOwnerByNumber(String number) {
	   return managerMapper.deleteByNumber(number);
   }
   
  
}
