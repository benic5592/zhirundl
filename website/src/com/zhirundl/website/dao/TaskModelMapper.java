package com.zhirundl.website.dao;

import com.zhirundl.website.model.TaskModel;

import java.util.List;

public interface TaskModelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TaskModel record);


    int insertSelective(TaskModel record);

    TaskModel selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TaskModel record);

    int updateByPrimaryKey(TaskModel record);


    int insertWithoutId(TaskModel record);
    List<TaskModel> selectByDate(TaskModel record);
}