package com.neuedu.propertyMgr.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.neuedu.propertyMgr.dao.OwnerMapper;
import com.neuedu.propertyMgr.pojo.Owner;
import com.neuedu.propertyMgr.pojo.Pager;

@Service
public class OwnerService {
	@Autowired
  private OwnerMapper ownerMapper;
	public Owner getOwner(String name,String pwd) {
		return ownerMapper.getOwnerByNamePwd(name,pwd);
	}
	/**
	 * 注册
	 */
	public int addOwner(Owner owner) {
		return ownerMapper.insert(owner);
	}
	
	/**
	    * 查询所有业主信息
	    * 返回数组
	    */
	   public List<Owner> getAllOwner(){
	   
		   return ownerMapper.getAllOwner();
	   }
	   
	   /**
		 * 根据条件查询分页
		 */
		public Pager<Owner> getPager(int pageIndex, int pageSize) {
			int startIndex = (pageIndex - 1) * pageSize;// 计算出起始分页值
			int dataCount = ownerMapper.getCount();
			Map<String, Object> where = new HashMap<String, Object>();
			where.put("stratIndex", startIndex);
			where.put("pageSize", pageSize);
			List<Owner> list = ownerMapper.getUserTypeByWhere(where);
			//组织通用分页类
			Pager<Owner> pager = new Pager<Owner>(pageIndex, pageSize, dataCount, list);
			return pager;
		}
		
		 public Owner getOwnerByName(String name) {
			   return ownerMapper.getOwnerByName(name);
		   }
		   
		   public Owner getOwnerByNumber(String number) {
			   return ownerMapper.getOwnerByNumber(number);
		   }

}
