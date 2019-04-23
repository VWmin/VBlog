package com.vwmin.vblog.mapper;


import com.vwmin.vblog.bean.Article;
import org.apache.ibatis.annotations.*;

@Mapper
public interface ArticleMapper {

    @Select("select * from article where arti_id=#{arti_id}")
    public Article getArtiById(Integer arti_id);

    @Delete("delete * from article where arti_id=#{arti_id}")
    public int deleteArtiById(Integer arti_id);

    @Options(useGeneratedKeys = true, keyProperty = "arti_id") //使用自动生成的主键，需要注明主键
    @Insert("insert into article(arti_title, arti_date, arti_author, arti_content, arti_coverImgUrl, arti_label) " +
            "values(#{arti_title}, #{arti_date}, #{arti_author}, #{arti_content}, #{arti_coverImgUrl}, #{arti_label})")
    public int insertArti(Article article);


}
