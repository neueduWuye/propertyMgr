package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.neuedu.propertyMgr.dao.ManagerMapper;
import com.neuedu.propertyMgr.dao.VillageMapper;
import com.neuedu.propertyMgr.model.Manager;
import com.neuedu.propertyMgr.model.Village;
import com.neuedu.propertyMgr.service.VillageService;

public class Test01 {
	public static void main(String[] args) {
	

		ApplicationContext context =new ClassPathXmlApplicationContext("applicationContext.xml");
		
		VillageService villageService=(VillageService) context.getBean("villageService");
		Village village1=villageService.getVillageById(1);
		VillageMapper dao=(VillageMapper)context.getBean("villageMapper");
		Village village=dao.selectByPrimaryKey(1);
		System.out.println(village.getDeveloper());
		System.out.println(village1.getDeveloper());

		ManagerMapper managerMapper =(ManagerMapper) context.getBean("managerMapper");
		managerMapper.selectByPrimaryKey(1);
	}
}
