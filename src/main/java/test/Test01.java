package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.neuedu.propertyMgr.dao.VillageMapper;
import com.neuedu.propertyMgr.model.Village;

public class Test01 {
	public static void main(String[] args) {
	

		ApplicationContext context =new ClassPathXmlApplicationContext("resources/applicationContext-1.xml");
		
		VillageMapper dao=(VillageMapper)context.getBean("villageMapper");
		Village village=dao.selectByName("云顶居");
		System.out.println(village.getDeveloper());

		
	}
}
