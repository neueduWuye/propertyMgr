package com.neuedu.propertyMgr.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.propertyMgr.dao.VillageMapper;
import com.neuedu.propertyMgr.model.Village;
import com.neuedu.propertyMgr.service.VillageService;

@Service("villageService")
public class VillageServiceImpl implements VillageService{
	@Autowired VillageMapper villageMapper;

	public Village getVillageByName(String name) {
		
		return villageMapper.selectByName(name);
	}
	
	
}
