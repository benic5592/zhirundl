package com.zhirundl.website.service;

import com.zhirundl.website.model.TaskModel;

import java.util.List;


public interface ITaskService {


	public List<TaskModel> selectTaskByDate(TaskModel taskModel);
	public int insertWithoutId(TaskModel taskModel);


}