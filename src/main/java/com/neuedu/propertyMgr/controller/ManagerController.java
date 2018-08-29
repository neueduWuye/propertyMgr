package com.neuedu.propertyMgr.controller;



import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.fabric.xmlrpc.base.Data;
import com.neuedu.propertyMgr.pojo.Manager;
import com.neuedu.propertyMgr.pojo.Owner;
import com.neuedu.propertyMgr.pojo.Pager;
import com.neuedu.propertyMgr.service.ManagerService;
import com.neuedu.propertyMgr.service.OwnerService;


@Controller
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
		if (type==0) {
			Manager manager = managerService.getManagerByName(name,pwd);
			model.addObject("manager",manager);
			session.setAttribute("manager", manager);
			model.setViewName("admin-template");
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
	/*
	 * 删除住户
	 */
	@RequestMapping(value="/deleteOwner")
	public String  deleteOwnerByNumber(@RequestParam(value="number") String number) {
		managerService.deleteOwnerByNumber(number);
		return "admin-owner";
	}
	
	/**
	 * 分页查询
	 */
	@RequestMapping(value = "/getPager/{pageSize}/{pageIndex}")
	public ModelAndView getPager(@PathVariable("pageSize") int pageSize, @PathVariable("pageIndex") int pageIndex) {
		ModelAndView model = new ModelAndView("/admin-owner");
		Pager<Owner> pager = ownerService.getPager(pageIndex, pageSize);
		model.addObject("pager", pager);

		return model;
	}
	
	/*
	 * 通过名字/房号查询业主信息
	 */
	@RequestMapping(value="/getTheOwner")
	public ModelAndView getTheOwner(@RequestParam(value="nORn") String nameORnumber) {
		Owner owner;
		Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$"); //判断是否为数字 
		 ModelAndView mAndView=new ModelAndView("admin-theowner");
		 
		if (pattern.matcher(nameORnumber).matches()) {
			owner=ownerService.getOwnerByNumber(nameORnumber);
//			if (owner.getSex()==1) {
//				mAndView.addObject("sex", "男");
//			}else {
//				mAndView.addObject("sex", "女");
//			}
			mAndView.addObject(owner);
		}else {
			owner=ownerService.getOwnerByName(nameORnumber);
			mAndView.addObject(owner);
		}
		return mAndView;
		
	}
}
    

