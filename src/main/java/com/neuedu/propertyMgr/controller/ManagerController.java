package com.neuedu.propertyMgr.controller;



import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuedu.propertyMgr.pojo.Manager;
import com.neuedu.propertyMgr.pojo.Owner;
import com.neuedu.propertyMgr.service.ManagerService;
import com.neuedu.propertyMgr.service.OwnerService;


@RestController
public class ManagerController {
    @Autowired
    private ManagerService managerService;
    @Autowired
    private OwnerService ownerService;
    /*
     *管理员登录
     * */
	@RequestMapping(value="/getManager",method=RequestMethod.GET)
	public ModelAndView getManagerByNamePwd(HttpSession session, @RequestParam("name") String name,@RequestParam("pwd") String pwd,@RequestParam("type") int type)
	throws Exception{
		ModelAndView model=new ModelAndView();
		System.out.println(type);
		if (type==0) {
			Manager manager = managerService.getManagerByName(name,pwd);
			model.addObject("manager",manager);
			session.setAttribute("manager", manager);
			model.setViewName("index");
			return model;
		}else {
			Owner owner=ownerService.getOwner(name, pwd);
			model.addObject("owner",owner);
			model.setViewName("user-template");
			session.setAttribute("owner", owner);
			return model;
		}
		
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
    

