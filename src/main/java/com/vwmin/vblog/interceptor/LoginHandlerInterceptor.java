package com.vwmin.vblog.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginHandlerInterceptor implements HandlerInterceptor {
    Logger logger = LoggerFactory.getLogger(getClass());
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object user = request.getSession().getAttribute("loginUser");
        if(user == null){
            logger.info("未登录访问: "+ request.getRequestURI());
            //未登陆，返回登陆页面
            request.setAttribute("msg", "请登录后尝试 ");
            request.getRequestDispatcher("/").forward(request, response);
            return false;
        }else {
            //已登陆，放行
            return true;
        }
    }
}
