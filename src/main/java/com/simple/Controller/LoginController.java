package com.simple.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.simple.Account;
import com.simple.LoginBean;
import com.simple.service.LoginService;

@Controller
public class LoginController {
	/*
	 * @RequestMapping("/login") public String loin(Model model) {
	 * model.addAttribute("msg", "Please Enter Your Login Details"); return "login";
	 * }
	 */

	@Autowired
	private LoginService service;

	/*
	 * @RequestMapping(value = "/addlogin", method = RequestMethod.GET)
	 * public @ResponseBody String savedetails(@RequestBody String account) throws
	 * ParseException {
	 * 
	 * Account ac = new Account(); JSONParser parser = new JSONParser(); JSONObject
	 * jsonobject = (JSONObject) parser.parse(account);
	 * System.out.println("hiiiii"); ac.setUsername((String)
	 * jsonobject.get("username")); ac.setMobnum((String) jsonobject.get("mobnum"));
	 * ac.setMail((String) jsonobject.get("mail")); ac.setPwd((String)
	 * jsonobject.get("pwd")); ac.setAddr1((String) jsonobject.get("addr1"));
	 * ac.setAddr2((String) jsonobject.get("addr2"));
	 * 
	 * return service.savedata(ac);
	 * 
	 * }
	 */

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody String details(@RequestParam("username") String username,
			@RequestParam("password") String password, HttpServletRequest request, HttpServletResponse response) {
		System.out.println("hiiiii");
		return service.getUser(username, password);
	}
}