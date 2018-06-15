package com.zhirundl.website.service;

import com.zhirundl.website.model.ClassDateModel;

import java.util.List;


public interface IClassDateService {


	public List<ClassDateModel> selectAll();

	public int updateClassDate(List<ClassDateModel> model);
}