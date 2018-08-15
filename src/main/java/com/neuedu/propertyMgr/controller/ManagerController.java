package com.neuedu.propertyMgr.controller;

import javax.swing.text.View;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.fabric.xmlrpc.base.Data;
import com.neuedu.propertyMgr.dao.ManagerMapper;
import com.neuedu.propertyMgr.model.Manager;
@Controller
public class ManagerController {
	@Autowired 
	private ManagerMapper ManagerMapper;
	/*
	 * 获取管理员信息
	 * 登录验证
	 */
	@RequestMapping(value="/managerLogin")
	public @ResponseBody String managerLogin(@RequestParam("name") String name,@RequestParam("pwd") String pwd)
	throws Exception{
		Manager manager = ManagerMapper.getManagerByNamePwd(name, pwd);
		ObjectMapper json=new ObjectMapper();
		String strjson=json.writeValueAsString(manager);
		return strjson;
	}
	/*
	 * 获取表单所有元素
	 * 进行注册管理员账号
	 */
	@RequestMapping(value="/managerRegist")
	public @ResponseBody ModelAndView managerRegist(@ModelAttribute Manager manager) throws Exception{
		
		Manager manager2 = ManagerMapper.getManagerByNamePwd(manager.getName(), manager.getPwd());
		ModelAndView modelAndView=new ModelAndView();
		modelAndView.addObject(manager);
		//指定视图
		modelAndView.setViewName("webapp/login");
		return modelAndView;
		
	}
}
