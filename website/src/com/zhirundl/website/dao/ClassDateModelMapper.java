package com.zhirundl.website.dao;

import com.zhirundl.website.model.ClassDateModel;
import java.util.List;

public interface ClassDateModelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ClassDateModel record);

    ClassDateModel selectByPrimaryKey(Integer id);

    List<ClassDateModel> selectAll();

    int updateByPrimaryKey(ClassDateModel record);
}