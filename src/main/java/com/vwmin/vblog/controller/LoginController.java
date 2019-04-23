package com.vwmin.vblog.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class LoginController {
    Logger logger = LoggerFactory.getLogger(getClass());



    @GetMapping({"/login", "/"})
    public String login(){
        return "login";
    }

    @PostMapping("/login")
    public String chkLogin(@RequestParam("username") String username,
                           @RequestParam("password") String password,
                           Map<String, Object> map,
                           HttpSession session){

        logger.info("username:"+username + "\tpassword:"+password);

        if(!StringUtils.isEmpty(username) && "123456".equals(password)){
            logger.info("user: " + username + "\tLogin success.");
            session.setAttribute("loginUser", username);
            return "redirect:/index";
        }else{
            map.put("msg", "用户名或密码错误");
            return "login";
        }


    }

    @GetMapping("/admin/login")
    public String adminLogin(){
        return  "admin/login";
    }

    @PostMapping("/admin/login")
    public String chkAdminLogin(@RequestParam("username") String username,
                                @RequestParam("password") String password,
                                Map<String, Object> map,
                                HttpSession session){


        if(!StringUtils.isEmpty(username) && "123456".equals(password)){
            return "redirect:/admin/dashboard";
        }else{
            map.put("msg", "用户名或密码错误");
            return "admin/login";
        }

    }



}
