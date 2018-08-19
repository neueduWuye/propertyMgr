package com.neuedu.propertyMgr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.neuedu.propertyMgr.dao.OwnerMapper;
import com.neuedu.propertyMgr.pojo.Owner;

@Service
public class OwnerService {
	@Autowired
  private OwnerMapper ownerMapper;
	public Owner getOwner(Owner owner) {
		return ownerMapper.getOwnerByNamePwd(owner);
	}
	/**
	 * 注册
	 */
	public int addOwner(Owner owner) {
		return ownerMapper.insert(owner);
	}
}
