package test;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.neuedu.propertyMgr.dao.ManagerMapper;
import com.neuedu.propertyMgr.dao.VillageMapper;
import com.neuedu.propertyMgr.model.Dept;
import com.neuedu.propertyMgr.model.Manager;
import com.neuedu.propertyMgr.model.Owner;
import com.neuedu.propertyMgr.model.Village;
import com.neuedu.propertyMgr.service.DeptService;
import com.neuedu.propertyMgr.service.OwnerService;
import com.neuedu.propertyMgr.service.VillageService;

public class Test01 {
	public static void main(String[] args) {
	

		ApplicationContext context =new ClassPathXmlApplicationContext("applicationContext.xml");
		
/*		VillageService villageService=(VillageService) context.getBean("villageService");
		Village village1=villageService.getVillageById(1);
		VillageMapper dao=(VillageMapper)context.getBean("villageMapper");
		Village village=dao.selectByPrimaryKey(1);
		System.out.println(village.getDeveloper());
		System.out.println(village1.getDeveloper());*/
		/*
		 * 测试管理员信息获取
		 */
		ManagerMapper managerMapper =(ManagerMapper) context.getBean("managerMapper");
		//Manager manager= managerMapper.selectByPrimaryKey(1);
		Manager manager2=managerMapper.getManagerByNamePwd("张三", "123456");
		//System.out.println(manager.getName());
		System.out.println(manager2);
 
	}
}
