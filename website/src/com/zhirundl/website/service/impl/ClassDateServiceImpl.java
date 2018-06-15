package com.zhirundl.website.service.impl;

import com.zhirundl.website.dao.ClassDateModelMapper;
import com.zhirundl.website.model.ClassDateModel;
import com.zhirundl.website.service.IClassDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassDateServiceImpl implements IClassDateService {

	@Autowired
	ClassDateModelMapper classDateModelMapper;

	@Override
	public List<ClassDateModel> selectAll() {
		List<ClassDateModel> list= classDateModelMapper.selectAll();
		for (ClassDateModel classDateModel : list) {
			String str = classDateModel.getClassDate();
			try {
				String[] arr = null;
				if(str.contains("/")){
					arr = str.split("/");
				}
				if(str.contains("-")){
					arr = str.split("-");
				}

				classDateModel.setClassDate(arr[0]+"年"+arr[1]+"月"+arr[2]+"日");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
//		return classDateModelMapper.selectAll();
		return list;



	}

	@Override
	public int updateClassDate(List<ClassDateModel> models){
		int i =0;
		for( ClassDateModel model : models) {

			i += classDateModelMapper.updateByPrimaryKey(model);
		}
		return i;
	}

}