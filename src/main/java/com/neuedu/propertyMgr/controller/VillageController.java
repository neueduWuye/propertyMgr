package com.neuedu.propertyMgr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuedu.propertyMgr.dao.ManagerMapper;
import com.neuedu.propertyMgr.model.Manager;
import com.neuedu.propertyMgr.model.Village;
import com.neuedu.propertyMgr.service.VillageService;

@Controller
public class VillageController {
	
	@Autowired
	private VillageService villageService;
	private ManagerMapper ManagerMapper;
	
	/*
	 * 获取小区信息
	 */
	@RequestMapping(value="/getVillage")
	public @ResponseBody String getVillage(@RequestParam String name) throws Exception{
		Village village=villageService.getVillageById(1);
		ObjectMapper json=new ObjectMapper();
		String strJson=json.writeValueAsString(village);
		return strJson;
		
	}
	
}
