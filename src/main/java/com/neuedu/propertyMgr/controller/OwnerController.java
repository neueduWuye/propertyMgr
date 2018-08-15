package com.neuedu.propertyMgr.controller;

import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuedu.propertyMgr.model.Owner;
import com.neuedu.propertyMgr.service.OwnerService;

@Controller
@ResponseBody
@RequestMapping("/owner")
@SessionAttributes({"owner"})
public class OwnerController {
	@Autowired
	private OwnerService ownerService;
	
	
	/**
	 * 业主登录
	 * @param owner
	 * @param session
	 * @return json
	 * @throws Exception
	 */
	@RequestMapping(value="/login")
	public String login(Owner owner,
			HttpSession session) throws Exception{
		//2、调用
		Owner login_owner=ownerService.ownerLogin(owner.getName(), owner.getPwd());
		String oJson=null;
		//3、转
		if (login_owner!=null) {
			session.setAttribute("owner",login_owner);
			ObjectMapper mapper=new ObjectMapper();
			oJson=mapper.writeValueAsString(login_owner);
		}
		
		return oJson;
		
	}
	/**
	 * 业主注册
	 * @param owner
	 * @param session
	 * @return 受影响行 int
	 */
	@RequestMapping(value="/regist")
	public int regist(Owner owner,HttpSession session) throws Exception{
		int regist_owner=ownerService.insert(owner);
		return regist_owner;
	}
	
}
