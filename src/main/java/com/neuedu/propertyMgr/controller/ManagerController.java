package com.neuedu.propertyMgr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
	@RequestMapping(value="/getManager")
	public @ResponseBody Manager getManagerByNamePwd(@RequestParam String name,@RequestParam String pwd)
	throws Exception{
		Manager manager = ManagerMapper.getManagerByNamePwd(name, pwd);
		
		return manager;
	}
}
