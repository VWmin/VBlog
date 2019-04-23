package com.vwmin.vblog.config;

import com.vwmin.vblog.interceptor.LoginHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // 默认界面映射到登陆界面
        registry.addViewController("/").setViewName("login");
        registry.addViewController("/index.html").setViewName("login");
        registry.addViewController("/page/1").setViewName("index");

        registry.addViewController("/admin").setViewName("admin/login");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 设置访问拦截
//        registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/**")
//                .excludePathPatterns("/", "/login", "/static/**", "/webjars/**", "/error")
//                .excludePathPatterns("/css/**", "/js/**", "/ext/**", "/img/**");
    }
}
