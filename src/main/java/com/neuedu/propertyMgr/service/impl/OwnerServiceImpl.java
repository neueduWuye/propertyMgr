package com.neuedu.propertyMgr.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.propertyMgr.dao.OwnerMapper;
import com.neuedu.propertyMgr.model.Owner;
import com.neuedu.propertyMgr.service.OwnerService;

@Service("ownerService")
public class OwnerServiceImpl implements OwnerService{
	
	@Autowired
	private OwnerMapper ownerMapper;
	
	
	public int deleteById(int id) {
		
		return ownerMapper.deleteByPrimaryKey(id);
	}

	
	public int update(Owner owner) {
		
		return ownerMapper.updateByPrimaryKey(owner);
	}

	
	public Owner ownerLogin(String name, String pwd) {
		
		return ownerMapper.selectByNamePwd(name, pwd);
	}

	
	public Owner selectById(int id) {
		
		return ownerMapper.selectByPrimaryKey(id);
	}

	
	public List<Owner> selectAll() {
		
		return ownerMapper.selectAllOwner();
	}


	public int insert(Owner owner) {
		
		return ownerMapper.insert(owner);
	}
	
}
