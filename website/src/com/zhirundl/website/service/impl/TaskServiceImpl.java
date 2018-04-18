package com.zhirundl.website.service.impl;

import com.zhirundl.website.dao.CMemberMapper;
import com.zhirundl.website.dao.MemberMapper;
import com.zhirundl.website.dao.TaskModelMapper;
import com.zhirundl.website.model.Member;
import com.zhirundl.website.model.TaskModel;
import com.zhirundl.website.service.IMemberService;
import com.zhirundl.website.service.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceImpl implements ITaskService {

	@Autowired
	TaskModelMapper taskModelMapper;

	@Override
	public List<TaskModel> selectTaskByDate(TaskModel taskModel) {
		return taskModelMapper.selectByDate(taskModel);
	}

	@Override
	public int insertWithoutId(TaskModel taskModel) {
		return taskModelMapper.insertWithoutId(taskModel);
	}
}