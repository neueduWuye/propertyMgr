package com.neuedu.propertyMgr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.neuedu.propertyMgr.pojo.Owner;
import com.neuedu.propertyMgr.service.OwnerService;


@Controller
@SessionAttributes({"User"})

public class OwnerController {
	
	@Autowired
   private OwnerService ownerService;
	
	@RequestMapping(value="/getOwner", method=RequestMethod.GET)
	public ModelAndView getOwner(@RequestParam("name") String name,@RequestParam("pwd") String pwd) {
		System.out.println(pwd);
		System.out.println(name);
		Owner user=ownerService.getOwner(name,pwd);
		ModelAndView model=new ModelAndView("index");
		model.addObject("owner",user);
	
		if (user!=null) {
			System.out.println("登录成功");
			
		}else {
			System.out.println("登录失败");
		}
		return model;
	}
	@RequestMapping("/addOwner")
	public String addOwner(Owner owner) {
		//int rs=ownerService.addOwner(owner);
		return "login";
	}
		/*
		 * 管理员查询所有业主
		 */
	   @RequestMapping(value="/getAllOwner", method=RequestMethod.GET)
	   @ResponseBody
	   public List<Owner> getAllOwner(){
	
		   List<Owner> list=ownerService.getAllOwner();
		   return list;
	   }
	   /*
	    * 管理员添加新业主
	    */
	   @RequestMapping(value="/newOwner")
	   public String newOwner(Owner owner) {
		   ownerService.addOwner(owner);
		return "admin-owner";
	   }
}
