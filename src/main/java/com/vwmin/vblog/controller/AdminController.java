package com.vwmin.vblog.controller;

import com.vwmin.vblog.bean.Article;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/dashboard")
    public String dashboard(){
        return "admin/dashboard";
    }

    /**
     * 显示所有文章管理页面
     * @return
     */
    @GetMapping("/articles")
    public String showArticles(){
        return "admin/article/list";
    }


    /**
     * 进入文章编辑页面
     * @param model
     * @return
     */
    @GetMapping("/article")
    public String toEditPage(Model model){

        return "/admin/article/edit";
    }

    @PostMapping("/article")
    public String insert(Article article){

        return "redirect:/articles";
    }
}
