package com.vwmin.vblog.bean;

import java.util.Date;

public class Article {
    private Integer arti_id;

    private String arti_title;
    private Date arti_date;
    private String arti_author;


    private String arti_content;
    private String arti_coverImgUrl;
    private String arti_label;

    public Integer getArti_id() {
        return arti_id;
    }

    public void setArti_id(Integer arti_id) {
        this.arti_id = arti_id;
    }

    public String getArti_title() {
        return arti_title;
    }

    public void setArti_title(String arti_title) {
        this.arti_title = arti_title;
    }

    public Date getArti_date() {
        return arti_date;
    }

    public void setArti_date(Date arti_date) {
        this.arti_date = arti_date;
    }

    public String getArti_author() {
        return arti_author;
    }

    public void setArti_author(String arti_author) {
        this.arti_author = arti_author;
    }

    public String getArti_content() {
        return arti_content;
    }

    public void setArti_content(String arti_content) {
        this.arti_content = arti_content;
    }

    public String getArti_coverImgUrl() {
        return arti_coverImgUrl;
    }

    public void setArti_coverImgUrl(String arti_coverImgUrl) {
        this.arti_coverImgUrl = arti_coverImgUrl;
    }

    public String getArti_label() {
        return arti_label;
    }

    public void setArti_label(String arti_label) {
        this.arti_label = arti_label;
    }
}
