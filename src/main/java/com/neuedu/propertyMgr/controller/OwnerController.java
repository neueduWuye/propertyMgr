package com.neuedu.propertyMgr.controller;

import javax.servlet.http.HttpSession;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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
		System.out.println(pwd);
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
   
}
