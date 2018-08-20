package com.neuedu.propertyMgr.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuedu.propertyMgr.pojo.Manager;
import com.neuedu.propertyMgr.service.ManagerService;


@RestController
public class ManagerController {
    @Autowired
    private ManagerService managerService;
    /*
     *管理员登录
     * */
	@RequestMapping(value="/getManager",method=RequestMethod.GET)
	public String getManagerByNamePwd(Manager manager)
	throws Exception{
		Manager managers = managerService.getManagerByName(manager);
		 ObjectMapper json=new ObjectMapper();
		 String strJson=json.writeValueAsString(managers);
		return strJson;
	}
	@RequestMapping(value="/addManager", method=RequestMethod.POST)
	public int addManagerById(Manager manager) {
		int rs=managerService.addManagerById(manager);
		if(rs>0) {
			System.out.println("注册成功");
		}
		else {
			System.out.println("注册失败");
		}
		return rs;
	}
	@RequestMapping(value="/updateManager",method=RequestMethod.PUT)
	public int updateManagerById(Manager manager) {
		int rs=managerService.updateManagerById(manager);
		if(rs>0) {
			System.out.println("修改成功");
		}
		else {
			System.out.println("修改失败");
		}
		return rs;
	}
	@RequestMapping(value="/deleteManager" , method=RequestMethod.DELETE)
	public int deleteManagerById(int id) {
		int rs=managerService.deleteManagerById(id);
		if(rs>0) {
			System.out.println("删除成功");
		}
		else {
			System.out.println("删除失败");
		}
		return rs;
		
	}
}
    

