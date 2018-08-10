package com.neuedu.propertyMgr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuedu.propertyMgr.model.Village;
import com.neuedu.propertyMgr.service.VillageService;

@Controller
public class VillageController {
	
	@Autowired
	private VillageService villageService;
	
	@RequestMapping(value="/getVillage")
	public @ResponseBody String getVillage(@RequestParam String name) throws Exception{
		Village village=villageService.getVillageByName(name);
		ObjectMapper json=new ObjectMapper();
		String strJson=json.writeValueAsString(village);
		return strJson;
		
	}
}
